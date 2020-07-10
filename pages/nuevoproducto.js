import React, { useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layout/Layout';
import Error404 from '../components/layout/404';
import { Form, Campo, Submit, TitleForm, Error } from '../components/ui/Form';

//Validación hooks
import useValidation from '../hooks/useValidation';
import validationCreateProduct from '../validation/validationCreateProduct';

//Firebase
import firebase, { FirebaseContext } from '../firebase';


const state_initial ={
    name:'',
    business:'',
    // image:'',
    url:'',
    description:''
}


const NewProduct = () => {
    //Hooks validate
    const { values, error, handleChange, handleBlur, handleSubmit } = useValidation(state_initial, validationCreateProduct, createProduct);
    //Extrayendo valores del state values
    const {name, business, image, url, description } = values

  //State local
  const [ errorfire , seterrorFire ] = useState(false);

  //State para las imagenes
  const [ nameimg, setNameimg ]=useState('');
  const [ goingup, setGoingup ]= useState(false);
  const [ progress, setProgress ]=useState(0);
  const [ urlimage, setUrlimage ]=useState('');

  //Funciones
 
    const handleUploadStart = () => {
        setProgress(0);
        setGoingup(true);
    }

    const handleProgress = progreso => setProgress({ progreso });

    const handleUploadError = error => {
        setGoingup(error);
        console.error(error);
    };

    const handleUploadSuccess = name => {
        setProgress(100);
        setGoingup(false);
        setNameimg(name)
        firebase
            .storage
            .ref("products")
            .child(name)
            .getDownloadURL()
            .then(url => {
            console.log(url);
            setUrlimage(url);
            } );
    };


  //Context con las operaciones crud de firebase
  const { user, firebase }= useContext(FirebaseContext);
 

  //Hook de routing para redireccionar
  const router = useRouter();


   async function createProduct() {
     //si el usuario no esta autenticado llevar al login
     if(!user){
         return router.push('/login')
     }
     //Crear el objeto de nuevo producto
     const product = {
         name,
         business,
         url,
         urlimage,
         description,
         votes:0,
         comments:[],
         create:Date.now(),
         creator:{
            id:user.uid,
            namecreator:user.displayName
         }
         
     }

     //Insertando datos en BD
     firebase.db.collection('products').add(product);
     return router.push('/');
   }
    //TODO LO QUE ESTE POR FUERA DEL MAIN, PERO DENTRO DEL RETURN SE MOSTRARA EN TODOS LOS COMPONENTES
    return (
        <div>
            <Layout>
            {!user ? <Error404/> : 
             (

                <>
                <TitleForm>Nuevo producto</TitleForm>
                <Form
                onSubmit={handleSubmit} noValidate
                >

                <fieldset>
                    <legend>Informacion General</legend>
                
                    <Campo>
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Campo>
                        {error.name && <Error>{error.name}</Error>}
                    
                        <Campo>
                        <label htmlFor="empresa">Empresa</label>
                        <input
                            type="text"
                            id="business"
                            name="business"
                            placeholder="Nombre empresa"
                            value={business}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        </Campo>

                        {error.business && <Error>{error.business}</Error>}

                        <Campo>
                        <label htmlFor="imagen">Imagen</label>
                        <FileUploader
                            accept="image/*"
                            type="file"
                            id="image"
                            name="image"
                            //  value={image}
                            //  onChange={handleChange}
                            //  onBlur={handleBlur}
                            randomizeFilename
                            storageRef={firebase.storage.ref("products")}
                            onUploadStart={handleUploadStart}
                            onUploadError={handleUploadError}
                            onUploadSuccess={handleUploadSuccess}
                            onProgress={handleProgress}
                        />
                        </Campo>

                        {error.image && <Error>{error.image}</Error>}

                        <Campo>
                        <label htmlFor="url">Url</label>
                        <input
                            type="url"
                            id="url"
                            name="url"
                            value={url}
                            placeholder="Url del producto"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        </Campo>

                        {error.url && <Error>{error.url}</Error>}
                    
                    </fieldset>
                    
                    <fieldset>
                        <legend>Sobre tu Producto</legend>

                        <Campo>
                        <label htmlFor="descripcion">Descripcion</label>
                        <textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        </Campo>

                        {error.description && <Error>{error.description}</Error>}
                    </fieldset>

                    <Submit
                        type="submit"
                        value="Crear Producto"
                    />
                </Form>
                </>
            )
        }
            
            
            </Layout>
        </div>
    );
}

export default NewProduct;