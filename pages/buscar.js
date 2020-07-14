import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Nocoincidence from '../components/layout/Nocoincidence';
import { useRouter } from 'next/router';
import Detailsproducts from '../components/layout/Detailsproducts';
import useProducts from '../hooks/useProducts';

const buscar = () => {
    const { products } = useProducts('create');
    //State local
    const  [ resultsearch, setresultSearch ]=useState([]);
    const router = useRouter();
    const { query: {q}} = router;

    useEffect(()=> {
        const search = q.toLowerCase();
        const filter = products.filter(product=>{
            return(
                product.name.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search)
            )
        });
        setresultSearch(filter);

    },[q, products]);

    return (
        <>
            <Layout>
              { resultsearch.length === 0 ?
            
                <Nocoincidence/>

                :

                <div className="list-products">
                    <div className="container">
                    <ul className="bg-white">
                        {resultsearch.map(product =>(
                        <Detailsproducts
                            key={product.id}
                            product={product}
                        />
                        ))}

                    </ul>
                    </div>
                </div>

              }
        </Layout>
        </>
        
    );
}

export default buscar;