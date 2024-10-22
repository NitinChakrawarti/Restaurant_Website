import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./menuItems"; // Ensure the correct import path
import { MdDinnerDining } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
// Animation variants for Framer Motion

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};


const MenuList = () => (
  <motion.ul variants={variants}>
    {itemIds.map((item, index) => (
      <MenuItem item={item} key={index} />
    ))}
  </motion.ul>
);


const itemIds = [
  { name: "Signup", path: "/signin", icon: <FaSignInAlt /> },
  { name: "Home", path: "/", icon: <MdOutlineFoodBank /> },
  { name: "Services", path: "/services", icon: <MdDinnerDining /> },
  { name: "Write about us", path: "/feedback", icon: <MdFeedback /> },
  { name: "Bookings", path: "/booking", icon: <MdBorderColor /> },
];

export default MenuList;
