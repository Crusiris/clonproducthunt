import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';
import Error404 from '../../components/layout/404';
import Layout from '../../components/layout/Layout';

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


    return (
        <>
         <Layout/>
            {error && <Error404/>}
        </>
    );
}

export default Product;