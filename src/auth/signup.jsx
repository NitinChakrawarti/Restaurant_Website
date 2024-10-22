import React, { useState, useContext, useEffect } from 'react';
import { userContext } from '../context/signupcontext';
import {userName} from '../context/signupcontext';
import User from './user';
const SignUpLogin = () => {
    const contextValue = useContext(userContext);
    const issignedin = useContext(userName);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [islogin, setislogin] = useState(false);

    useEffect(() => {
        const home = localStorage.getItem('islogin');
        if (home) {
            issignedin.setName(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (contextValue.user) {
            // Login logic
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if (storedUsername === username && storedPassword === password) {
                alert('Login successful!');
                setislogin(true);
                issignedin.setName(!issignedin.name);
                localStorage.setItem('islogin', 'true');
            } else {
                alert('Invalid username or password. Please try again.');
            }
        } else {
           
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('cardValue', '0');
            localStorage.setItem('location', location);

            setUsername('');
            setPassword('');
            setLocation('');

            alert('You can now log in.');
            contextValue.setUser(true);
        }
    };

    return (

        <>
            {
                issignedin.name ? <User /> : <div className="mt-10  bg-white/50 rounded-lg px-8 pt-16 ml-[7vmax] lg:ml-[40vmax] " >
                    <h2 className="text-2xl font-bold text-center mb-6">{contextValue.user ? 'Login' : 'Sign Up'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-10 text-[2vmax]">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="username">Name</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className=" block w-full focus:outline-none border-b-2 rounded-md "
                            />
                        </div>
                        <div className="mb-10 text-[2vmax]">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full focus:outline-none border-b-2 rounded-md"
                            />
                        </div>
                        {!contextValue.user && (
                            <div className="mb-10 text-[2vmax]">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    required
                                    className="focus:outline-none block  border-b-2 rounded-md "
                                />
                            </div>
                        )}
                        <button
                            type="submit"
                            className=" relative px-3 bg-[#a5e8aa] text-[#141a13] py-1 rounded-md hover:bg-[#FF7043] transition duration-200"
                        >
                            {contextValue.user ? 'Login' : 'Sign Up'}
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => contextValue.setUser(!contextValue.user)}
                            className="text-sm relative text-[#405c41] hover:underline focus:outline-none"
                        >
                            {contextValue.user ? 'Create an account' : 'Already have an account? Login'}
                        </button>
                    </div>
                </div>

            }
        </>





    );
};

export default SignUpLogin;
