import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import yellowCar from "../../assets/car2.png";

const Signup = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="dark:bg-black dark:text-white min-h-screen flex items-center justify-center duration-300">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Form Section */}
        <div className="space-y-6 px-6 md:px-10" data-aos="fade-right">
          <h2 className="text-4xl font-semibold font-serif text-primary">Create Account</h2>
          <p className="text-lg text-gray-500 dark:text-gray-300">Start your ride with us!</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/80 text-black py-2 px-6 rounded-md transition duration-500"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account? <a href="/login" className="text-primary">Login</a>
          </p>
        </div>

        {/* Image Section */}
        <div className="hidden md:block" data-aos="fade-left">
          <img
            src={yellowCar}
            alt="Car"
            className="max-h-[500px] mx-auto drop-shadow-[2px_20px_6px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
