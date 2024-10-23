// import React from 'react'

// const Booking = () => {
//   return (
//     <div>
//       className = "Booking-Section"
//     </div>
//   )
// }

// export default Booking

import React from 'react';

const bookingOptions = [
  { id: 1, name: 'Name', type: 'text', placeholder: 'Enter your name' },
  { id: 2, name: 'Email', type: 'email', placeholder: 'Enter your email' },
  { id: 3, name: 'Phone', type: 'tel', placeholder: 'Enter your phone number' },
  { id: 4, name: 'Date', type: 'date', placeholder: 'Select a date' },
  { id: 5, name: 'Time', type: 'time', placeholder: 'Select a time' },
  { id: 6, name: 'Guests', type: 'number', placeholder: 'Enter the number of guests' },
];

const BookingCard = () => {
  const [bookingDetails, setBookingDetails] = React.useState({});
  const [isBooked, setIsBooked] = React.useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or perform booking logic here
    setIsBooked(true);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 mt-4">
      <h2 className="text-lg font-bold mb-2">Book a Table</h2>
      {isBooked ? (
        <p className="text-green-500 font-bold">Booking done!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {bookingOptions.map((option) => (
            <div key={option.id} className="mb-4">
              <label
                htmlFor={option.name}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {option.name}
              </label>
              <input
                type={option.type}
                id={option.name}
                name={option.name}
                placeholder={option.placeholder}
                value={bookingDetails[option.name] || ''}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: '#a5e8aa' }}
          >
            Book Now
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingCard;