import { useEffect, useState, useRef } from "react";
import "./hiw.css";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import { FiArrowUpRight } from "react-icons/fi";

function Hiw() {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top;
      const wrapperHeight = rect.height - window.innerHeight;

      let progress = scrollProgress / wrapperHeight;
      let index = Math.floor(progress * 3);

      if (index < 0) index = 0;
      if (index > 2) index = 2;

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      num: "01",
      title: "Your AI Doctor studies the way your body behaves",
      desc: `It watches your sleep quality,
meals, glucose swings, hydration,
medication timing, activity, and
stress patterns. Over time, it builds
a living model of your physiology,
spotting subtle patterns that even
good doctors can’t see between
visits. This is how it understands
why your numbers move the way
they do, and what will help you
stabilize them.`,
      icon: i1,
    },
    {
      num: "02",
      title: "Behind every insight is real clinical reasoning.",
      desc: `It watches your sleep quality,
meals, glucose swings, hydration,
medication timing, activity, and
stress patterns. Over time, it builds
a living model of your physiology,
spotting subtle patterns that even
good doctors can’t see between
visits. This is how it understands
why your numbers move the way
they do, and what will help you
stabilize them.`,
      icon: i2,
    },
    {
      num: "03",
      title: "Clear explanations. Simple actions. No jargon.",
      desc: `It watches your sleep quality,
meals, glucose swings, hydration,
medication timing, activity, and
stress patterns. Over time, it builds
a living model of your physiology,
spotting subtle patterns that even
good doctors can’t see between
visits. This is how it understands
why your numbers move the way
they do, and what will help you
stabilize them.`,
      icon: i3,
    },
  ];

  return (
    <div className="hiw-wrapper" ref={wrapperRef}>
      <div className="hiw-container">

        {/* LEFT */}
        <div className="lft">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`lft-row ${activeIndex === i ? "active" : ""}`}
            >
              <div className="lft-num">{step.num}</div>
              <div className="lft-text">{step.title}</div>
              <div className="lft-icon">
                <FiArrowUpRight size={28} className="far" />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="rgt">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`rgt-row ${activeIndex === i ? "show" : ""}`}
            >
              <img src={step.icon} alt="" />
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Hiw;
