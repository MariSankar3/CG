import './doctorsection.css';
import doctor from './dctrs.png';
import join from './join.png';
import aw from './aw.png';
import Typewriter from "./Typewriter";
import doctor1 from "./doctor1.png";
import JoinButton from './Join';
import AlwaysWatching from './AlwaysWatching';
import aw1 from './aw1.png';
import aw2 from './aw2.png';
import AlwaysWatchings from './AlwaysWatchings';

function DoctorSection() {
  return (
    <div className='box'>

      {/* Row 1 */}
      <div className="top-row">

        <div className='ho'>
          <p className='h'>
            Your own<br/>
            <span className="gradient-text">AI Doctor </span>
            built<br/> around your body.
          </p>
        </div>

          <div className="hi">
            <Typewriter
              text="Your AI Doctor is the medical companion you always wished you had - one that knows your body, remembers your history, and never disappears between visits. It spots patterns, simplifies decisions, and helps you avoid the crashes, flare-ups, and chaos that usually come out of nowhere. Every decision your AI Doctor makes is grounded in clinical oversight - real physicians monitor your progress and intervene when it matters."
              speed={30}
            />
            <a href="#">
              <JoinButton className="img"/>
            </a>
          </div>

      </div>

      {/* Row 2 - image */}
      <img src={doctor} alt="doctor" className="doctor-img d1" />
      <img src={doctor1} alt='doctor' className='doctor-img d2'/>
            <AlwaysWatching className="small small1"/>
            <AlwaysWatching className="small small2"/>
            <AlwaysWatching className="small small3"/>
            <AlwaysWatchings className="small small4"/>
            <AlwaysWatchings className="small small5"/>
            <AlwaysWatchings className="small small6"/>
                  
      <a href='#'><img src={aw2} className='small small7' alt='aw'/></a>
    </div>
  );
}

export default DoctorSection;
