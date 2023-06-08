import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full mt-20 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
      <div className="px-6 py-4">
        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">
          Welcome Back
        </h3>

        <p className="mt-1 text-center text-gray-500 ">
          Login or create account
        </p>

        <form>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-indigo-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              required
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-indigo-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
              required
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link className="text-sm text-gray-600  hover:text-gray-500">
              Forget Password?
            </Link>

            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
        <span className="text-sm text-gray-600 ">Don't have an account? </span>

        <Link className="mx-2 text-sm font-bold text-indigo-500  hover:underline">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
