 import leftman from "./../assets/leftman.png";
 import rightman from "./../assets/rightman.png";
const Hiring = () => {
  return (
    <>
      <section className="flex items-center justify-between py-16 overflow-hidden bg-snow">
        <img
          className="hidden h-10  md:block md:h-44 lg:h-64 xl:h-80"
          src={leftman}
          alt="left man"
        />
        <div className="container flex justify-center">
          <div className="flex flex-col justify-center items-center w-[440px] gap-8 md:py-24 lg:py-36">
            <h4 className="text-4xl lg:text-5xl">We are hiring!</h4>
            <p className="text-xl font-medium text-center lg:text-2xl text-coral">
              We&apos;re always looking for talented people to join and help
              build our startups. Check out our current openings
            </p>
            <a
              className="px-6 py-4 mt-3 md:mt-6 font-bold text-white no-underline rounded-full bg-complementary-green hover:-translate-y-0.5 transition-all hover:shadow-md"
              href="#"
            >
              See current openings
            </a>
          </div>
        </div>

        <img
          className="hidden md:block md:h-44 lg:h-64 xl:h-80"
          src={rightman}
          alt="right man"
        />
      </section>
    </>
  );
}

export default Hiring
