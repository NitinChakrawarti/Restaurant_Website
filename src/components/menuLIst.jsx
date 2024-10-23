import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import MenuItem from "./menuItems"; // Ensure the correct import path
import { MdDinnerDining } from "react-icons/md";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { path } from "framer-motion/client";
import { userName } from '../context/signupcontext';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MenuList = () => {

  const [bookvalue, setBookvalue] = useState(0);
  const [usernameLS, setUsernameLS] = useState("Sign in");
  const issignedin = useContext(userName);

  useEffect(() => {
    const bookvalue = localStorage.getItem("cardValue");
    const usernameLS = localStorage.getItem("username");
    if (usernameLS) {
      setUsernameLS(usernameLS);
    }
    setBookvalue(bookvalue);
  }, [issignedin.name]);
  const itemIds = [
    { path: "/", icon: <FaUser />, name: usernameLS },
    { name: "Home", path: "/home", icon: <MdOutlineFoodBank /> },
    { name: "Services", path: "/services", icon: <MdDinnerDining /> },
    { name: "Write about us", path: "/feedback", icon: <MdFeedback /> },
    { name: "Bookings", path: "/booking", icon: <MdBorderColor />, bookvalue: bookvalue }
  ];

  return (
    <motion.ul variants={variants} className="z-50">

      {itemIds.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </motion.ul>
  )


};

export default MenuList;
