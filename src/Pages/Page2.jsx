import { Link } from "react-router-dom";
import { useState } from "react";
import { SiGoogle } from 'react-icons/si';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Page2() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-6 font-inter">
        {/* Title Section */}
        <h2 className="text-2xl mb-6">Continue Your Journey, Let's Sign In</h2>

        {/* Email Input */}
        <div className="flex flex-col w-[260px]">
          <input
            type="text"
            placeholder="Email"
            className="bg-gray-300 rounded-[5px] px-4 py-2 mb-4 w-full pr-10 text-sm"
          />
        </div>

        {/* Password Input with Show/Hide Button */}
        <div className="relative  w-[260px] flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-gray-300 rounded-[5px] px-4 py-2 w-full pr-14 text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0  text-xl text-black px-2 py-0.5 rounded"
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>

        {/* Forgot Password Link */}
        <div className="flex justify-end w-[260px] mt-2 text-right">
          <Link to='/forgot-password' className="text-xs underline">Forgot Password?</Link>
        </div>

        {/* Log In Button */}
        <div className="w-[260px] flex flex-col mt-8">
          <button className="bg-black text-white py-2 rounded-[20px] hover:bg-gray-700 text-sm">Log In</button>
        </div>

        {/* Sign Up Link */}
        <div className="flex justify-between items-center w-[260px] mt-4 text-xs text-gray-400">
          <p>Don't have an account?</p>
          <Link to='/sign-up' className="text-sm font-bold text-black">Sign Up</Link>
        </div>

        {/* Horizontal Line with 'or' in the middle */}
        <div className="flex items-center justify-center w-[260px] my-4">
          <hr className="border-t border-gray-500 w-1/3" />
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <hr className="border-t border-gray-500 w-1/3" />
        </div>

        {/* Sign Up with Google Button */}
        <div className="flex justify-center w-[260px] flex-col mt-6">
          <button className="bg-white border rounded-[5px] px-4 py-1.5 hover:bg-gray-200 text-sm flex items-center justify-center">
            {/* Google Icon */}
            <SiGoogle className="text-xl mr-2" />
            Sign up with Google
          </button>
        </div>
      </div>
    </>
  );
}
