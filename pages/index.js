import React, { useEffect, useState, useContext } from 'react';
import Layout from '../components/layout/Layout';
import Detailsproducts from '../components/layout/Detailsproducts';
import { FirebaseContext } from '../firebase';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(()=>{
    //Obtniendo data
    const getProducts = ()=> {
      //metodos de firebase para extraer su data
      firebase.db.collection('products').onSnapshot(driveSnapshot)
    }
    getProducts();
  }, []);

  //Funcion que maneja el snapshot
  function driveSnapshot(snapshot) {
    const products = snapshot.docs.map(doc =>{
      return {
        //accedemos al id del documento de bd firestore
        id:doc.id,
        //accedemos a toda la data o registro del documento
        ...doc.data()
      }   
    });
    setProducts(products);
  }


  return (
    <div>
        <Layout>
          <div className="list-products">
            <div className="container">
              <ul className="bg-white">
                {products.map(product =>(
                  <Detailsproducts
                    key={product.id}
                    product={product}
                  />
                ))}

              </ul>
            </div>
          </div>
        </Layout>
    </div>
    
  );
}
export default Home;
