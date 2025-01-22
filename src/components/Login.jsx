import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-z]{2,7}$/i;
    // Password validation regex (min 8 characters, at least 1 letter and 1 number)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and include at least one letter and one number');
      return;
    }

    // Navigate to the Home component with state
    navigate('/home', { state: { email, password } });
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] bg-purple-500 flex justify-end xs:pr-6 sm:pr-10 md:pr-10 lg:pr-10 xl:pr-10 2xl:pr-10 pt-10 relative">
        <div className="w-[30%] xs:w-[90%] sm:w-[70%] md:w-[55%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] h-[90vh] bg-[#E6E3DA] rounded-2xl z-10 shadow-2xl">
          <div className="flex flex-col gap-y-7 w-[70%] mx-auto my-28 text-center animate__animated animate__fadeIn">
            <h2 className="text-3xl">Sign In</h2>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="eg:husnain@gmail.com"
              className="shadow-2xl rounded-lg py-3 hover:bg-slate-300 pl-2"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="eg:husnain$$@@"
              className="shadow-2xl rounded-lg py-3 hover:bg-slate-300 pl-2"
            />
            <button
              onClick={handlelogin}
              className="bg-[#A855F7] w-[40%] p-2 text-2xl xs:text-sm sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl rounded-lg shadow-2xl text-center text-white mx-auto font-medium hover:bg-slate-300"
            >
              Sign In
            </button>

            <div className='flex items-center mx-auto'>
              <h2 className='text-xs'>Don't have an account?</h2>
              <Link to={'/signup'}>
                <span className='text-xs hover:underline ml-1 hover:text-gray-400'> Sign-up</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-slate-300 rounded-full px-20 py-20 absolute left-[-80px] animate-pulse"></div>

        <Link to={'/'}>
          <div className="bg-slate-300 rounded-full px-3 py-3 absolute bottom-10 left-0 animate-pulse">
            <IoMdHome className="text-2xl text-gray-700 cursor-pointer" />
          </div>
        </Link>
        <div className="bg-slate-300 rounded-full px-5 py-5 absolute right-[40rem] animate-pulse"></div>
        <div className="bg-slate-300 rounded-full px-16 py-16 absolute bottom-7 right-[23rem] xs:right-[0rem] sm:right-[23rem] md:right-[23rem] lg:right-[23rem] xl:right-[23rem] 2xl:right-[23rem] animate-pulse"></div>
      </div>
    </>
  );
};

export default Login;
