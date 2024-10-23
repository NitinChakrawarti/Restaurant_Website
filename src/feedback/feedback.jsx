import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComments } from 'react-icons/fa'; // Import icons
import { motion } from 'framer-motion';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
        setFeedbackSubmitted(true);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 pb-20 bg-white rounded-lg ml-[2vmax] sm:ml-[16vmax] md:ml-[24vmax] lg:ml-[40vmax] mb-10 ">
            <h2 className="text-3xl font-bold text-center mb-8 underline underline-offset-8 decoration-[#4CAF50]">Feedback</h2>
            {feedbackSubmitted ? (
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Thank You for Your Feedback!</h3>
                    <p>Your feedback has been received.</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-10 text-[2vmax] flex items-center  focus:outline-none">
                        <span className="p-2 text-gray-500">
                            <FaUser />
                        </span>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="block w-full p-2 rounded-md border-b-2 focus:outline-none "
                        />
                    </div>
                    <div className=" mb-10 text-[2vmax] flex items-center   rounded-md">
                        <span className="p-2 text-gray-500">
                            <FaEnvelope />
                        </span>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className=" border-b-2 mt-1 block w-full p-2 rounded-md focus:outline-none  "
                        />
                    </div>
                    <div className="mb-10 text-[2vmax] flex items-center rounded-md">
                        <span className="p-2 text-gray-500">
                            <FaComments />
                        </span>
                        <input
                            type='text'
                            placeholder="Your feedback"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows="4"
                            className="border-b-2 mt-1 block w-full p-2 rounded-md focus:outline-none  "
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <motion.button
                            type="submit"
                            className="px-2 bg-[#4CAF50] text-white py-2 rounded-md hover:bg-[#FF7043] transition relative duration-200 -z-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit Feedback
                        </motion.button>
                    </div>

                </form>
            )}
        </div>
    );
};

export default Feedback;
