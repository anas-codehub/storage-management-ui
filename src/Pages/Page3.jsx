import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SiGoogle } from "react-icons/si";

export default function Page3() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {/* Heading inside width */}
      <div className="w-[260px] mb-5">
        <h1 className="text-[24px] font-semibold text-center">
          Create Your Account
        </h1>
      </div>

      {/* Input Fields */}
      <div className="flex flex-col w-[260px]  gap-y-3">
        <input
          type="text"
          placeholder="Username"
          className="bg-gray-300 rounded-[5px] px-3 py-2 text-sm"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-300 rounded-[5px] px-3 py-2 text-sm"
        />

        {/* Password Field */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-gray-300 rounded-[5px] px-3 py-2 text-sm pr-10 w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-lg text-black"
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="bg-gray-300  rounded-[5px] px-3 py-2 text-sm pr-10 w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute cursor-pointer right-2 text-lg text-black"
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-center gap-1.5 mt-4 w-[260px]">
        <input type="checkbox" className=" cursor-pointer" />
        <p className="text-xs ">
          I agree to Jotter Terms & Conditions
        </p>
      </div>

      {/* Sign Up Button */}
      <div className="w-[260px] mt-5">
        <button className="bg-black text-white py-2 rounded-[18px] hover:bg-gray-700 text-sm w-full">
          Sign Up
        </button>
      </div>

      {/* Account Link - Aligned */}
      <div className="flex items-center justify-center w-[260px] mt-4 text-xs text-black">
        <p>Already have an account?</p>
        <Link to="/sign-up" className="text-xs font-semibold text-black ml-2">
          Log In
        </Link>
      </div>

      {/* OR Divider */}
      <div className="flex items-center justify-center w-[260px] my-4">
        <hr className="border-t border-gray-400 w-1/3" />
        <span className="mx-2 text-gray-500 text-xs">or</span>
        <hr className="border-t border-gray-400 w-1/3" />
      </div>

      {/* Google Sign Up */}
      <div className="w-[260px]">
        <button className="bg-white border rounded-[5px] px-3 py-2 hover:bg-gray-200 text-xs flex items-center justify-center w-full">
          <SiGoogle className="text-lg mr-2" />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}
