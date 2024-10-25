import React, { useEffect, useState } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Alice Johnson",
        image: "https://via.placeholder.com/150",
        review: "The food was absolutely delicious! I can't wait to come back.",
        rating: 5,
    },
    {
        id: 2,
        name: "Bob Smith",
        image: "https://via.placeholder.com/150",
        review: "Great atmosphere and friendly staff. Highly recommend the pasta.",
        rating: 4,
    },
    {
        id: 3,
        name: "Catherine Lee",
        image: "https://via.placeholder.com/150",
        review: "Best restaurant experience I've had in a long time. Everything was perfect!",
        rating: 5,
    },
    {
        id: 4,
        name: "David Brown",
        image: "https://via.placeholder.com/150",
        review: "The desserts are to die for! Will definitely be back for more.",
        rating: 5,
    },
    {
        id: 5,
        name: "Eva Green",
        image: "https://via.placeholder.com/150",
        review: "A bit pricey, but the quality of food justifies it. Loved the steak!",
        rating: 4,
    },
    {
        id: 6,
        name: "Frank White",
        image: "https://via.placeholder.com/150",
        review: "Fantastic service and a great selection of wines. Highly recommend!",
        rating: 5,
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000); // Changes slide every 3 seconds

        return () => clearInterval(interval); 
    }, []);

    const handleCardClick = (id) => {
        console.log(`Card with ID ${id} clicked!`);
    };

    return (
        <div className="flex flex-col items-center p-4 bg-green-400 min-screen ">
            <h1 className="text-4xl font-bold text-white mb-10 py-0">Testimonials</h1>
            <div className="relative w-full max-w-6xl overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex-shrink-0 w-full"
                            onClick={() => handleCardClick(testimonial.id)} // Make the card clickable
                        >
                            <div className="bg-white rounded-lg p-6 shadow-lg transform transition-transform duration-200 hover:scale-[1.02] cursor-pointer">
                                <div className="flex items-center mb-4">
                                    <img className="w-16 h-16 rounded-full mr-4" src={testimonial.image} alt={testimonial.name} />
                                    <div>
                                        <h2 className="font-semibold text-lg">{testimonial.name}</h2>
                                        <div className="flex text-[#a5e8aa]">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    <FaQuoteLeft className="inline mr-2 text-gray-400" />
                                    {testimonial.review}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;