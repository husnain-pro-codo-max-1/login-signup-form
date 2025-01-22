import React from 'react';
import { Link } from 'react-router-dom';

const Wellcomeform = () => {
  return (
    <div className="w-full h-screen bg-[#E5E7EB] flex flex-col items-center justify-center px-4">
      {/* Login and Signup Buttons */}
      <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-6">
        <Link to="/login">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 text-lg sm:text-xl rounded-lg hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 text-lg sm:text-xl rounded-lg hover:bg-green-700 transition duration-300">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Wellcomeform;
