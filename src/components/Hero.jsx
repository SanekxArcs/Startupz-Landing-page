import logo from "./../assets/group-15.svg"
import heroArt from "./../assets/untitled-artwork-7-1@2x.png";


const Hero = () => {
  return (
    <>
      <section className="container relative h-[82dvh]">
        <header className="flex justify-between px-[7.5rem] pt-8">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <nav className="flex items-center mb-3 font-normal gap-14 text-darkslategray">
            <a className="no-underline text-darkslategray" href="http://">
              Startups
            </a>
            <a className="no-underline text-darkslategray" href="http://">
              Contact
            </a>
            <a
              href="http://"
              className="px-10 py-3 font-bold no-underline bg-white rounded-full ring-1 ring-complementary-green text-complementary-green"
            >
              Work with us!
            </a>
          </nav>
        </header>

        <div className="flex flex-col items-start px-[7.5rem] pt-32">
          <h1 className="m-0 font-bold text-darkslategray text-[85px] leading-[85px] font-custom">
            We Create <br /> Startups.
          </h1>
          <p className="m-0 mt-8 text-2xl text-coral">
            We are startup studio that develops and launches new companies.
          </p>
          <a className="px-6 py-4 mt-6 font-bold text-white no-underline rounded-full bg-complementary-green">
            See our works
          </a>
        </div>

        <div className="absolute bottom-0 right-0 ">
          <img className="w-[44rem]" src={heroArt} alt="" />
        </div>
      </section>
    </>
  );
}

export default Hero
