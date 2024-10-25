import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className='py-12 bg-[#5bd267f0] bg-gradient-animation w-full lg:px-20 text-white' id='footer'>

      <div className=" mx-auto px-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 p-4 -mt-6">
            <img className="h-32" src={logo} />
            <h1 className="text-xl relative -translate-y-10 ml-5 ">TastyBites</h1>
            <h2 className="footer-heading font-bold text-gray-600 mb-4">Know Us More</h2>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-600">
                <FaFacebookF className="w-8 h-8" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600">
                <FaLinkedinIn className="w-8 h-8" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-600">
                <FaTwitter className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h2 className="footer-heading font-bold text-gray-600 mb-4">COMPANY</h2>
            <ul className="list-none relative -top-8 -left-4 ">
              <li className="mb-3">
                <Link to="/" className="text-gray-600 hover:text-blue-600 footer-text">Home</Link>
              </li>
              <li className="mb-3">
                <Link to="/services" className="text-gray-600 hover:text-blue-600 footer-text">Services</Link>
              </li>
              <li className="mb-3">
                <Link to="/feedback" className="text-gray-600 hover:text-blue-600 footer-text">Feedback</Link>
              </li>
              <li className="mb-3">
                <Link to="/booking" className="text-gray-600 hover:text-blue-600 footer-text">Bookings</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 p-4">
            <h2 className="footer-heading font-bold text-gray-600 mb-4">GET IN TOUCH</h2>
            <ul className="list-none relative -top-8 -left-8">
              <li className="mb-3">
                <a href="tel:+911234567891" className="text-gray-600 hover:text-blue-600 footer-text">+91-1234567891</a>
              </li>
              <li className="mb-3">
                <a href="mailto:contact@tastybites.com" className="text-gray-600 hover:text-blue-600 footer-text">contact@tastybites.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <hr className="my-4 border-gray-300" />
        <p className="text-center text-gray-600 text-sm mt-8 footer-text">
          Copyright 2024 @TastyBites.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;





