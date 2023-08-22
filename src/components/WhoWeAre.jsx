import questionMark from "./../assets/untitled-artwork-1@2x.png";


const WhoWeAre = () => {
  return (
    <>
      <section className="bg-snow">
        <div className="container relative ">

        <div className="py-32">

          <div className="px-[7.5rem] ">
            <h2 className="text-5xl ">Who we are</h2>
            <p className="pt-8 text-2xl text-coral">
              We create products that have innovation and technology at their
              core. <br /> We value working with talented people that understand
              the possibilities of today.
            </p>
          </div>

          <div className="grid grid-cols-3 px-[7.5rem] pt-20 font-bold text-3xl gap-12">

            <div className="flex flex-col gap-10">
              <p className="underline text-coral underline-offset-[20px]">01</p>
              <p className=" text-darkslategray">
                We develop innovative products, systems and services
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <p className="underline text-coral underline-offset-[26px]">02</p>
              <p>Next we build teams to scale them into companies</p>
            </div>

            <div className="flex flex-col gap-10">
              <p className="underline text-coral underline-offset-[26px]">03</p>
              <p>Each startup solving one problem at a time</p>
            </div>

          </div>

        </div>

        <div className="absolute right-36 top-32">
          <img className="w-20 " src={questionMark} alt="Question Mark" />
        </div>
        </div>

      </section>
    </>
  );
}

export default WhoWeAre
