import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-screen bg-[#F6F6F6]'>
        <Outlet/>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;