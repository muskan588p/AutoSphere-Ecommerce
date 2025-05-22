import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingPopup = ({ car, onClose }) => {
  const [form, setForm] = useState({ date: "", time: "", duration: "" });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Fetch user info from localStorage (assumes you store it at login)
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    if (storedUsername) setUsername(storedUsername);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    const { date, time, duration } = form;
    if (!date || !time || !duration) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    // Optional: Close popup before navigating
    onClose();
// console.log(email)
    // Navigate to booking summary
    navigate("/booking-summary", {
      state: {
        car,
        date,
        time,
        duration,
        username,
        email,
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Book {car.name}</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Duration (hours)</label>
            <input
              type="number"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
              min="1"
            />
          </div>

          <div className="flex justify-between mt-4">
            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Next
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;
