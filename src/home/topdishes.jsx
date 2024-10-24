import React, { useEffect } from 'react'
const TopDishes = () => {
    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://swiggy-copy2.vercel.app/categories');
            const response = await data.json();
            setCategories(response);
        }
        fetchData();
    }, [])

    const [categories, setCategories] = React.useState([]);
        return (
            <>
                <div className="max-w-[1200px] mx-auto mt-16 px-4  items-center justify-between">
                    <div className="flex w-full my-5 items-center justify-between">
                        <div className="font-bold text-[25px] ">
                            Our Top Dishes
                        </div>
                    </div>
                    <div className="flex overflow-scroll no-scrollbar">
                        {
                            categories.map((category, index) => {
                                return (
                                    <div key={index} className="hover:scale-110 w-[150px] lg:w-[250px] shrink-0 duration-500 "
                                    >
                                        <img src={"https://swiggy-images.vercel.app/images/"+category.image} alt=""  />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr className='my-4 border-[1px]'></hr>
                </div>
            </>
        )
    }

    export default TopDishes