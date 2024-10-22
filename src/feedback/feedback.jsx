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
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Feedback</h2>
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
                    <div className="mb-4 flex items-center border border-gray-300 rounded-md">
                        <span className="p-2 text-gray-500">
                            <FaUser />
                        </span>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring focus:border-[#FF5722]"
                        />
                    </div>
                    <div className="mb-4 flex items-center border border-gray-300 rounded-md">
                        <span className="p-2 text-gray-500">
                            <FaEnvelope />
                        </span>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring focus:border-[#FF5722]"
                        />
                    </div>
                    <div className="mb-4 flex items-center border border-gray-300 rounded-md">
                        <span className="p-2 text-gray-500">
                            <FaComments />
                        </span>
                        <textarea
                            placeholder="Your feedback"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows="4"
                            className="mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring focus:border-[#FF5722]"
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full bg-[#FF5722] text-white py-2 rounded-md hover:bg-[#FF7043] transition duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Submit Feedback
                    </motion.button>
                </form>
            )}
        </div>
    );
};

export default Feedback;
