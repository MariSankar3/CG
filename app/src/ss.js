import { useEffect, useRef, useState } from "react";
import "./ss.css";

import desktopImg from "./b4image.png";

import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import i5 from "./i5.png";
import i6 from "./i1.png";

export default function SS() {
  const stageRef = useRef(null);
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Track screen resize
  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Desktop scroll animation
  useEffect(() => {
    if (isMobile) return;

    function updateActive() {
      const stage = stageRef.current;
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const scrollHeight = stage.offsetHeight - window.innerHeight;

      const progress = Math.min(Math.max(-rect.top / scrollHeight, 0), 1);
      const index = Math.round(progress * 5);

      cardsRef.current.forEach((card, i) => {
        if (i === index) card.classList.add("active");
        else card.classList.remove("active");
      });
    }

    window.addEventListener("scroll", updateActive);
    updateActive();

    return () => window.removeEventListener("scroll", updateActive);
  }, [isMobile]);

  const mobileImages = [i1, i2, i3, i4, i5, i6];

  const steps = [
    "Your MD sets your clinical goals.",
    "You create your own AI Doctor.",
    "Your devices connect and your data flows automatically.",
    "Your AI Doctor builds a digital model of your body.",
    "You receive daily individualized guidance.",
    "A clinician supervises everything and steps in when needed.",
  ];

  return (
    <section className="ss-stage" ref={stageRef}>
      <div className="ss-wrapper">
        {steps.map((text, i) => (
          <div
            key={i}
            className="ss-card"
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <img
              src={isMobile ? mobileImages[i] : desktopImg}
              alt="visual"
              className="step-img"
            />

            <p>{text}</p>

            <span>{String(i + 1).padStart(2, "0")}</span>

            <p className="po">
              After sign-up, your physician reviews your labs, medications,
              history, and biomarkers. They set measurable goals — for HbA1c,
              weight, LDL, blood pressure, sleep, and more.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
