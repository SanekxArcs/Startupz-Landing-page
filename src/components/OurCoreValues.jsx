import lamp from "./../assets/untitled-artwork-2@2x.png";

const OurCoreValues = () => {
  return (
    <>
      <section className="bg-snow">
        <div className="container relative py-32 px-[7.5rem]">
          <h2 className="text-5xl">Our core values</h2>
          <div className="grid grid-cols-2 gap-12 pt-32 text-3xl font-bold">
            <div className="">
              <p className="text-coral">01. Innovation</p>
              <p className="pt-12">
                Startupz operates where entrepreneurship and technology
                intersect. We design solutions and turn them into businesses
                models.
              </p>
            </div>
            <div className="">
              <p className="text-coral">02. People</p>
              <p className="pt-12">
                Talent is what enable us to create great companies.
              </p>
            </div>
          </div>
          <div className="absolute right-36 top-28">
            <img className="w-24" src={lamp} alt="lamp Mark" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCoreValues;
