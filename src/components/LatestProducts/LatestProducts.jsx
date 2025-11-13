import React, { use } from 'react';
import Product from '../Product/Product';

const LatestProducts = ({latestProductsPromise}) => {
  const products = use(latestProductsPromise);
  console.log(products);
  
  return (
    <div className='grid gap-5 grid-cols-1 md:grid-cols-3 container mx-auto'>
      {
        products.map(product => 
        <Product 
        product={product}
        key={product._id}>

        </Product>)
      }
    </div>
  );
};

export default LatestProducts;