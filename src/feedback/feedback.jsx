import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComments } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        // formData.append("access_key", ""); // Be cautious with sensitive data
        formData.append("access_key", `${import.meta.env.VITE_FORMAPI}`);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const data = await res.json();

            if (data.success) {
                setName('');
                setEmail('');
                setMessage('');
                setFeedbackSubmitted(true);
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto mt-16 px-4 py-10 items-center justify-center bg-white mb-8">
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
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <div className="mb-10  text-[2vmax] flex items-center focus:outline-none">
                        <span className="p-2 text-gray-500"><FaUser /></span>
                        <input
                            type="text"
                            placeholder="Name"
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="block p-2 rounded-md border-b-2 focus:outline-none"
                        />
                    </div>
                    <div className="mb-10  text-[2vmax] flex items-center">
                        <span className="p-2 text-gray-500"><FaEnvelope /></span>
                        <input
                            type="email"
                            placeholder="Email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-b-2 mt-1 block p-2 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="mb-10  text-[2vmax] flex items-center">
                        <span className="p-2 text-gray-500"><FaComments /></span>
                        <input 
                            type="text"
                            placeholder="Your feedback"
                            value={message}
                            name='message'
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows="4"
                            className="border-b-2 mt-1 block p-2 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex  items-center justify-center">
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
