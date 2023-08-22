import Hero from "../components/Hero";
import OurCoreValues from "../components/OurCoreValues";
import WeSolving from "../components/WeSolving";
import WeSolving2 from "../components/WeSolving2";
import WhoWeAre from "../components/WhoWeAre";
import OurWorks from "../components/OurWorks";
import Hiring from "../components/Hiring";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const Welcome = () => {

  return (
    <>
      <main>
        <Hero/>
        <WhoWeAre/>
        <WeSolving/>
        <OurCoreValues/>
        <OurWorks/>
        <WeSolving2/>
        <Hiring/>
        <Contacts/>
        <Footer/>
      </main>
    </>
  );
};

export default Welcome;
