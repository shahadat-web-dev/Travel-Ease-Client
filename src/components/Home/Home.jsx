import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import LatestProducts from '../LatestProducts/LatestProducts';

const LatestProductsPromise = fetch('http://localhost:3000/latest-products')
.then(res => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <Suspense fallback={<div>
          <progress className="progress w-56"></progress>
        </div>}>
          <LatestProducts LatestProductsPromise={LatestProductsPromise}></LatestProducts>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;