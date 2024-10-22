import React, { useState } from 'react';

const SignUpLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [isLogin, setIsLogin] = useState(false); // State to toggle between Sign Up and Login

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            // Login logic
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password'); // Retrieve password

            if (storedUsername === username && storedPassword === password) {
                alert('Login successful!');
                // Redirect or perform further actions after successful login
            } else {
                alert('Invalid username or password. Please try again.');
            }
        } else {
            // Sign Up logic
            localStorage.setItem('username', username);
            localStorage.setItem('password', password); // Save password
            localStorage.setItem('cardValue', '0'); // Set default card value to 0
            localStorage.setItem('location', location);

            // Clear the form
            setUsername('');
            setPassword('');
            setLocation('');

            alert('User information saved! You can now log in.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="username">Name</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                {!isLogin && ( // Show location field only during Sign Up
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full bg-[#FF5722] text-white py-2 rounded-md hover:bg-[#FF7043] transition duration-200"
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            <div className="mt-4 text-center">
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sm text-[#FF5722] hover:underline focus:outline-none"
                >
                    {isLogin ? 'Create an account' : 'Already have an account? Login'}
                </button>
            </div>
        </div>
    );
};

export default SignUpLogin;
