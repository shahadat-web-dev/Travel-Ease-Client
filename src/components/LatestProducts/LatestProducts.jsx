import React, { use } from 'react';
import Product from '../Product/Product';

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  console.log(products);

  return (
    <div>
     
      <div className='grid px-4 gap-5 grid-cols-1 md:grid-cols-3 container mx-auto'>
        {
          products.map(product =>
            <Product
              product={product}
              key={product._id}>

            </Product>)
        }
      </div>
    </div>
  );
};

export default LatestProducts;