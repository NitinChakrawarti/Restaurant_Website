import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className='py-12 bg-[#5bd267f0] bg-gradient-animation w-full lg:px-20 text-white' id='footer'>

<<<<<<< HEAD
                    .bg-gradient-animation {
                        background: linear-gradient(270deg, #a5e8aa, #87E0B5, #a5e8aa);
                        background-size: 400% 400%;
                        animation: gradientAnimation 15s ease infinite;
                    }

                    .footer-text {
                        font-size: 1.25rem; 
                    }

                    .footer-heading {
                        font-size: 1.5rem; 
                    }
                `}
            </style>
            <div className="container mx-auto px-10">
                <div className="flex flex-wrap justify-around items-center -mx-4">
                    <div className="w-full md:w-1/3 xl:w-1/3 p-4">
                        <p className="text-gray-600 mb-4 footer-text font-semibold">Know Us More</p>
                        <div className="flex space-x-6">
                            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-600">
                                <FaFacebookF className="w-10 h-10" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600">
                                <FaLinkedinIn className="w-10 h-10" />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-600">
                                <FaTwitter className="w-10 h-10" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/3 p-4">
                        <h2 className="text-lg footer-heading font-bold mb-4">COMPANY</h2>
                        <ul className="list-none mb-4">
                            <li className="mb-3"><a href="#" className="text-gray-600 hover:text-blue-600 footer-text">Home</a></li>
                            <li className="mb-3"><a href="#" className="text-gray-600 hover:text-blue-600 footer-text">About Us</a></li>
                            <li className="mb-3"><a href="#" className="text-gray-600 hover:text-blue-600 footer-text">Delivery</a></li>
                            <li className="mb-5"><a href="#" className="text-gray-600 hover:text-blue-600 footer-text">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/3 p-4">
                        <h2 className="text-lg footer-heading font-bold mb-4">GET IN TOUCH</h2>
                        <ul className="list-none mb-4">
                            <li className="mb-3"><a href="#" className="text-gray-600 hover:text-blue-600 footer-text">+91-1234567891</a></li>
                            <li className="mb-3"><a href="#" className="text-gray-600 hover:text-blue-600 footer-text">contact@tastybites.com</a></li>
                        </ul>
                    </div>
                </div>
=======
      <div className=" mx-auto px-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 p-4">
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
>>>>>>> 7c896b46c1df34960defb782fd6901872fa3edef
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/3 p-4">
            <h2 className="footer-heading font-bold text-gray-600 mb-4">COMPANY</h2>
            <ul className="list-none relative -top-8 -left-4 ">
              <li className="mb-3">
                <Link to="/" className="text-gray-600 hover:text-blue-600 footer-text">Home</Link>
              </li>
              <li className="mb-3">
                <Link to="/about" className="text-gray-600 hover:text-blue-600 footer-text">About Us</Link>
              </li>
              <li className="mb-3">
                <Link to="/delivery" className="text-gray-600 hover:text-blue-600 footer-text">Delivery</Link>
              </li>
              <li className="mb-3">
                <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 footer-text">Privacy Policy</Link>
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
