import { motion } from "framer-motion";
import "./T-button.scss";

const Toggle_Button = ({ setOpen }) => {
  return (
    <div className="button_a">
    <button className="toggle-btn" onClick={() => setOpen((prev) => !prev)}>
      <svg width="800px" height="40px" viewBox="0 0 24 24">
        <motion.path
          id="Vector"
          d="M8 19V5"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          // transform="rotate(90 12 12)"
          variants={{ closed: {rotate:90,x:4,y:-4}, open: {rotate:45,x:4,y:0} }}
        />
        <motion.path
          id="Vector"
          d="M12 19V5"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="rotate(90 12 12)"
          variants={{ closed: {opacity:1}, open: {opacity:0} }}
        />
        <motion.path
          id="Vector"
          d="M16 19V5"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          // transform="rotate(90 12 12)"
          variants={{ closed: {rotate:90,x:-4,y:4}, open: {rotate:-45,x:-4,y:0} }}
        />
      </svg>
    </button>
    </div>
  );
};

export default Toggle_Button;
