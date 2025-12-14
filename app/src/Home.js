import Navigationbar from "./Navigationbar";
import LoadingScreen from "./LoadingScreen";
import { useState } from "react";
import "./home.css";
import DoctorSection from "./doctorsection";
import Sam from "./sam";
import Box1 from "./box1";
// import Box2 from "./box2";
import Box3 from "./box3";
import Box4 from "./box4";
import Box5 from "./box5";
import Box6 from "./box6";
import SS from "./ss";
import Box7 from "./Box7";
import Try from "./try";
import ContactForm from "./ContantForm";
import Hiw from "./hiw";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
   if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }
  return (
    <div className="App">
      <header className="App-header">
      <Navigationbar />
      <DoctorSection />
      <Box1 />
       <Try />
      <Box3 />
      <Box4/>
      <SS />
      <Box5/>
      <Box6/>
      <Box7/>
      {/* <ContactForm/> */}
      <Hiw/>
      </header>
    </div>
  );
}
export default Home;