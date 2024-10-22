// import React, { useState } from 'react';
// import { MdDinnerDining } from "react-icons/md";
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="bg-[#FAFAFA] text-[#212121]">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 flex items-center">
//                         <MdDinnerDining className="text-4xl mr-2 text-[#FF5722]" />
//                         <span className="text-2xl font-bold">TastyBites</span>
//                     </div>

//                     {/* Menu for large screens */}
//                     <div className="hidden md:block">
//                         <div className="ml-10 flex items-baseline space-x-6">
//                             <Link to="/" className="hover:text-[#4CAF50]">All Items</Link>
//                             <Link to="/services" className="hover:text-[#4CAF50]">Services</Link>
//                             <Link to="/feedback" className="hover:text-[#4CAF50]">Write about us</Link>
//                             {/* Signup and Bookings with Special Backgrounds */}
//                             <Link to="/signin" className="px-4 py-2 bg-[#FF5722] text-white rounded hover:bg-[#FF7043]">Signup</Link>
//                             <Link to="/booking" className="px-4 py-2 bg-[#FF5722] text-white rounded hover:bg-[#FF7043]">Bookings</Link>
//                         </div>
//                     </div>

//                     {/* Hamburger Menu for smaller screens */}
//                     <div className="flex md:hidden">
//                         <button onClick={toggleMenu} className="text-2xl focus:outline-none text-[#FF5722]">
//                             {isOpen ? <FaTimes /> : <FaBars />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden bg-[#FAFAFA]">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <Link onClick={() => {
//                             setIsOpen(false)
//                         }} to="/" className="block px-3 py-2 text-base font-medium hover:text-[#4CAF50]">All Items</Link>
//                         <Link onClick={() => {
//                             setIsOpen(false)
//                         }} to="/services" className="block px-3 py-2 text-base font-medium hover:text-[#4CAF50]">Services</Link>
//                         <Link onClick={() => {
//                             setIsOpen(false)
//                         }} to="/feedback" className="block px-3 py-2 text-base font-medium hover:text-[#4CAF50]">Write about us</Link>
//                         <Link onClick={() => {
//                             setIsOpen(false)
//                         }} to="/signin" className="block px-3 py-2 text-base font-medium bg-[#FF5722] text-white rounded hover:bg-[#FF7043]">Signup</Link>
//                         <Link onClick={() => {
//                             setIsOpen(false)
//                         }} to="/booking" className="block px-3 py-2 text-base font-medium bg-[#FF5722] text-white rounded hover:bg-[#FF7043]">Bookings</Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;




import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import MenuList from "./menuLIst";
import { useDimensions } from "./usedimension";
import NavAnimation from "./navbaranimation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

 const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(true, false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background fixed" variants={sidebar} />
      <MenuList />
      <NavAnimation toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Navbar;