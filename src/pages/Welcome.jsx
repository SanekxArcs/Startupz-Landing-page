import Hero from "../components/Hero";
import OurCoreValues from "../components/OurCoreValues";
import WeSolving from "../components/WeSolving";
import WeSolving2 from "../components/WeSolving2";
import WhoWeAre from "../components/WhoWeAre";
import OurWorks from "../components/OurWorks";
import Hiring from "../components/Hiring";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Assistant from "../components/Assistant";
import Alert from "../components/Alert";
import { useState } from "react";
import Thanks from "../components/Thanks";

const Welcome = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [showThanks, setShowThanks] = useState(false);

 const clickHandlerAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const clickHandlerThanks = (e) => {
    e.preventDefault(); 

    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 2000);
  };

  return (
    <>
      <main>
        <Hero />
        <WhoWeAre />
        <WeSolving />
        <OurCoreValues />
        <OurWorks clickHandlerAlert={clickHandlerAlert} />
        <WeSolving2 />
        <Hiring clickHandlerAlert={clickHandlerAlert} />
        <Contacts clickHandlerThanks={clickHandlerThanks} />
        <Footer clickHandlerAlert={clickHandlerAlert} />
        <Assistant />
        {showAlert && (
          <Alert
            title="Sorry, this page is unavailable"
            message="Please contact the creator of this test site"
          />
        )}
        {showThanks && (
          <Thanks message="Thank you, we will contact with you soon" />
        )}
      </main>
    </>
  );
};

export default Welcome;
