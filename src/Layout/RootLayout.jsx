import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-screen'>
        <Outlet/>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;