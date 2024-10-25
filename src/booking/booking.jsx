import React, { useContext } from 'react';
import { booklist } from '../context/signupcontext';

const Booking = () => {
  const booking = useContext(booklist);

  const delebook = (id) => {
    return () => {
      booking.setBook((prev) => prev.filter((option) => option.id !== id));
      localStorage.setItem('cardValue', booking.book.length - 1);
    };
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-16 px-4 py-10 bg-white mb-8">
      <h2 className="text-3xl font-bold text-center mb-8 underline underline-offset-8 decoration-[#4CAF50]">
        My Bookings
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {booking.book.length > 0 ? (
          booking.book.map((option, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <h1 className="text-xl font-semibold">{option.title}</h1>
                <p className="text-gray-600">{option.description}</p>
                <p className="mt-2 text-gray-500">Max Guests: {option.maxGuests}</p>
              </div>
              <span
                className='cursor-pointer bg-red-600 w-fit px-2 py-1 rounded-md mt-4 text-white'
                onClick={delebook(option.id)} 
              >
                Cancel
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default Booking;
