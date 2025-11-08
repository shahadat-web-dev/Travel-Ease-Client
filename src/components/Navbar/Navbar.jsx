import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'

const Navbar = () => {

  const links = <>
    <li>
      <NavLink 
        to='/' 
        className={({isActive}) => isActive ? 'text-[#FF2C3B] font-semibold'  : ''}
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink 
        to='/allVehicle'
        className={({isActive}) => isActive ? 'text-[#FF2C3B] font-semibold' : ''}
      >
        All Vehicle
      </NavLink>
    </li>

    <li>
      <NavLink 
        to='/addVehicle'
        className={({isActive}) => isActive ? 'text-[#FF2C3B]font-semibold' : ''}
      >
        Add Vehicle
      </NavLink>
    </li>

    <li>
      <NavLink 
        to='/myVehicles'
        className={({isActive}) => isActive ? 'text-[#FF2C3B]font-semibold' : ''}
      >
        My Vehicles
      </NavLink>
    </li>

    <li>
      <NavLink 
        to='/myBookings'
        className={({isActive}) => isActive ? 'text-[#FF2C3B]font-semibold' : ''}
      >
        My Bookings
      </NavLink>
    </li>
  </>;

  return (
    <div className=' bg-base-100 shadow-sm'>
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
         <div className='flex items-center'>
           <img className='w-15 h-15' src={logo} alt="" />
          <a className="md:text-4xl text-3xl font-extrabold">
            Travel<span className="text-[#FF2C3B]">Ease</span>
          </a>
         </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex gap-2">
          <NavLink to='/login' className="btn border-2 text-[#FC2B3A] font-bold border-[#FC2B3A] hover:text-white hover:bg-[#FC2B3A]">Login</NavLink>
          <NavLink to='/register' className="btn border-2 text-[#FC2B3A] font-bold border-[#FC2B3A] hover:text-white hover:bg-[#FC2B3A]">Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
