import React, { useEffect, useState } from 'react'
const Ourmenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${import.meta.env.VITE_MENUAPI}`);
            const data = await response.json();
            setMenu(data);
            setFilter(data);
        }
        fetchData();
    }, [])

    const filterMenu = ["All Menu", "breakfast", "lunch", "dinner", "dessert"];
    const [filter, setFilter] = useState([])

    const itemfilter = (item) => {
        return () => {
            if (item == "All Menu") {
                setFilter(menu)
                
            } else {
                const filteredMenu = menu.filter((menu) => menu.category == item)
                setFilter(filteredMenu)
                
            }
        }
    }

    return (
        <>
            <div className="max-w-[1200px] mx-auto mt-16 px-4  items-center justify-between">
                <div className=" w-full items-center justify-between">
                    <div className=" flex mb-8 lg:flex-row flex-col justify-between w-full">
                        <h1 className="font-bold text-[25px] inline-block"> Our Menu</h1>
                        <div className="flex flex-wrap justify-end gap-6 lg:mt-0 mt-4">
                            {
                                filterMenu
                                    .map((item, index) => (
                                        <div key={index} className=" hover:bg-primary/80 cursor-pointer bg-[#a5e8aa] px-2 flex items-center rounded-xl" onClick={itemfilter(item)} >{item}
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                    <div className="py-8 rounded-xl">
                        <div className="flex flex-wrap gap-8 lg:gap-8 pb-10 items-center rounded-xl justify-center">
                            {
                                filter
                                    .map((item, index) => (
                                        <div className="hover:scale-105 ease-in duration-300" key={index}>
                                            <div className={`w-[250px] h-[280px] rounded-xl bg-primary/70 `}>
                                                <img className="rounded-xl w-full object-cover h-[230px]" src={item.image} />
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
