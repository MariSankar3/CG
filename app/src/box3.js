import "./box3.css";
import sampleImg from "./Framebox3.png"; // change to your image path

export default function Box3() {
  return (
    <div className="box3-container">
      {/* LEFT SIDE */}
      <div className="box3-left">
        <h3>BUILT FOR TRUST</h3>
        <p>
          We understand that trust is earned <br/>
          through transparency,consitency,<br/>
          and care. Your AI Doctor is not a <br/>
          replacement for your healthcare<br/>
          team -- it's a tool that works<br/>
          alongside them to give you better<br/>
          more continous support between<br/>
          visits. Every aspect of our platform is<br/>
          designed to keep your safe, informed, <br/>
          and in control.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="box3-right">
        <img src={sampleImg} alt="sample" />
      </div>
    </div>
  );
}
