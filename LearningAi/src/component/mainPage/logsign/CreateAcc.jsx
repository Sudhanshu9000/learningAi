import React from "react";
import ToogleButton from "./ToogleButton";

const CreateAcc = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Create an account
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-700"
          >
            Email address <span className="text-green-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none foucs:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 focus:outline-none">
          Continue
        </button>

        {/* Already have an account */}
        <p className="text-center mt-4 text-gray-600">
          {`Already have an account?`}{" "}
         <ToogleButton/>
            
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <hr className="w-full border-gray-400" />
          <span className="px-3 text-gray-500">OR</span>
          <hr className="w-full border-gray-400" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4 ">
          {/* Google Button */}
          <button className="w-full px-5 flex gap-2 items-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"viewBox="0 0 48 48"
              className="w-7 h-8"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Continue with Google
          </button>

          {/* Microsoft Button */}
          <button className="w-full flex gap-2 items-center px-5 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft Logo"
              className="w-5 h-5 mr-2"
            />
            Continue with Microsoft Account
          </button>

          {/* Apple Button */}
          <button className="w-full flex gap-2 items-center px-5 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple Logo"
              className="w-5 h-5 mr-2"
            />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAcc;
