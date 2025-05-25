import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center padding-tb padding-lr">
      <h1 className="text-7xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Oops! Page not found</h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        The page you’re looking for doesn’t exist. Please check the URL or go back to the homepage.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 bg-primary text-white text-lg font-bold rounded-lg transition-effects"
      >
        <FaArrowLeft className="w-4 h-4 mr-2"/>
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
