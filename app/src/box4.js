import React, { useEffect, useRef, useState } from "react";
import "./box4.css";

import img1 from "./b4image.png";
import img2 from "./b4image.png";
import img3 from "./b4image.png";
import img4 from "./b4image.png";
import img5 from "./b4image.png";
import img6 from "./b4image.png";

export default function Box4() {
  const items = [
    { img: img1, text: "Your MD sets your clinical goals.", step: "01" },
    { img: img2, text: "You create your own AI Doctor.", step: "02" },
    { img: img3, text: "Your devices connect and your data flows in automatically.", step: "03" },
    { img: img4, text: "Your AIDoctor builds a digital model of your body.", step: "04" },
    { img: img5, text: "You receive daily individualized guidance.", step: "05" },
    { img: img6, text: "A clinician supervises everything and steps in when needed.", step: "06" },
  ];

  const colRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollDir, setScrollDir] = useState("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollDir(window.scrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const order =
          scrollDir === "down"
            ? [...items.keys()]       // 0→5
            : [...items.keys()].reverse(); // 5→0

        order.forEach((colIndex, step) => {
          setTimeout(() => {
            setActiveIndex(colIndex);
          }, step * 3000); // 3 sec per item
        });
      },
      { threshold: 0.4 }
    );

    colRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      colRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, [scrollDir]);

  return (
    <div className="box4-container">
      <div className="box4-inner">

        <div className="box4-title-section">
          <h2 className="box4-title">YOUR JOURNEY WITH QRONIC AI</h2>
          <p className="box4-subtitle">Your AI Doctor combines three essential functions to provide continuous, intelligent care.</p>
        </div>
 </div>
        {/* <div className="box4-main-grid">
          <div className="box4-grid">
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => (colRefs.current[index] = el)}
                className={`box4-col ${activeIndex === index ? "expand" : "shrink"}`}
              >
                <p className="col-text">{item.text}</p>
                <img src={item.img} className="col-img" alt="" />
                <p className="col-step">{item.step}</p>
              </div>
            ))}
          </div>
        </div> */}

     
    </div>
  );
}
