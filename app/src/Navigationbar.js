import React,{useState} from "react";
import logowhite from "./logoo (2).png"; 
import logodark from "./logod.png";
import "./Navigationbar.css";
import ThemeToggle from "./ThemeToggle";


function Navigationbar() {
  const [open, setOpen] = useState(false);
  return (
    
    <nav className="navbar">
      <div className="hamburger" onClick={() => setOpen(true)}>
        &#9776;
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* Close Btn */}
        <div className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </div>
<a href="#">Pricing</a>
        <a href="#" className="active-home"><span className="gradient-text">✦</span> Home</a>

        <a href="#">FAQ</a>
        <a href="#">About Us</a>

        <a href="#">Blogs</a>
        <a href="#">Contact Us</a>
      </div>



      <div className="nav-left">
        <div className="logo-container">
  <img src={logowhite} alt="ChronicGPT logo" className="logo log-light" />
  <img src={logodark} alt="ChronicGPT logo" className="logo log-dark" />
       </div>

        <div className="nav-title">
          <h2>ChronicGPT Inc</h2>
          <p>AI Doctors for Chronic Care</p>
        </div>
      </div>

      {/* Right Section: grid of links (3 rows × 2 cols) */}
      <div className="nav-right-wrapper">
  <div className="nav-links-grid">
    <a href="#">Pricing</a>
    <a href="#" className="active-home"><span className="gradient-text">✦</span> Home</a>
    <a href="#">FAQ</a>
    <a href="#">About Us</a>
    <a href="#">Blogs</a>
    <a href="#">Contact Us</a>
  </div>

  <div className="theme-toggle">
    <ThemeToggle />
  </div>
</div>

    </nav>
  );
}

export default Navigationbar;
