import { useRef, useState } from "react";
import "./Myself.scss";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-100px" });

  return (
    <div className="section" ref={sectionRef}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};  


const Myself = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const [openIdx, setOpenIdx] = useState(null);

  const internships = [
    {
      title: "Techligence (Web Dev Internship)",
      timeline:(<><i>Nov 2023 - Jan 2024</i></>),
      desc: (
      <>
        <i>HTML5, CSS3, React.js</i> <br />
        • Developed block-based programming solutions using Blockly and created dynamic user interfaces with React. <br />
        • Contributed to the development and maintenance of web applications, gaining hands-on experience in frontend
        technologies to create efficient and user-friendly digital solutions
      </>
  )
    },
    {
      title: "Brillient View (Web Dev Internship)",
      timeline: (<><i>Jun 2024 - Jul 2024</i></>),
      desc: (
      <>
        <i>MongoDB, Express.js, React.js, Node.js, HTML5, CSS3</i><br />
        • Developed a user-friendly frontend for an e-commerce website using React.js with responsiveness across all devices.<br />
        • Built backend functionality using Express.js for operations such as adding, removing products and user registration.<br />
        • Created an Admin Interface to manage user responses and perform product operations.
      </>
  )
    }
  ];

  return (
    <div className="myself" ref={ref}>
      <div className="progress">
        <h2>About Me</h2>
        <motion.div style={{ scaleX }} className="progressBar" />
      </div>

    <AnimatedSection>
      <div className="section">
        <h2>Education</h2>
        <p>B.Tech in IT - VJTI Mumbai – Veermata Jijabai Technological Institute<br />Dec 2021 - 2025</p>
      </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="section">
          <h2>Skills & Tools</h2>
            <ul className="skillsGrid">
            <li className="mern">MERN Stack</li>
            <li className="uiux">UI/UX Design</li>
            <li className="data">Data Analysis</li>
            <li className="figma">Figma</li>
            <li className="excel">Excel</li>
            <li className="powerbi">Power BI</li>
           <li className="pandas">Pandas</li>
            <li className="numpy">NumPy</li>
            <li className="sql">SQL</li>
            <li className="photoshop">Photoshop</li>
            <li className="canva">Canva</li>
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection>
      <div className="section">
        <h2>Internships</h2>
        {internships.map((item, idx) => (
          <div key={idx} className="dropdownItem">
            <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
              <strong>{item.title}</strong> — {item.timeline}
            </button>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={openIdx === idx ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p>{item.desc}</p>
              </motion.div>
          </div>
        ))}
      </div>
      </AnimatedSection>

            <AnimatedSection>
      <div className="section">
        <h2>Hobbies</h2>
        <ul>
          <li>Game Dev</li>
          <li>Drawing and Designing</li>
          <li>Learing 3d modeling Tools</li>
          <li>Movies</li>
          <li>Chess</li>
          <li>Cricket</li>
          <li>Football</li>
          <li>Gaming</li>
        </ul>
      </div>
      </AnimatedSection>

      <AnimatedSection>
      <div className="section">
        <h2>Activities</h2>
        <ul>
          <li>Design Head | Enthu VJTI (2023–2024)</li>
          <li>Editor Manager | Nirmaan VJTI (2023–2024)</li>
          <li>Execution Manager | DLA VJTI (2022–2024)</li>
          <li>Execution Manager | Technovanza VJTI (2022–2023)</li>
        </ul>
      </div>
      </AnimatedSection>
    </div>
  );
};

export default Myself;
