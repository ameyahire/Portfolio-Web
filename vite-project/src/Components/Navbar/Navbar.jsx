import React from 'react'
import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div className="navbar">
        {/* sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            >
              Profile</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/amey-ahire-96b55325b/" target='_blank'><FaLinkedin style={{fontSize: '30px'}}/></a>
                <a href="https://github.com/ameyahire" target='_blank'><FaGithub style={{fontSize: '30px', color: 'white'}}/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
