// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios"; // ✅ make sure axios is installed

// const BookingSummary = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   if (!state) return <p>No booking data found.</p>;

//   const { car, date, time, duration, username } = state;
//   const pricePerHour = car.price;
//   const totalPrice = pricePerHour * duration;

//   const handleConfirm = async () => {
//     try {
//       const bookingData = {
//         username,
//         car: {
//           id: car._id || car.id, // adapt based on your data structure
//           name: car.name,
//           price: car.price,
//         },
//         date,
//         time,
//         duration,
//         totalPrice,
//       };

//       await axios.post("http://localhost:5000/api/bookings", bookingData); // ✅ change URL as needed

//       alert("Booking Confirmed!");
//       navigate("/");
//     } catch (error) {
//       console.error("Booking failed:", error);
//       alert("Failed to confirm booking. Please try again.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Booking Summary</h1>
//       <div className="bg-gray-100 p-4 rounded-lg shadow space-y-4">
//         <p><strong>User:</strong> {username}</p>
//         <p><strong>Car:</strong> {car.name}</p>
//         <p><strong>Date:</strong> {date}</p>
//         <p><strong>Time:</strong> {time}</p>
//         <p><strong>Duration:</strong> {duration} hours</p>
//         <p><strong>Price per hour:</strong> ${pricePerHour}</p>
//         <p className="text-xl font-semibold"><strong>Total Price:</strong> ${totalPrice}</p>
//       </div>
//       <div className="mt-6">
//         <button
//           onClick={handleConfirm}
//           className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//         >
//           Confirm Booking
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingSummary;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BookingSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [discount, setDiscount] = useState(0);

  if (!state) return <p>No booking data found.</p>;

  const { car, date, time, duration, username } = state;
  const pricePerHour = car.price;
  const totalPrice = pricePerHour * duration;

  const discountedPrice = totalPrice - (totalPrice * discount) / 100;

  const handleConfirm = async () => {
    try {
      const bookingData = {
        username,
        car: {
          id: car._id || car.id,
          name: car.name,
          price: car.price,
        },
        date,
        time,
        duration,
        totalPrice: discountedPrice,
      };

      await axios.post("http://localhost:5000/api/bookings", bookingData);

      alert("Booking Confirmed!");
      navigate("/");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Failed to confirm booking. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Booking Summary</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow space-y-4">
        <p><strong>User:</strong> {username}</p>
        <p><strong>Car:</strong> {car.name}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Duration:</strong> {duration} hours</p>
        <p><strong>Price per hour:</strong> ${pricePerHour}</p>
        <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>

        <div>
          <label className="block font-semibold mb-1">Apply Discount:</label>
          <select
            value={discount}
            onChange={(e) => setDiscount(parseInt(e.target.value))}
            className="px-2 py-1 border rounded"
          >
            <option value={0}>None</option>
            <option value={5}>5% off</option>
            <option value={10}>10% off</option>
            <option value={20}>20% off</option>
          </select>
        </div>

        {discount > 0 && (
          <p className="text-lg font-semibold text-green-600">
            Discounted Total: ${discountedPrice.toFixed(2)}
          </p>
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={handleConfirm}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
