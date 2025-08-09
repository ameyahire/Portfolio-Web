import "./Parallax.scss";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import mountain from "../../assets/mountain1.png"
import mountainN from "../../assets/mountainnight1.png"
import cloud from "../../assets/cloud4.png"
import stars from "../../assets/stars1.png"
import sun from "../../assets/sun.png"
import moon from "../../assets/moonp.png"




const Parallax = ({type}) => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xCloud = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]); // New transform for x direction

  return (
    <div className="parallax" 
      ref={ref}
      style={{
        background: type === "about"
      ? "linear-gradient(rgb(255 109 0), rgb(249 255 46))"
      : type === "projects"
      ? "linear-gradient(180deg, #000000, #4750ff)"
      : "linear-gradient(180deg, #0c0c1d, #150617)"
      }}>
      <motion.h1 className={type === 'projects' ? 'projects-header' : ''} 
      style={{y: yText}}>{type === 'about' ? 'About Myself' : 'My Projects'}
      </motion.h1>

      <div className="mountain" 
      style={{ backgroundImage: `url(${type === 'about' ? mountain : mountainN})` }}>
      </div>

      <motion.div  className="cloud"
      style={{x: xCloud, backgroundImage: `url(${type === 'about' ? cloud : stars})`,width: '100%', height: '155%'}}
      ></motion.div> 

      <motion.div  className="sun"
      style={{y: yBg, backgroundImage: `url(${type === 'about' ? sun : moon})`}}>
      </motion.div>
    </div>
  );
}

export default Parallax;
