


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

      <div className="icon-placeholder pt-[.4vmax] text-yellow-300 text-[2vmax]"  >  <Link onClick={() => {
        setIsOpen(false)
      }} to="/" className="block  text-base  font-medium hover:text-[#4CAF50]"></Link>
        {item.icon}
      </div>
      <div className="text-placeholder w-auto px-4 py-1 text-[1.5vmax] text-white"  >
        <Link key={item.name} to={item.path} className='flex px-2  items-center'>
          {item.name}
        </Link>

      </div>
    </motion.li>
  );
};

export default MenuItem;