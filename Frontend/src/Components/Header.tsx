import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-indigo-800 font-nunito py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Booking Project</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-bookings"
                className="flex items-center text-white px-3 font-bold hover:bg-indigo-700"
              >
                My Bookings
              </Link>

              <Link
                to="/my-hotels"
                className="flex items-center text-white px-3 font-bold hover:bg-indigo-700"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center text-indigo-700 px-3 cursor-pointer font-bold text-sm bg-gray-100 rounded hover:bg-orange-400 hover:text-white"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
