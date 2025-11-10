import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout';
import Home from './components/Home/Home';
import AllVehicle from './components/AllVehicle/AllVehicle';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { ThemeProvider } from './ThemeContext/ThemeContext';
import PrivateRoute from './components/provider/PrivateRoute';
import VehicleDetails from './components/vehicleDetails/VehicleDetails';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'allVehicle',
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/products`),
        Component: AllVehicle
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: '/vehicle-details/:id',
        element: (
          <PrivateRoute>
            <VehicleDetails />
          </PrivateRoute>
        )
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>,
)
