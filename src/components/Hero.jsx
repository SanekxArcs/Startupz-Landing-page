import logo from "./../assets/group-15.svg"
import heroArt from "./../assets/untitled-artwork-7-1@2x.png";


const Hero = () => {
  return (
    <>
      <section className=" relative h-[82dvh]">
        <div className="container">
          <header className="flex justify-between px-[8rem] pt-8">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <nav className="flex items-center mb-3 font-normal gap-12 text-darkslategray">
              <a
                className="no-underline text-darkslategray hover:text-coral hover:font-medium transition-all"
                href="http://"
              >
                Startups
              </a>
              <a
                className="no-underline text-darkslategray hover:text-coral hover:font-medium transition-all"
                href="http://"
              >
                Contact
              </a>
              <a
                href="http://"
                className="px-10 py-3 font-bold no-underline bg-white rounded-full ring-1 ring-complementary-green text-complementary-green tracking-wider hover:-translate-y-0.5 transition-all hover:shadow-md"
              >
                Work with us!
              </a>
            </nav>
          </header>

          <div className="flex flex-col items-start px-[7.5rem] pt-32">
            <h1 className="m-0 font-bold text-darkslategray text-[85px] leading-[85px] font-custom tracking-tight">
              We Create <br /> Startups.
            </h1>
            <p className="m-0 mt-8 text-2xl text-coral">
              We are startup studio that develops and launches new companies.
            </p>
            <a className="px-6 py-4 mt-6 font-bold text-white no-underline rounded-full bg-complementary-green tracking-wider hover:-translate-y-0.5 transition-all hover:shadow-md">
              See our works
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 -z-10">
          <img className="w-[50rem]" src={heroArt} alt="" />
        </div>
      </section>
    </>
  );
}

export default Hero
