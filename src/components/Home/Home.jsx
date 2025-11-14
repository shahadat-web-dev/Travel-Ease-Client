
import { Suspense } from 'react';
import Banner from '../Banner/Banner';
import LatestProducts from '../LatestProducts/LatestProducts'
import Footer from '../Footer/Footer';

const latestProductsPromise = fetch('http://localhost:3000/latest-products')
  .then(res => res.json());

const Home = () => {



  return (
    <div>
      <Banner />
       <h1 className='text-center pt-10 md:text-4xl font-bold'>Latest Products</h1>
      <Suspense 
      fallback={<div className='flex justify-center pt-10'>
        <progress className="progress w-56"></progress>
      </div>}>
       <LatestProducts latestProductsPromise={latestProductsPromise}>
       </LatestProducts>
      </Suspense>
    </div>
  );
};

export default Home;
