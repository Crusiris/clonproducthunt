import React, { useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Form, Campo, Submit, TitleForm, Error } from '../components/ui/Form';

//Validación
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
    //TODO LO QUE ESTE POR FUERA DEL MAIN, PERO DENTRO DEL RETURN SE MOSTRARA EN TODOS LOS COMPONENTES
    const { values, error, handleChange, handleBlur, handleSubmit } = useValidation(state_initial, validationCreateProduct, createProduct);
    //Extrayendo valores del state values
    const {name, business, image, url, description } = values

  //State local
  const [ errorfire , seterrorFire ] = useState(false);
  
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
         description,
         votes:0,
         comments:[],
         create:Date.now()
     }

     //Insertando datos en BD
     firebase.db.collection('products').add(product)
   }
    //TODO LO QUE ESTE POR FUERA DEL MAIN, PERO DENTRO DEL RETURN SE MOSTRARA EN TODOS LOS COMPONENTES
    return (
        <div>
            <Layout>
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

                    {/* <Campo>
                     <label htmlFor="imagen">Imagen</label>
                     <input
                         type="file"
                         id="image"
                         name="image"
                         value={image}
                         onChange={handleChange}
                         onBlur={handleBlur}
                     />
                    </Campo>

                    {error.image && <Error>{error.image}</Error>} */}

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
                     <legend>Sobre tu Proyecto</legend>

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
            
            </Layout>
        </div>
    );
}

export default NewProduct;