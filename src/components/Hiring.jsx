 import leftman from "./../assets/leftman.png";
 import rightman from "./../assets/rightman.png";
const Hiring = () => {
  return (
    <>
      <section className="container flex items-center justify-between py-16 ring-1">
        <img className="w-80" src={leftman} alt="left man" />
        <div className="flex flex-col justify-center items-center w-[440px] gap-8">
          <h4 className="text-5xl">We are hiring!</h4>
          <p className="text-2xl font-medium text-center text-coral">
            We&apos;re always looking for talented people to join and help build
            our startups. Check out our current openings
          </p>
          <a
            className="px-6 py-4 mt-6 font-bold text-white no-underline rounded-full bg-complementary-green"
            href="#"
          >
            See current openings
          </a>
        </div>
        <img className="w-80" src={rightman} alt="right man" />
      </section>
    </>
  );
}

export default Hiring
