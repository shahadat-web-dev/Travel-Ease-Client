
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
      <Suspense 
      fallback={<div className='flex justify-center pt-10'>
        <progress className="progress w-56"></progress>
      </div>}>
       <LatestProducts latestProductsPromise={latestProductsPromise}>
       </LatestProducts>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Home;
