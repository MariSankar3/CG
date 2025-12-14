import { useState, useEffect } from "react";
import moon from "./sunr.png";    // correct one
import sun from "./moonr.png";  // correct one
import "./toggle.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  return (
    <div className="toggle-containe" onClick={() => setIsDark(!isDark)}>
      <div className={`slide ${isDark ? "right" : "left"}`}>
        <img src={isDark ? moon : sun} className="slider-ico" alt="theme icon" />
      </div>
    </div>
  );
}
