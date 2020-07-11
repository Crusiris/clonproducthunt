import React, {useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../firebase';

const useProducts = order => {

    const [products, setProducts] = useState([]);
    const { firebase } = useContext(FirebaseContext);
  
    useEffect(()=>{
      //Obtniendo data
      const getProducts = ()=> {
        //metodos de firebase para extraer su data
        firebase.db.collection('products').orderBy(order, 'desc').onSnapshot(driveSnapshot)
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

    
    return {
        products
    }
}

export default useProducts;