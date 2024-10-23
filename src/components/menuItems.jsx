


import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MenuItem = ({ item }) => {

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link key={item.name} to={item.path} className='flex px-2  items-center'>
        <div className="icon-placeholder pt-[.4vmax] text-orange-500 text-[2vmax]"  >  
        <p onClick={() => {
          setIsOpen(false)
        }} to="/" className="block  text-base  font-medium hover:text-[#4CAF50]"></p>
          {item.icon}
        </div>
        <div className="text-placeholder w-auto px-4 py-1 text-[1.5vmax] text-[#1a231b]"  >

          {item.name} <sup className="text-[#152015] text-[1.7vmax]">{item.bookvalue}</sup>


        </div>
      </Link>
    </motion.li>
  );
};

export default MenuItem;