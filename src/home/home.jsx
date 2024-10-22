import React from 'react'
import { Link } from 'react-router-dom'
import Services from './../services/services';
import TopDishes from './topdishes';
import Ourmenu from './ourmenu';

const Home = () => {
  return (
    <>
      <div className="  md:pt-24  w-full mb-10 px-4 lg:px-0">
        <div className="lg:flex-row flex-col gap-10 lg:gap-0  flex justify-evenly mt-36 lg:mt-16 ">
          <div className="h-[23vmax] lg:w-[35%]">
            <div className="w-full h-full bg-black rounded-lg transform skew-y-12 bg-[url('https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-contain ">

            </div>
            <h1 className=" text-5xl font-bold">
              Veg 
            </h1>
          </div>
          <div className="h-[23vmax] lg:w-[35%]">
            <div className="w-full h-full bg-black rounded-lg transform -skew-y-12 bg-[url('https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-contain ">

            </div>
            <h1 className="text-5xl font-bold text-end">
              Non-Veg
            </h1>
          </div>
        </div>
        <h1 className="relative text-center mt-28 bg-[#a5e8aa] py-1 text-3xl font-medium ">
         We have Seperate Veg and Non-Veg Kitchen 
        </h1>
      </div>
      <TopDishes />
      <Ourmenu />
    </>
  )
}

export default Home
