import logo from "./../assets/group-15.svg";
import twitter from "./../assets/Vector.svg";
import Linkedin from "./../assets/Linkedin.svg";
import instagram from "./../assets/instagram.svg";

const Footer = () => {
  return (
    <>
      <footer
        className="container xl:px-[8rem] px-4 py-24 grid md:grid-cols-2 lg:flex lg:justify-between gap-5 overflow-hidden"
        id="Contact"
      >
        <div className="flex flex-col items-start justify-between row-span-3 h-44 gl:h-44">
          <img className="h-10" src={logo} alt="logo" />
          <p className="text-lg text-gray-400 ">
            © 2020 Startupz. <br /> All rights reserved.
          </p>
        </div>
        <div className="flex flex-col pt-3 xl:pl-28">
          <h5 className="text-lg font-medium">Companies</h5>
          <div className="flex flex-col gap-4 pt-6 font-medium no-underline text-complementary-green">
            <a
              className="transition-all hover:text-coral hover:font-medium"
              href=""
            >
              Tolq
            </a>
            <a
              className="transition-all hover:text-coral hover:font-medium"
              href=""
            >
              LegalSite
            </a>
            <a
              className="transition-all hover:text-coral hover:font-medium"
              href=""
            >
              Codekeeper
            </a>
            <a
              className="transition-all hover:text-coral hover:font-medium"
              href=""
            >
              Feedback Labs
            </a>
          </div>
        </div>
        <div className="flex flex-col pt-3 xl:pl-24">
          <h5 className="text-lg font-medium">Contact</h5>
          <div className="flex flex-col">
            <p className="pt-3 font-light text-gray-400">
              <i>
                World Trade Center - The Hague <br /> Prinses Margrietplantsoen
                33 <br /> 2595 AM The Hague <br /> The Netherlands
              </i>
            </p>
            <a
              className="pt-5 font-medium transition-all text-complementary-green hover:text-coral hover:font-medium"
              href=""
            >
              Send us an email
            </a>
          </div>
        </div>
        <div className="pt-3 xl:pl-48">
          <h5 className="text-lg font-medium">Follow us</h5>
          <div className="flex flex-col gap-4 pt-3">
            <a className="transition-all hover:invert" href="http://">
              <img src={twitter} alt="tweeter" />
            </a>
            <a className="transition-all hover:invert" href="http://">
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a className="transition-all hover:invert" href="http://">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
