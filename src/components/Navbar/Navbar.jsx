import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo2.png';
import { AuthContext } from '../../context/AuthContext';
import { useTheme } from '../../ThemeContext/ThemeContext';
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const links = (
    <>
      <li>
        <NavLink 
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold bg-red-400" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/allVehicle"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold bg-red-400" : ""
          }
        >
          All Vehicle
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/addVehicel"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold bg-red-400" : ""
          }
        >
          Add Vehicle
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/myVehicel"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold bg-red-400" : ""
          }
        >
          My Vehicles
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/booking/:id"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold bg-red-400" : ""
          }
        >
          My Bookings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="background-color shadow-sm">
      <div className="navbar container mx-auto">

        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu z-50 menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}

              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="text-2xl p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
              >
                {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
              </button>
            </ul>
          </div>

          <div className="flex items-center">
            <img className="md:w-16 md:h-16 h-10" src={logo} alt="" />
            <a className="md:text-4xl text-2xl font-extrabold">
              Travel<span className="text-[#FF2C3B]">Ease</span>
            </a>
          </div>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex md:gap-4 gap-1">

          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-2xl md:flex hidden p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>

          {/* Auth */}
          {user ? (
            <div className="flex items-center gap-4">
              {/* User photo + displayName (hover) */}
              <img
                src={user.photoURL}
                alt="User"
                title={user.displayName}
                className="md:w-10 md:h-10 w-10 h-10 rounded-full border cursor-pointer"
              />

              <button
                onClick={signOutUser}
                className="btn border-2 text-[#FC2B3A] font-bold border-[#FC2B3A] hover:text-white hover:bg-[#FC2B3A]"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn border-2 text-[#FC2B3A] font-bold border-[#FC2B3A] p-2 hover:text-white hover:bg-[#FC2B3A]"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="btn border-2 text-[#FC2B3A] font-bold border-[#FC2B3A] p-2 hover:text-white hover:bg-[#FC2B3A]"
              >
                Register
              </NavLink>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
