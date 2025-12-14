import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./try.css";

import signup from "./Frame.png";

function Try() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // smoothness strength
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="ontainer">
      {/* LEFT */}
      <div className="left">
        {[
          {
            num: "01",
            title: "Your data stays yours",
            desc:
              "Your health data is encrypted, never sold, and never shared without your permission.",
          },
          {
            num: "02",
            title: "Built for safety first",
            desc:
              "AI Doctor avoids harmful or risky recommendations and escalates to clinician.",
          },
          {
            num: "03",
            title: "Transparent and in your control",
            desc:
              "You can see why the AI makes decisions. No black boxes or hidden logic.",
          },
          {
            num: "04",
            title: "Clinically reviewed",
            desc:
              "Every AI Doctor is reviewed by licensed physicians continuously.",
          },
          {
            num: "05",
            title: "US healthcare compliant",
            desc:
              "Complies with HIPAA, tele-health regulations, and AI safety laws.",
          },
          {
            num: "06",
            title: "Human doctors involved",
            desc:
              "AI Doctor works alongside real physicians for your safety.",
          },
        ].map((item, i) => (
          <div key={i} className={`section r${i + 1}`}>
            <div className="top-row">
              <img src={signup} alt="icon" />
              <p>{item.num}</p>
            </div>
            <div className="gradient" />
            <h3>{item.title}</h3>
            <h6>{item.desc}</h6>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="img img1" />
        <div className="img img2" />
        <div className="img img3" />
        <div className="img img4" />
        <div className="img img5" />
        <div className="img img6" />
      </div>
    </div>
  );
}

export default Try;
