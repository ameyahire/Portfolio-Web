import {useRef} from 'react';
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import p1 from "../../assets/Projects/p1.png"
import p2 from "../../assets/Projects/p2.png"
import p3 from "../../assets/Projects/p3.png"
import p4 from "../../assets/Projects/p4.png"
import p5 from "../../assets/Projects/p5.png"

const item = [
    {
    id:1,
    title:"Game Catelog Mobile - Figma",
    img: p1,
    desc:"- Built mobile UI for comparing game prices across Steam, EA, PlayStation, Epic. etc.\n- Designed Home (slider + news), Games (search + filter), Library (concept view).\nCreated sidebar: Home, Games, Library; placeholders for News, Discussion, Settings.\n- Used Figma for dynamic components and platform-friendly design",
    link: "https://www.figma.com/proto/fAYPjCp7bQmW0oQEpUQGGN/GameSales?node-id=20-44&p=f&t=wqw47l4Y57RtrmYO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=20%3A44",
    },

    {
    id:2,
    title:"DC Charater Showcase Desktop - Figma",
    img: p2,
    desc: "- Designed UI screens for DC characters with clear layout of Powers, Origins, Villains, and Crimes.\n- Built dropdowns and modular layouts in Figma with a focus on clarity and storytelling.\n- Blended comic lore with interface design to enhance interaction skills",

    link: "https://www.figma.com/proto/qs5XOfI4W6R7584rGfwnND/DC-Chracter?node-id=1-2&p=f&t=MPmbEUemrWqh9Ji5-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=117%3A738",
    },

    {
    id:3,
    title:"Game Sales Dashboard - PowerBi",
    img: p4,
    desc: "- Analyzed and visualized sales trends of video games using Python libraries such as Pandas and Matplotlib.\n- Developed an interactive Power BI dashboard for video game sales, incorporating dynamic visuals and slicers to display key metrics, trends, and insights by region and genre.\n- Built a Random Forest Regression model to predict future sales by publisher.",

    link: "https://github.com/ameyahire/VideoGameSales_Analysis-",
    },

    {
    id:4,
    title:"Blinkit Dashboard - PowerBi",
    img: p3,
    desc:"This Power BI visualization project explores Blinkit’s retail operations across India, offering key metrics to optimize sales strategy, inventory decisions, and outlet expansion. Developed with a focus on multi-tier outlet analysis, item category breakdowns, and fat content segmentation, this dashboard provides a comprehensive snapshot of business health.",

    link: "https://github.com/ameyahire/Blinkit_PowerBi_Dashboard",
    },

    {
    id:5,
    title:"Blogs - Website",
    img: p5,
    desc:"A full-stack blog website built with React, Node.js, and MongoDB where users can create, edit, and view blogs. Authenticated users can upload images and manage their posts.",

    link: "https://github.com/ameyahire/Blogs-Web/tree/master",
    },


];

const Single = ({item}) => {
    const ref =useRef()

        const {scrollYProgress} = useScroll({ 
        target: ref, 
    });

    const y = useTransform(scrollYProgress,[0,1], [-200 , 200])

    return (
    <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <div className="desc">
                  {item.desc.split('\n').map((line, index) => (
                    <p key={index}>{line.trim()}</p>
                  ))}
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>Project Link</button>
                </a>
            </motion.div>
            </div>
        </div>
    </section>
    );
};

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({ 
        target: ref, 
        offset:["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    });
    return (
  <div className="portfolio" ref={ref}>
    <div className="progress">
        <h2>Projects</h2>
        <motion.div style={{scaleX}}className="progressBar"></motion.div>
    </div>
    {item.map(item=>(
        <Single item={item} key={item.id}/>
    ))}
  </div>
  )
}

export default Portfolio