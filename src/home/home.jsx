import React from 'react'
import Services from './../services/services';
import TopDishes from './topdishes';
import Ourmenu from './ourmenu.jsx';
import Bookingcard from './bookingcard';
import logo from '../assets/logo2.png'
import Customer from './ourcustomers.jsx';
const Home = () => {
  return (
    <>
      <div className=" mt-4 w-full  ">
        <div className="  w-full  px-4 lg:px-0 sticky top-0">
          <div className="flex justify-end lg:-mt-4 -pt-2">
            <img className="h-[14vmax]" src={logo} />
          </div>
          <div className="lg:flex-row flex-col gap-10 lg:gap-0  flex justify-evenly  lg:-mt-3 ">
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
          <h1 className="relative text-center mt-28 bg-[#a5e8aa] py-1 text-3xl font-medium text-shadow fade-in background-animation ">
          Choose your Cuisine, Choose your Kitchen.
          </h1>
        </div>
        <div className="z-30 relative   pt-4  bg-white -px-8">
          <TopDishes />
          <Ourmenu />
        </div>
        <div className="z-30 relative pt-4 my-8  bg-primary/90 w-full px-4 lg:px-0 items-center justify-between">
          <Bookingcard />
        </div>
      </div>
      <div className='relative z-30 max-w-[1200px] mx-auto my-16 px-4 lg:px-0 items-center justify-between'>
        <Customer />
      </div>
    </>
  )
}

export default Home
