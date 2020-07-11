import React  from 'react';
import Layout from '../components/layout/Layout';
import Detailsproducts from '../components/layout/Detailsproducts';
import useProducts from '../hooks/useProducts';

const Populares = () => {

    const { products } = useProducts('votes');

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
export default Populares;
