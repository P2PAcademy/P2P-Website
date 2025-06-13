import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="relative w-20 h-20">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 border-r-indigo-500 animate-spin"></div>
          
          {/* Middle ring */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-400 border-r-indigo-400 animate-spin animation-delay-200"></div>
          
          {/* Inner ring */}
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-indigo-300 border-r-indigo-300 animate-spin animation-delay-400"></div>
          
          {/* Center dot */}
          <div className="absolute inset-6 rounded-full bg-indigo-600"></div>
        </div>
        
        {/* Loading text */}
        <p className="mt-4 text-lg font-medium text-gray-300">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;