import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-indigo-600 px-14 py-3">
      <div className="flex items-center justify-between">
        <div className="logo">
          <Link to="/">
            <h2 className="font-bold text-xl text-black">
              Dev<span className="text-white">Stream</span>
            </h2>
          </Link>
        </div>
        <div className="navbar">
          <ul className="flex items-center">
            <li>
              <Link to="/" className="text-white text-lg">
                Dashboard
              </Link>
            </li>
            <li className="ml-5">
              <Link to="/login" className="text-white text-lg">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar