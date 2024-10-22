import React from 'react';

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
];

const Services = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6 underline underline-offset-4 decoration-[#FF5722] ">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesData.map((service) => (
                    <div key={service.id} className="p-4 border border-[#FF5722] rounded-lg shadow-sm hover:shadow-lg transition duration-200">
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
