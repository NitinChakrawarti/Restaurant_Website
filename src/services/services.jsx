
import { title } from 'framer-motion/client';
import React from 'react';
import Testimonial from './Testimonal';
const servicesData = [
    {
        id: 1,
        title: 'Dine-In Experience',
        description: 'Enjoy a cozy and delightful dining experience with our carefully curated menu and ambiance.',
    },
    {
        id: 2,
        title: 'Takeaway Services',
        description: 'Order your favorite dishes and enjoy them at home with our convenient takeaway service.',
    },
    {
        id: 3,
        title: 'Delivery Services',
        description: 'Get your meals delivered right to your doorstep with our reliable delivery services.',
    },
    {
        id: 4,
        title: 'Catering Services',
        description: 'Let us handle the food for your events, parties, and gatherings with our professional catering services.',
    },
    {
        id: 5,
        title: 'Online Ordering',
        description: 'Order your food online through our user-friendly website and skip the queue.',
    },
    {
        id: 6,
        title: 'Loyalty Program',
        description: 'Join our loyalty program and earn points for every purchase.Redeem points for free meals,discounts,and exclusive offers.'
    },
    {
        id: 7,
        title: 'Private Dining',
        description: 'Host your next special event in our private dining room.We can cater to any size group and offer customized menus.'
    },
    {
        id: 8,
        title: 'Gift Cards',
        description: 'Giving the gift of delicious food with our gift cards.Available in any denomination,perfect for any occasion. '
    },
];

const Services = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6  rounded-lg shadow-md mb-10  lg:ml-[28vmax]">
            <h2 className="text-3xl font-bold text-center mb-6 underline underline-offset-4 decoration-[#FF5722] ">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesData.map((service) => (
                    <div key={service.id} className="p-4 border border-[#FF5722] rounded-lg shadow-sm hover:shadow-lg transition duration-200">
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
           <div className="flex flex-col items-center p-5 min-screen"></div>
            <Testimonial />
        </div>
    );
};

export default Services;
           


