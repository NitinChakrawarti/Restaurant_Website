import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='relative py-12 bg-gradient-animation w-full' id='footer'>
            <style>
                {`
                    @keyframes gradientAnimation {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }

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
            </div>
            <hr className="my-10 text-center border-gray-300 py-5 "/>
            <p className="text-center text-gray-600 text-sm mt-20 mb-5 scroll-px-8 scroll-py-8 footer-text">Copyright 2024 @TastyBites.com - All Right Reserved.</p>
        </footer>
    );
}

export default Footer;