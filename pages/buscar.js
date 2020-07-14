import React from 'react';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';

const buscar = () => {

    const router = useRouter();
    const { query: {q}} = router;
    console.log(q);
    return (
        <>
            <Layout>
              <h1>Buscar</h1>
            </Layout>
        </>
        
    );
}

export default buscar;