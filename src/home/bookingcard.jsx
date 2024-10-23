import React, { useState } from 'react';
import { FaUtensils, FaUser , FaCoffee, FaCocktail, FaBirthdayCake, FaWineGlass } from 'react-icons/fa';

// Booking options 
const bookingOptions = [
  {
    id: 1,
    title: 'Family Dining',
    maxGuests: 6,
    icon: <FaUtensils />,
    description: 'Enjoy a cozy family dining experience with a maximum of 6 guests.',
    offers: '10% off on weekdays, complimentary dessert for kids, and a free drink for adults!',
  },
  {
    id: 2,
    title: 'Friends Gathering',
    maxGuests: 8,
    icon: <FaUser  />,
    description: 'Gather your friends for a fun night out with up to 8 guests.',
    offers: 'Happy hour specials and group discounts available!',
  },
  {
    id: 3,
    title: 'Coffee Break',
    maxGuests: 4,
    icon: <FaCoffee />,
    description: 'Take a break with your friends over coffee.',
    offers: 'Buy 2 get 1 free on all drinks!',
  },
  {
    id: 4,
    title: 'Cocktail Hour',
    maxGuests: 10,
    icon: <FaCocktail />,
    description: 'Enjoy a lively cocktail hour with a maximum of 10 guests.',
    offers: 'Special cocktail menu and 15% off on group bookings!',
  },
  {
    id: 5,
    title: 'Birthday Celebration',
    maxGuests: 20,
    icon: <FaBirthdayCake />,
    description: 'Celebrate your special day with up to 20 guests.',
    offers: 'Complimentary cake and decorations for birthday parties!',
  },
  {
    id: 6,
    title: 'Wine Tasting',
    maxGuests: 12,
    icon: <FaWineGlass />,
    description: 'Join us for a delightful wine tasting experience for up to 12 guests.',
    offers: 'Exclusive discounts on wine purchases and complimentary snacks!',
  },
];

const BookingCard = () => {
  const [showDetails, setShowDetails] = useState(null); 

  const handleCardClick = (id) => {
    setShowDetails(showDetails === id ? null : id); 
  };

  const bookTable = (id) => {
    alert(`Table booked for option ID: ${id}`);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-[#cdffcd] min-h-screen">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
        {bookingOptions.map((option) => (
          <div
            key={option.id}
            className="flex flex-col justify-between p-8 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-[#cdffcd] transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            style={{ minHeight: '300px' }} 
            onClick={() => handleCardClick(option.id)}
          >
            <div className="flex flex-col items-center mb-4">
              <div className="text-5xl mb-2">{option.icon}</div>
              <h2 className="text-2xl font-bold mb-1">{option.title}</h2>
              <p className="text-gray-600">Max {option.maxGuests} guests</p>
            </div>
            {showDetails === option.id && (
              <div className="mt-1 text-gray-700">
                <p className="p-2">{option.description}</p>
                <p className="p-2 font-semibold">Offers: {option.offers}</p>
              </div>
            )}
            <button
              className="mt-20 py-20 px-20 text-blue-600" 
              onClick={() => handleCardClick(option.id)}
            >
              {showDetails === option.id ? 'Read Less' : 'Read More'}
            </button>
            {showDetails === option.id && (
              <button 
                className="mt-24 mb-15 py-2 px-5 bg-blue-600 text-white rounded" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  bookTable(option.id); 
                }}
              >
                Book a Table
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCard





// import React, { useState } from 'react';
// import { FaUtensils, FaUser , FaCoffee } from 'react-icons/fa';

// // Booking options 
// const bookingOptions = [
//   {
//     id: 1,
//     title: 'Family Dining',
//     maxGuests: 6,
//     icon: <FaUtensils />,
//     description: 'Enjoy a cozy family dining experience with a maximum of 6 guests.',
//     offers: '10% off on weekdays, complimentary dessert for kids, and a free drink for adults!',
//   },
//   {
//     id: 2,
//     title: 'Friends Gathering',
//     maxGuests: 8,
//     icon: <FaUser  />,
//     description: 'Gather your friends for a fun night out with up to 8 guests.',
//     offers: 'Happy hour specials and group discounts available!',
//   },
//   {
//     id: 3,
//     title: 'Coffee Break',
//     maxGuests: 4,
//     icon: <FaCoffee />,
//     description: 'Take a break with your friends over coffee.',
//     offers: 'Buy 2 get 1 free on all drinks!',
//   },
// ];

// const BookingCard = () => {
//   const [showDetails, setShowDetails] = useState(null); 

//   const handleCardClick = (id) => {
//     setShowDetails(showDetails === id ? null : id); 
//   };

//   const bookTable = (id) => {
//     alert(`Table booked for option ID: ${id}`);
//   };

//   return (
//     <div className="flex flex-col items-center p-4 bg-[#cdffcd] min-h-screen">
//       <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
//         {bookingOptions.map((option) => (
//           <div
//             key={option.id}
//             className="flex flex-col justify-between p-8 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-[#cdffcd] transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
//             style={{ minHeight: '300px' }} 
//             onClick={() => handleCardClick(option.id)}
//           >
//             <div className="flex flex-col items-center mb-4">
//               <div className="text-5xl mb-2">{option.icon}</div>
//               <h2 className="text-2xl font-bold mb-1">{option.title}</h2>
//               <p className="text-gray-600">Max {option.maxGuests} guests</p>
//             </div>
//             {showDetails === option.id && (
//               <div className="mt-1 text-gray-700">
//                 <p className="p-2">{option.description}</p>
//                 <p className="p-2 font-semibold">Offers: {option.offers}</p>
//               </div>
//             )}
//             <button
//               className="mt-20 py-20 px-20 text-blue-600" 
//               onClick={() => handleCardClick(option.id)}
//             >
//               {showDetails === option.id ? 'Read Less' : 'Read More'}
//             </button>
//             {showDetails === option.id && ( // Ensure the button only shows when details are visible
//               <button 
//                 className="mt-24 mb-15 py-2 px-5 bg-blue-600 text-white rounded" 
//                 onClick={(e) => { 
//                   e.stopPropagation(); 
//                   bookTable(option.id); 
//                 }}
//               >
//                 Book a Table
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookingCard;


