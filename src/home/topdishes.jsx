import React, { useEffect, useState } from 'react';

const TopDishes = () => {
    const [categories, setCategories] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0); 

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://swiggy-copy2.vercel.app/categories');
            const response = await data.json();
            setCategories(response);
        }
        fetchData();
    }, []);

    // Duplicate categories for continuous scrolling
    const duplicatedCategories = categories.length > 0 ? [...categories, ...categories] : [];

    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition(prev => {
                return prev + 4; 
            });
        }, 50); 

        return () => clearInterval(interval); 
    }, [duplicatedCategories]);

    return (
        <>
            <div className="max-w-[1200px] mx-auto mt-16 px-4 items-center justify-between">
                <div className="flex w-full my-5 items-center justify-between">
                    <div className="font-bold text-[25px]">
                        Our Top Dishes
                    </div>
                </div>
                <div className="lex overflow-hidden relative"> 
                    <div
                        className="flex transition-transform duration-1000" 
                        style={{ transform: `translateX(-${scrollPosition}px)` }} 
                    >
                        {
                            duplicatedCategories.map((category, index) => (
                                <div key={index} className="hover:scale-110 w-[150px] lg:w-[250px] shrink-0 duration-500">
                                    <img src={"https://swiggy-images.vercel.app/images/" + category.image} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <hr className='my-4 border-[1px]' />
            </div>
        </>
    );
}

export default TopDishes;