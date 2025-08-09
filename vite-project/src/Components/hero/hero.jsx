import React from 'react';
import './hero.scss';
import { motion } from 'framer-motion';
import goodImage from '../../assets/profilee.png';

const textVariants = {
    initial: {
        x: -500, 
        opacity: 0,
    },
    animate: {
        x: 0, 
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
};

const sliderVariants = {
    initial: {
        x: "100%",
    },
    animate: {
        x: "-100%", 
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 40,
            staggerChildren: 0.1,
        },
    },
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" 
                    variants={textVariants} 
                    initial="initial" 
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Amey Ahire</motion.h2>
                    <motion.h1 variants={textVariants}>Welcome To My <br />Portfolio</motion.h1>
                    <motion.div className="hero-buttons" variants={textVariants}>
                        <motion.button variants={textVariants} onClick={() => scrollToSection ("Projects")}>See the Latest Work</motion.button>
                        <motion.button variants={textVariants} onClick={() => scrollToSection("Contact")}>Contact Me</motion.button>
                    </motion.div>
                </motion.div>
                <motion.div className="slidingTextContainer"
                    variants={sliderVariants} 
                    initial="initial" 
                    animate="animate"
                >
                <span>Student</span>
                </motion.div>
            </div>
            <div className="imageContainer">
                <img src={goodImage} alt="img" />
            </div>
        </div>
    );
}

export default Hero;
