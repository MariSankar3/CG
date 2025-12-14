import React, { useState, useEffect, useRef } from "react";
import "./Box7.css";
import img from "./b4image.png";

function Box7() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;

      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        totalScrollable
      );

      const progress = scrolled / totalScrollable;

      if (progress < 1 / 3) {
        setActiveIndex(0);
      } else if (progress < 2 / 3) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-wrapper" ref={containerRef}>
      <div className="sticky-content">

        <div className="flw1">
          <p className="pa1">No Surprises. No Fine Print. Just the Truth.</p>
          <p className="pa2">
            We believe in complete transparency. Here's exactly what you get with
            Qronic AI, what your insurance already covers, and what's optional.
          </p>
        </div>

        <div className="flw2">
          <p className={activeIndex === 0 ? "active-p" : ""}>
            INCLUDED WITH <br /> CHRONIC AI
          </p>
          <p className={activeIndex === 1 ? "active-p" : ""}>
            COVERED BY YOUR <br /> INSURANCE
          </p>
          <p className={activeIndex === 2 ? "active-p" : ""}>
            USER CHOICE
          </p>
        </div>

        <div className="cont">
          <div className={`c1 ${activeIndex === 0 ? "show" : ""}`}>
            <img className="b4image" src={img} alt="" />
            <div>
              <p className="par">INCLUDED WITH CHRONIC AI</p>
              <p className="pa">(Everything here is part of the subscription)</p>
            </div>
          </div>

          <div className={`c2 ${activeIndex === 1 ? "show" : ""}`}>
            <img className="b4image" src={img} alt="" />
            <div>
              <p className="par">COVERED BY YOUR INSURANCE</p>
              <p className="pa">
                (Things your existing doctor or insurance already covers)
              </p>
            </div>
          </div>

          <div className={`c3 ${activeIndex === 2 ? "show" : ""}`}>
            <img className="b4image" src={img} alt="" />
            <div>
              <p className="par">USER CHOICE</p>
              <p className="pa">(Completely optional add-ons)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Box7;
