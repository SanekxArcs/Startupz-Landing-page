import PropTypes from 'prop-types';

 import leftman from "./../assets/leftman.png";
 import rightman from "./../assets/rightman.png";

 
const Hiring = ({ clickHandlerAlert }) => {
  return (
    <>
      <section className="flex items-center justify-between py-16 overflow-hidden bg-snow">
        <img
          className="hidden h-10 md:block md:h-44 lg:h-64 xl:h-80"
          src={leftman}
          alt="Man on the left side of the section"
        />
        <div className="container flex justify-center">
          <div className="flex flex-col justify-center items-center w-[440px] gap-8 md:py-24 lg:py-36">
            <h4 className="text-4xl lg:text-5xl">We are hiring!</h4>
            <p className="text-xl font-medium text-center lg:text-2xl text-coral">
              We&apos;re always looking for talented people to join and help
              build our startups. Check out our current openings
            </p>
            <button
              onClick={clickHandlerAlert}
              className="border-0 px-6 py-4 mt-3 md:mt-6 font-bold text-white no-underline rounded-full bg-complementary-green hover:-translate-y-0.5 transition-all hover:shadow-md"
            >
              See current openings
            </button>
          </div>
        </div>

        <img
          className="hidden md:block md:h-44 lg:h-64 xl:h-80"
          src={rightman}
          alt="Man on the right side of the section"
        />
      </section>
    </>
  );
};
Hiring.propTypes = {
  clickHandlerAlert: PropTypes.func.isRequired,
};

export default Hiring
