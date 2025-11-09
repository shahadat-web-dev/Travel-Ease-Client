import React, { use } from 'react';
import Product from '../Product/Product';

const LatestProducts = ({ LatestProductsPromise }) => {
  const products = use(LatestProductsPromise);
  // console.log(products);


  return (
    <div>
      <div className='flex justify-center pt-20 pb-10'>
        <span className='text-center text-[#FF487C] px-3  py-1  rounded-full font-bold bg-[#F7E1E3]'>Popular Cars</span>
      </div>
      <h2 className='text-5xl pb-10 font-bold text-center'>Latest Vehicel</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
        {
          products.map(product =>
            <Product product={product} key={product._id}>
            </Product>)
        }
      </div>
    </div>
  );
};

export default LatestProducts;