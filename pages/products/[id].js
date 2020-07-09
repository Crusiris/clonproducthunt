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
    const { firebase } = useContext(FirebaseContext);

    //state locales
    const [ product, saveProduct ] = useState({});
    const [ error, setError ] = useState(false);

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
    },[id])

    if(Object.keys(product).length === 0) return <Spinner/>

    const { name, comments, votes, urlimage, url, business, create, description, creator }=product;
     const {namecreator} = creator;

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

                        <h2>Agrega tu comentario</h2>
                        <form>
                            <Campo>
                                <input
                                    type="text"
                                    name="message"
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
                    </div>
                    
                    <aside>
                        <Button
                            target="_blank"
                            bgColor="true"
                            href={url}
                        >Visitar URL</Button>

                        <ContainerVotes>
                           <p>{votes} Votos</p>

                           <Button>
                               Votar
                           </Button>

                        </ContainerVotes>
                    </aside>
                </ContainerProduct>
            </div>
        </>
    );
}

export default Product;