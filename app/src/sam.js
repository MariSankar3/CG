import React, { useRef, useState, useEffect } from "react";
import illu01 from "./Frame 109.png";
import illu02 from "./Frame 109.png";
import illu03 from "./Frame 109.png";
import illu04 from "./Frame 109.png";
import illu05 from "./Frame 109.png";
import illu06 from "./Frame 109.png";
import signup from "./Frame.png";
import "./sam.css";

const illustrations = [illu01, illu02, illu03, illu04, illu05, illu06];

// The background and border colors are all 'black' and 'white' respectively in the original array, 
// but kept as arrays for flexibility if you want to change them later.
const bgColors = [
  "black",
  "black",
  "black",
  "black",
  "black",
  "black"
];

const borderColors = [
  "white",
  "white",
  "white",
  "white",
  "white",
  "white"
];

const content = [
  { number: "01", heading: "Your data stays yours", body: "Your health data is encrypted, never sold, and never shared without your permission." },
  { number: "02", heading: "Built for safety first", body: "AI Doctor avoids harmful or risky recommendation and escalates to clinicians." },
  { number: "03", heading: "Transparent and in your control", body: "You can see why the AI makes decisions. No black boxes." },
  { number: "04", heading: "Medically validated", body: "Every AI Doctor is reviewed by licensed physicians." },
  { number: "05", heading: "Regulation compliant", body: "Complies with HIPAA and medical AI safeguards." },
  { number: "06", heading: "Human doctors oversee everything", body: "Real doctors monitor all cases alongside the AI." }
];

export default function Sam() {
  const [sections, setSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      const updated = sectionRefs.current.map((ref) => {
        if (!ref) return { isActive: false };

        const rect = ref.getBoundingClientRect();

        // ACTIVE when center of viewport hits the section
        const isActive =
          rect.top <= viewportHeight / 2 &&
          rect.bottom >= viewportHeight / 2;

        return { isActive };
      });

      setSections(updated);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine the index of the currently active section
  const activeIndex = sections.findIndex(s => s.isActive);
  const fallbackIndex = activeIndex === -1 ? 0 : activeIndex;


  return (
    <>
      <div className="scroll-carousel">

        {/* LEFT FIXED PANEL */}
        <div className="carousel-left">
          {content.map((item, index) => {
            const sec = sections[index] || { isActive: index === 0 };
            const isActive = sec.isActive;
            
            // Calculate position relative to the active section
            const isPast = index < fallbackIndex;
            const isFuture = index > fallbackIndex;
            
            let transformValue = "translateY(0)"; // Default: Active state (Sticking)
            
            if (isFuture) {
              // Future cards start off-screen at the bottom (slide up)
              transformValue = "translateY(100vh)";
            } else if (isPast) {
              // Past cards slide off-screen at the top
              transformValue = "translateY(-100vh)";
            }

            return (
              <div
                key={index}
                className="content-card"
                style={{
                  // The active card is fully visible (opacity 1)
                  // The previous and next cards are hidden (opacity 0)
                  opacity: isActive ? 1 : 0, 
                  
                  // New cards (higher index) need a higher zIndex to slide on top of old ones
                  // To achieve the stack effect, we reverse the index order for zIndex.
                  // For example: Card 5 (index 4) should slide over Card 4 (index 3).
                  // zIndex: index, 
                  // Using 'index' ensures newer cards cover older ones.
                  zIndex: index, 

                  backgroundColor: bgColors[index],
                  border: `1px solid ${borderColors[index]}`,

                  // REVISED: Controls the entry/exit animation
                  transform: transformValue,
                  // transition: "transform 0.7s ease-in-out, opacity 0.5s ease-in-out"
                   transition: "transform 1s ease-in-out,opacity 0.1s ease-in-out"
                }}
              >
                <div className="left-wrap center-left">
                  <img src={signup} className="signup-ico" alt="" />
                  <h1 className="lef-number">{item.number}</h1>
                  <div className="gradient-border" />
                  <h3 className="lef-title">{item.heading}</h3>
                  <p className="lef-desc">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="carousel-right">
          {content.map((_, i) => (
            <div
              className="content-section"
              key={i}
              ref={(el) => (sectionRefs.current[i] = el)}
            >
              <img src={illustrations[i]} className="illu" alt="" />
            </div>
          ))}
        </div>

      </div>

      {/* CSS */}
      <style>{`
        /* Note: The .left-wrap {position:sticky} was commented out in your original CSS, 
           and it is not needed here since the .carousel-left container is already sticky 
           and we are using the card animation to simulate the sticking. */

       
      `}</style>
    </>
  );
}