import React, { useState } from 'react';
import { FaUtensils, FaUser, FaCoffee, FaCocktail, FaBirthdayCake, FaWineGlass } from 'react-icons/fa';
import { booklist } from '../context/signupcontext';
import { use } from 'framer-motion/client';
import { useContext } from 'react';
const bookingOptions = [
    {
        id: 1,
        title: 'Family Dining',
        maxGuests: 6,
        icon: <FaUtensils />,
        description: 'Enjoy a cozy family dining experience with a maximum of 6 guests.',
    },
    {
        id: 2,
        title: 'Friends Gathering',
        maxGuests: 8,
        icon: <FaUser />,
        description: 'Gather your friends for a fun night out with up to 8 guests.',
    },
    {
        id: 3,
        title: 'Coffee Break',
        maxGuests: 4,
        icon: <FaCoffee />,
        description: 'Take a break with your friends over coffee.',
    },
    {
        id: 4,
        title: 'Cocktail Hour',
        maxGuests: 10,
        icon: <FaCocktail />,
        description: 'Enjoy a lively cocktail hour with a maximum of 10 guests.',
    },
    {
        id: 5,
        title: 'Birthday Celebration',
        maxGuests: 20,
        icon: <FaBirthdayCake />,
        description: 'Celebrate your special day with up to 20 guests.',
    },
    {
        id: 6,
        title: 'Wine Tasting',
        maxGuests: 12,
        icon: <FaWineGlass />,
        description: 'Join us for a delightful wine tasting experience for up to 12 guests.',
    },
];

const BookingCard = () => {
    const [showDetails, setShowDetails] = useState(null);
    const booking = useContext(booklist);
    const handleCardClick = (id) => {
        setShowDetails(showDetails === id ? null : id);
    };

    const bookTable = (option) => {
        booking.setBook((prev) => [...prev, option]);
        alert('Table booked successfully!');
    };

    return (
        <div className="relative z-30 max-w-[1200px] mx-auto px-4 ">
            <div className="flex w-full my-8 items-center justify-between">
                <div className="font-bold text-[25px]">Booking Options</div>
            </div>
            
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {bookingOptions.map((option) => (
                    <div
                        key={option.id}
                        className="flex flex-col pt-16 h-[30vmax] mg:h-[25vmax] lg:h-[20vmax] px-4 pb-10 mb-4 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-[#cdffcd] transition duration-300 ease-in-out transform shadow-lg justify-between"
                        onClick={() => handleCardClick(option.id)}
                    >
                        <div className="flex flex-col h-[10vmax] items-center mb-4">
                            <div className="text-5xl mb-2">{option.icon}</div>
                            <h2 className="text-2xl font-bold mb-1">{option.title}</h2>
                            <p className="text-gray-600">Max {option.maxGuests} guests</p>
                            <p>{option.description}</p>

                        </div>

                        <div className="flex items-center justify-center w-full">
                            <button
                                className="py-2 px-6 bg-green-600 text-white rounded hover:bg-green-600/90 hover:text-black transition duration-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    bookTable(option);

                                }}
                            >
                                Book a Table
                            </button>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default BookingCard;
