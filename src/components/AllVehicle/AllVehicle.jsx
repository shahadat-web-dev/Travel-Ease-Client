import React from 'react';
import { useLoaderData } from 'react-router';

const AllVehicle = () => {
  const product = useLoaderData();
  console.log(product);
  
  return (
    <div>
      All Vehicel ...
    </div>
  );
};

export default AllVehicle;