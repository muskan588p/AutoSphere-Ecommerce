import React, { Component, useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route, useLocation } from "react-router-dom"; // ✅


// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

import BookingSummary from "./components/Booking/BookingSummary";


// Page imports
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

const App = () => {
  const location = useLocation(); // ✅ add this
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  
  const element = document.documentElement;
  

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Define paths where you DON'T want to show common sections
  // const hideSectionsOnRoutes = ["/login", "/signup"];
  const hideSectionsOnRoutes = ["/login", "/signup", "/booking-summary"];
   const shouldHideSections = hideSectionsOnRoutes.includes(location.pathname);
 
   return (
     <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
       <Navbar theme={theme} setTheme={setTheme} />
 
       <Routes>
         <Route path="/" element={<Hero theme={theme} />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/booking-summary" element={<BookingSummary />} /> {/* ✅ Moved inside */}

       </Routes>
 
       {/* Render these components only on the home page */}
       {!shouldHideSections && (
         <>
           <About />
           <Services />
           <CarList />
           <Experience />
           <Testimonial />
           <Footer />
         </>
       )}
     </div>
   );
 };
 
 export default App;