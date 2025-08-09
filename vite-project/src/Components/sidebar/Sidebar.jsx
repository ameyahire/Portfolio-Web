import './Sidebar.scss'
import Toggle_Button from './toggle_button/Toggle_Button.jsx'
import Links from './links/Links.jsx'
import { useState } from 'react'
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)", // Start from the button's position
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)", // End at the button's position
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} variants={variants}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Toggle_Button setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
