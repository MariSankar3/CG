import "./box6.css";
import tick from "./tick.png"; // use your tick icon
import box71 from "./box71.png";
import box72 from "./box72.png";
import box73 from "./box73.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "./log.png";
import tickd from "./tickd.png";

export default function Box6() {
  const items = [
    {
      title: "INCLUDED WITH QRONICAI",
      subtitle: "(Everything here is part of the subscription)",
      list: [
        "Your own AI Doctor",
        "Daily guidance & weekly check-ins",
        "24/7 messaging & support",
        "Continuous monitoring of patterns",
        "Integration with your existing wearables",
        "Essential starter devices, if needed (sleep/activity tracker, condition-specific sensor)",
      ],
    },
    {
      title: "COVERED BY YOUR INSURANCE",
      subtitle: "(Things your existing doctor or insurance already covers)",
      list: [
        "Routine lab tests",
        "Imaging and results",
        "Prescription medications",
        "In-person doctor visits",
        "Many telehealth visits with clinicians",
      ],
    },
    {
      title: "USER CHOICE",
      subtitle: "(Completely optional add-ons; not required)",
      list: [
        "Additional specialty sensors",
        "Non-standard lab panels",
        "Extra or premium services",
        "Any advanced devices not included in starter kit",
      ],
    },
  ];

  return (
    <div className="box6-container">
      <div className="box6-top">
        <p className="p1">No Surprises. No Fine Print. Just the Truth.</p>
        <p className="p2">
          We believe in complete transparency. Here's exactly what you get with Qronic<br/> AI,
          what your insurance already covers, and what's optional.
        </p>
      </div>

      <div className="box6-grid">
        {items.map((box, index) => (
          <div className="box6-card" key={index}>
            <p className="p1">{box.title}</p>
            <p className="box6-sub">{box.subtitle}</p>

            <ul>
              {box.list.map((point, i) => (
                <li key={i}>
                  <img className="tick" alt="tick" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="box7">
        <p>Trusted by healthcare professionals and patients alike</p>
        <img src={box71}/>
        <img src={box72}/>
        <img src={box73}/>
      </div>

      <div className="box8">
         {/* LEFT SIDE */}
      <div className="box8-left">
        <span className="box8-badge">Limited Spots Available</span>

        <h2>Be part of the first cohort.</h2>

        <p>
          Get full access, all setup support, and early-user advantages.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="box8-right">
        <p>Join first cohort</p>

        <input
          type="text"
          placeholder="Enter E-mail ID"
          className="box8-input"
        />

        <p className="box8-small">
          Takes less than 30 seconds. No commitment required.
        </p>
      </div>
      </div>

      <div className="box9">
         <div className="box9-top">
        
        {/* LEFT MAIN SECTION */}
        <div className="box9-col box9-main">
            <img className="log"/>
          <p>
            We offer reliable healthcare insights, expert advice, 
            and digital tools to support your journey towards a 
            healthier lifestyle.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="box9-col">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Blog & Articles</p>
          <p>Contact Us</p>
        </div>

        {/* PATIENT RESOURCES */}
        <div className="box9-col">
          <h4>Patient Resources</h4>
          <p>Frequently Asked Questions</p>
          <p>Telemedicine Resources</p>
          <p>Mental Health Advice</p>
          <p>Rehabilitation Assistance</p>
          <p>Emergency Support</p>
        </div>

        <div className="box9-col">
          <h4>Legal Information</h4>
          <p>Privacy Notice</p>
          <p>Terms & Conditions</p>
          <p>Disclaimer</p>
        </div>

        <div className="box9-col">
         <h4 className="connect-title">Connect with us</h4>

          <div className="social-icons">
            <div className="icon-circle"><FaFacebookF /></div>
            <div className="icon-circle"><FaTwitter /></div>
            <div className="icon-circle"><FaLinkedinIn /></div>
            <div className="icon-circle"><FaInstagram /></div>
          </div>
        </div>

         <div className="box9-col">
          <h4>Patient Resources</h4>
          <p>Frequently Asked Questions</p>
          <p>Telemedicine Resources</p>
          <p>Mental Health Advice</p>
          <p>Rehabilitation Assistance</p>
          <p>Emergency Support</p>
        </div>

        {/* WHY CHOOSE US */}
        <div className="box9-col">
          <h4>Why Choose Q.ai?</h4>
          <p>About Us</p>
          <p>Case Studies</p>
          <p>Our Wall of Love</p>
          <p>Pricing</p>
          <p>Join Our Affiliate Program</p>
          <p>Propose a Partnership</p>
          <p>Agency Reseller Program</p>
        </div>



        {/* SUPPORT */}
        <div className="box9-col">
          <h4>Support & Documentation</h4>
          <p>Contact Us</p>
          <p>Office Hours</p>
          <p>Help Center</p>
          <p>Request a Feature</p>
          <p>Senja for Developers</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Discount Code Policy</p>
          <p>What's New</p>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="box9-bottom">
        <div className="bottom-links">
        <p>Copyright © ethereal 2025</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <p>Designed & Developed by Etherealdesign.io</p>
      </div>
      </div>
    </div>
  );
}
