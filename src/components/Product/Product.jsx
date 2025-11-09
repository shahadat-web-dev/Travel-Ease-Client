import React from 'react';
import { FaStar } from 'react-icons/fa';

const Product = ({product}) => {
  const {vehicleName,owner, category,pricePerDay, location, availability, coverImage,description} = product;
  return (
    <div>
       <div className="max-w-sm mx-auto my-10 bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* --- Image and Price Badge --- */}
      <div className="relative h-56 bg-gray-100">
        <img
          src={coverImage}
          alt={name}
          className="w-full h-full object-cover"
          // Fallback image in case the URL fails
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/600x400/222/FFF?text=Car+Image+Missing';
          }}
        />
        
        {/* Price Tag Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-xl font-extrabold text-red-600">${pricePerDay}</span>
          <span className="text-sm text-gray-600"> {}</span>
        </div>
      </div>

      {/* --- Content Area --- */}
      <div className="p-6 space-y-4">
        
        {/* Title and Rating */}
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-900 leading-snug">
            {vehicleName}
          </h2>
          <div className="flex items-center space-x-1 ml-4   py-1 px-2 rounded-full text-sm font-semibold border border-gray-300">
          <FaStar />
            <span className='text-black'>{4.8}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm">
          {description}
        </p>

        {/* Separator Line */}
        <div className="border-t border-gray-200 pt-4 space-y-4">
          
          <h4 className='font-bold'>Owner : {owner}</h4>
          <h3 className='font-bold'>Category : {category}</h3>
          <h3 className='font-bold'>Available : {availability}</h3>
          <h4 className='font-bold'>Location : {location}</h4>
        </div>
        
        {/* --- Action Button --- */}
        <button
          onClick={() => console.log('Renting ' + name)}
          className="w-full mt-6 py-3 px-4 bg-gray-800 text-white font-semibold rounded-xl shadow-md hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500/50 transition-colors"
        >
          Rent now
        </button>

      </div>
    </div>
    </div>
  );
};

export default Product;