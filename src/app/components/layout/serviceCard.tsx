import React from 'react';
import { Clock, Scissors } from 'lucide-react';
import { serviceCardType } from './layoutTypes';

const ServiceCard: React.FC<serviceCardType> = ({ service, price, description, eta }) => {
  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-xl text-gray-800 dark:text-white font-one">{service}</h3>
          <span className="inline-block bg-black text-white rounded-full px-3 py-1 text-sm font-semibold">
            ${price}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-4 font-two">{description}</p>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <Clock className="w-4 h-4 mr-2" />
          <span>Approx time: {eta} mins</span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 font-two">
        <button className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center">
          <Scissors className="w-4 h-4 mr-2" />
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;