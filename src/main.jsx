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
import MyBookings from './Pages/MyBookings';
import AddVehicle from './components/AddVehicle/AddVehicle';
import MyVehicles from './components/MyVehicles/MyVehicles';
import UpdateVehicle from './components/UpdateVehicle/UpdateVehicle';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details';


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
        loader: () => fetch("http://localhost:3000/products"),
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
        path: 'mybooking',
        element: [
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ]
      },
      {
        path: 'addVehicel',
        Component: AddVehicle
      },
      {
        path: 'myVehicel',
        Component: MyVehicles
      },
      {
        path: 'update-vehicle/:id',
        element: <UpdateVehicle />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/vehicles/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/vehicles/${params.id}`),
      },
      {
        path: '/vehicle-details/:id',
        element: (
          <PrivateRoute>
            <VehicleDetails />
          </PrivateRoute>
        )
      },
      {
        path: '*',
        element: <NotFound />
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
