import React, { useEffect, useState } from "react";

const Customer = () => {
    const [user, setUser] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://randomuser.me/api/?results=3`);
            const result = await data.json();
            const userdata = result.results;
            setUser(userdata);
           
        }
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % user.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [user.length]);

    return (
        <div className="flex flex-col items-center p-4 bg-green-400 min-screen">
            <div className="flex w-full my-5 items-center justify-between">
                        <div className="font-bold text-[25px] ">
                            Our Customers
                        </div>
                    </div>
            <div className="flex w-full my-8 items-center justify-center">
                <div className="flex flex-col items-center">
                    {user.length > 0 && (
                        <div key={currentIndex} className="flex bg-white p-10 rounded-md flex-col items-center">
                            <img 
                                src={user[currentIndex].picture.large} 
                                alt={`${user[currentIndex].name.first} ${user[currentIndex].name.last}`} 
                                className="rounded-full w-34 h-34" 
                            />
                            <div className="mt-2 font-semibold">
                                {`${user[currentIndex].name.first} ${user[currentIndex].name.last}`}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Customer;
