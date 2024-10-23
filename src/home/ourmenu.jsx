import { div } from 'framer-motion/client'
import React from 'react'

const menu = [
    {
        id: 1,
        title: "Burger",
        category: "breakfast",
        price: 15.99,
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 2,
        title: "Pancakes",
        category: "lunch",
        price: 15.99,
        img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        title: "Burger",
        category: "dinner",
        price: 15.99,
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 4,
        title: "Pancakes",
        category: "brunch",
        price: 15.99,
        img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    ,
    {
        id: 3,
        title: "Burger",
        category: "dinner",
        price: 15.99,
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 4,
        title: "Pancakes",
        category: "brunch",
        price: 15.99,
        img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        title: "Burger",
        category: "dinner",
        price: 15.99,
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 4,
        title: "Pancakes",
        category: "brunch",
        price: 15.99,
        img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
]
const Ourmenu = () => {
    return (
        <>
            <div className="max-w-[1200px] mx-auto mt-16 px-4 lg:px-0 items-center justify-between">
                <div className=" w-full items-center justify-between">
                    <div className=" flex lg:flex-row flex-col justify-between w-full">
                        <h1 className="font-bold text-[25px] inline-block"> Our Menu</h1>
                        <div className="flex flex-wrap justify-end gap-6 lg:mt-0 mt-4">
                            {
                                menu
                                    .map((item, index) => (
                                        <div key={index} className=" bg-[#a5e8aa] px-2 flex items-center rounded-xl">{item.category}
                                        </div>

                                    ))
                            }
                            <div className=" bg-[#a5e8aa] px-2 flex items-center rounded-xl">All Menu
                            </div>
                        </div>
                    </div>
                    <div className="py-8">
                        <div className="flex flex-wrap gap-8 lg:gap-2 pb-10 items-center justify-center">
                            {
                                menu
                                    .map((item, index) => (
                                        <div className="" key={index}>
                                            <div className={`w-[250px] h-[280px] rounded-xl bg-primary `}>
                                                <img className="rounded-sm w-full object-cover h-[230px]" src={item.img} />
                                                <div className="flex justify-between px-4 py-2 items-center">
                                                    <h1 className="font-semibold">{item.title}</h1>
                                                    <h1 className="">{item.price} $</h1>
                                                </div>

                                            </div>
                                        </div>
                              ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourmenu
