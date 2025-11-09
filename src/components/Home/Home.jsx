import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import LatestProducts from '../LatestProducts/LatestProducts';
import StaticSections from '../StasicSection/StaticSections';

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
      <div className='container mx-auto mb-30'>
        <StaticSections></StaticSections>
      </div>
    </div>
  );
};

export default Home;