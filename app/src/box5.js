import "./box5.css";

import img1 from "./iPhone.png";
import img2 from "./iPhone.png";
import img3 from "./iPhone.png";
import img4 from "./iPhone.png";

import out1 from "./1111.png";
import out2 from "./121.png";
import out3 from "./131.png";
import out4 from "./141.png";
import out5 from "./151.png";
// import out6 from "./151.png";

export default function Box5() {

  const programs = [
    {
      img: img1,
      title: "Glucose Stability Program",
      desc: "Helps smooth the highs and lows so your days feel more balanced and predictable."
    },
    {
      img: img2,
      title: "Blood Pressure Support Program",
      desc: "Guides healthier rhythms throughout your day, helping your body stay calmer."
    },
    {
      img: img3,
      title: "Weight & Metabolic Reset Program",
      desc: "Helps your energy, appetite, and routines move toward a steadier, lighter pattern."
    },
    {
      img: img4,
      title: "Cholesterol & Heart Health Program",
      desc: "Supports a healthier long-term rhythm, improving the patterns your body follows."
    },
  ];

  const outcomes = [
    {desc:"You choose one or more improvement programs. Your AI Docor works in the background every day - helping you feel the changes in ways that matter: steadier energy, calmer mornings, smoother rhythms, and more restorative nights"},
    { img: out1, title: "Steadier days", desc: "Less chaos. Fewer surprises. Your body feels more predictable and calmer." },
    { img: out2, title: "Calmer mornings", desc: "You start the day steadier, without the crashes or swings that used to set the tone." },
    { img: out3, title: "Better sleep patterns", desc: "Nights become more restorative. Mornings feel clearer. Days feel less heavy." },
    { img: out4, title: "Reduced ups and downs", desc: "Your body settles into smoother rhythms rather than sharp spikes or dips." },
    { img: out5, title: "More consistent routines", desc: "Your AI Doctor helps you stay aligned — habits become easier and progress sticks." },
  ];

 return (
  <div className="box5-container">
    <div className="box5-inner">

      {/* ROW 1 : Main paragraph */}
      <div className="box5-row box5-para">
        <h3>REAL CLINICAL OUTCOMES | FELT IN YOUR EVERYDAY LIFE</h3>
        <p>
          You choose one or more improvement programs. Your AI Doctor works in the background 
          every day — helping you feel the changes in ways that matter: steadier energy, 
          calmer mornings, smoother rhythms, and more restorative nights.
        </p>
      </div>

      {/* ROW 2 */}
      <div className="box5-row box5-section-title">
        <h2>01</h2>
        <p>The Programs</p>
      </div>

      {/* ROW 3 : 4-column */}
      <div className="box5-grid box5-program-grid">
        {programs.map((item, i) => (
          <div className="box5-card" key={i}>
            <img src={item.img} alt={item.title} className="box5-img" />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ROW 4 */}
      <div className="box5-row box5-section-title">
        <h2>02</h2>
        <p>Everyday outcomes</p>
      </div>

      {/* ROW 5 : 2 rows × 3 columns */}
      <div className="box5-grid box5-outcomes-grid">
        {outcomes.map((item, i) => (
          <div className="box5-card outcome-card" key={i}>
            <img src={item.img} alt={item.title} className="out-img" />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
);

}
