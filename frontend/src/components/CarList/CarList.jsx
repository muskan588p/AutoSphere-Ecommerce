import React, { useState } from "react";
import whiteCar from "../../../assets/white-car.png";
import car2 from "../../../assets/car5.png";
import car3 from "../../../assets/car6.png";
import BookingPopup from "../Booking/BookingPopup"; // Adjust the path if needed

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null); // State to trigger popup

  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          CAR LISTS
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Discover a wide range of well-maintained, top-quality cars to match
          every journey and budget. From compact cars for city drives to luxury
          SUVs for family trips, we have the perfect vehicle for every occasion.
        </p>

        {/* Car listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((data, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
            >
              <div className="w-full h-[120px]">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-primary font-semibold">{data.name}</h1>
                <div className="flex justify-between items-center text-xl font-semibold">
                  <p>${data.price}/Day</p>
                  <button
                    onClick={() => setSelectedCar(data)}
                    className="text-blue-600 hover:underline"
                  >
                    Book
                  </button>
                </div>
              </div>
              <p className="text-xl font-semibold absolute top-0 left-3">12Km</p>
            </div>
          ))}
        </div>

        {/* Booking popup if a car is selected */}
        {selectedCar && (
          <BookingPopup car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}

        {/* CTA Button */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
