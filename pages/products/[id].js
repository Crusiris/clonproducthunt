import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';
import Error404 from '../../components/layout/404';
import Comments from '../../components/layout/Comments';
import Spinner from '../../components/layout/Spinner';
import Layout from '../../components/layout/Layout';
import { Campo, Submit } from '../../components/ui/Form';
import Button from '../../components/ui/Button';
import styled from '@emotion/styled';
//Libreria para formatear la fecha
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const TitleProduct = styled.h1`
    text-align:center;
    margin-top:5rem;
`;

const ContainerProduct = styled.div`
    @media(min-width:768px){
        display:grid;
        grid-template-columns:2fr 1fr;
        colunm-gap:2rem;
    }
`;

const ContainerVotes = styled.div`
    margin-top:5rem;

    p{
        text-align:center;
    }
`;

const Product = () => {
    //Routing para obtener el id actual
    const router = useRouter();
    //destructuring
    const { query:{id} } = router;
    //Context de firebase
    const { firebase, user } = useContext(FirebaseContext);

    //state locales
    const [ product, saveProduct ] = useState({});
    const [ error, setError ] = useState(false);
    const [ commentary, setCommentary ]=useState({})

    useEffect(()=>{
        if(id){
            //Funcion que obtiene el producto de la bd segun el id
            const getProduct = async ()=> {
                const productQuery = await firebase.db.collection('products').doc(id);
                const product = await productQuery.get();
                if(product.exists){
                    saveProduct(product.data());
                }else {
                    setError(true)
                }
            }
            getProduct();
        }
    },[id, product]);

    if(Object.keys(product).length === 0) return <Spinner/>

    const { name, comments, votes, urlimage, url, business, create, description, creator, hasVoted }=product;
    const {namecreator} = creator;

    //Funcion para manejar los votos
    const votesProduct = ()=>{
        if(!user){
            return router.push('/login');
        }

         //obtener y sumar votos
         const newTotal = votes + 1;

        //Verificando si el usuario voto, entonces no puede volver a votar
        if(hasVoted.includes(user.uid)) return;
        
        const newhasVoted = [...hasVoted, user.uid ];
         //Actualizar con los nuevos votos y el usuario que voto base de datos
         firebase.db.collection('products').doc(id).update({
             votes:newTotal, 
             hasVoted:newhasVoted
            });
         //Actualizar state
         saveProduct({
             ...product,
             votes:newTotal
         });
    }

    const onChangecommentary = (e)=> {
        setCommentary({
            ...commentary,
            [e.target.name]:e.target.value
        })
    }

    const onsubmitcommentary = (e)=>{
        e.preventDefault();

        if(!user){
            return router.push('/login');
        }

        //Informacion para el comentario
        commentary.userid= user.uid;
        commentary.username = user.displayName;

        //copia de los comentarioss en base de datos y añadir el comentario
        const newcommentary=[ ...comments,commentary ]
        //Actualizar BD
        firebase.db.collection('products').doc(id).update({comments:newcommentary})
        //Actializar state
        saveProduct({
            ...product,
            comments:newcommentary
        })

    }

    return (
        <>
         <Layout/>
            {error && <Error404/>}

            <div className="container">
                <TitleProduct>{name}</TitleProduct>

                <ContainerProduct>
                    <div>
                        <p>Publicado hace: { formatDistanceToNow(new Date(create), {locale:es}) }</p>
                       <p>Publicado por {namecreator} de {business}</p>
                        <img src={urlimage}/>
                        <p>{description}</p>

                        {user &&
                            <>
                                <h2>Agrega tu comentario</h2>
                                <form
                                
                                onSubmit={onsubmitcommentary}>
                                    <Campo>
                                        <input
                                            type="text"
                                            name="message"
                                            onChange={onChangecommentary}
                                        />
                                    </Campo>
                                    <Submit
                                    type="submit"
                                    value="Agregar comentario"
                                    >
                                        
                                    </Submit>

                                    <h2>Comentarios</h2>

                                    <Comments comments={comments}/>
                                </form>
                            </>
                        }
                    </div>
                    
                    <aside>
                        <Button
                            target="_blank"
                            bgColor="true"
                            href={url}
                        >Visitar URL</Button>

                        <ContainerVotes>
                           <p>{votes} Votos</p>

                           {user &&
                                <Button
                                onClick={votesProduct}
                                >
                                    Votar
                                </Button>
                           }

                        </ContainerVotes>
                    </aside>
                </ContainerProduct>
            </div>
        </>
    );
}

export default Product;