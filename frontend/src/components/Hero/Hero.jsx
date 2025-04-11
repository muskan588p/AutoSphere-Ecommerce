import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/car2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = ({ theme }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
            Drive Your Dreams: Affordable Car Rentals, Anytime, Anywhere. Your perfect ride is just a click away!{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              // onClick={() =>  {
              //   AOS.refreshHard();
              // }}
              onClick={() => navigate("/login")}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
