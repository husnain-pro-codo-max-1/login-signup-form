import { useState } from "react";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const createuser = (e) => {
    e.preventDefault();
    if (email && password) {
      // Navigate to Home component with state
      navigate('/home', { state: { email, password } });
    } else {
      alert('Please fill in both email and password');
    }
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] bg-purple-500 flex justify-end xs:pr-6 sm:pr-10 md:pr-10 lg:pr-10 xl:pr-10 2xl:pr-10 pt-10 relative">
        <div className="w-[30%] xs:w-[90%] sm:w-[70%] md:w-[55%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] h-[90vh] bg-[#E6E3DA] rounded-2xl z-10 shadow-2xl">
          <div className="flex flex-col gap-y-8 w-[70%] mx-auto my-28 text-center animate__animated animate__fadeIn">
            <h2 className="text-3xl">Sign Up</h2>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email"
              className="shadow-2xl rounded-lg py-3 hover:bg-slate-300 pl-2"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter Password"
              className="shadow-2xl rounded-lg py-3 hover:bg-slate-300 pl-2"
            />
            <button
              onClick={createuser}
              className="bg-[#FFFFFF] w-[40%] px-3 py-2 text-2xl xs:text-sm sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl rounded-lg shadow-2xl text-center text-gray-400 mx-auto font-medium hover:bg-slate-300"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="bg-slate-300 rounded-full px-20 py-20 absolute left-[-80px] animate-pulse"></div>
        <Link to={"/"}>
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

export default Signup;
