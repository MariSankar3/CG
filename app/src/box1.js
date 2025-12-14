import "./box1.css";
import bodyImg from "./b1.png";
import doctor1 from "./b2.png";
import doctor2 from "./b3.png";

function Box1() {
  return (
    <div className="how-container">
      <p className="title">HOW IT WORKS</p>
      <p className="subtitle">
        Your AI Doctor combines three essential functions to provide continuous,
        intelligent care.
      </p>

      <hr style={{ color: "4a4a4a" }} />

      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <img src={bodyImg} alt="Body" className="card-img" />
          <p className="card-title">It learns your body</p>
          <p className="card-text">
            It observes your daily patterns — sleep, activity, routines — and
            understands how your body actually behaves.
          </p>
        </div>

        {/* Divider 1 */}
        <div className="card-divider"></div>

        {/* Card 2 */}
        <div className="card">
          <img src={doctor1} alt="Doctor" className="card-img" />
          <p className="card-title">It thinks clinically to protect you.</p>
          <p className="card-text">
            It looks for risks the way a careful clinician would — and flags
            anything important early.
          </p>
        </div>

        {/* Divider 2 */}
        <div className="card-divider"></div>

        {/* Card 3 */}
        <div className="card">
          <img src={doctor2} alt="Doctor 2" className="card-img" />
          <p className="card-title">It talks to you like a real doctor.</p>
          <p className="card-text">
            You get clear explanations and simple steps — not charts, not
            jargon, not confusion.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Box1;
