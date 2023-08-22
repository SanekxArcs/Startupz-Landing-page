import logo from "./../assets/group-15.svg";
import twitter from "./../assets/Vector.svg";
import Linkedin from "./../assets/Linkedin.svg";
import instagram from "./../assets/instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="container px-[8rem] py-24 grid grid-cols-4">
        <div className="flex flex-col justify-between items-start h-44">
          <img className="h-10" src={logo} alt="logo" />
          <p className=" text-lg text-gray-400">
            © 2020 Startupz. <br /> All rights reserved.
          </p>
        </div>
        <div className=" flex flex-col pl-28 pt-3">
          <h5 className="text-lg font-medium">Companies</h5>
          <div className=" flex flex-col no-underline  text-complementary-green gap-4 pt-6 font-medium ">
            <a
              className="hover:text-coral hover:font-medium transition-all"
              href=""
            >
              Tolq
            </a>
            <a
              className="hover:text-coral hover:font-medium transition-all"
              href=""
            >
              LegalSite
            </a>
            <a
              className="hover:text-coral hover:font-medium transition-all"
              href=""
            >
              Codekeeper
            </a>
            <a
              className="hover:text-coral hover:font-medium transition-all"
              href=""
            >
              Feedback Labs
            </a>
          </div>
        </div>
        <div className="flex flex-col pt-3 pl-24">
          <h5 className="text-lg font-medium">Contact</h5>
          <div className="flex flex-col">
            <p className="font-light pt-3 text-gray-400">
              <i>
                World Trade Center - The Hague Prinses Margrietplantsoen 33{" "}
                <br /> 2595 AM The Hague <br /> The Netherlands
              </i>
            </p>
            <a
              className="text-complementary-green font-medium pt-5 hover:text-coral hover:font-medium transition-all"
              href=""
            >
              Send us an email
            </a>
          </div>
        </div>
        <div className=" pl-52 pt-3">
          <h5 className="text-lg font-medium">Follow us</h5>
          <div className="flex flex-col gap-4 pt-3">
            <a className="hover:invert  transition-all" href="http://">
              <img src={twitter} alt="tweeter" />
            </a>
            <a className="hover:invert  transition-all" href="http://">
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a className="hover:invert  transition-all" href="http://">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
