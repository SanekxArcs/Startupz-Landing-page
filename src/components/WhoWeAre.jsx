import questionMark from "./../assets/untitled-artwork-1@2x.png";


const WhoWeAre = () => {
  return (
    <>
      <section className="overflow-hidden bg-snow">
        <div className="container relative ">
          <div className="py-32">
            <div className="xl:px-[8rem] px-4 ">
              <h2 className="text-4xl md:text-5xl ">Who we are</h2>
              <p className="pt-8 text-lg md:text-xl lg:text-2xl text-coral">
                We create products that have innovation and technology at their
                core. <br /> We value working with talented people that
                understand the possibilities of today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 xl:px-[8rem] px-4 pt-20 font-bold text-2xl lg:text-3xl gap-12">
              <div className="flex flex-col gap-10">
                <p className=" text-coral relative">
                  01
                  <div className="w-[50px] absolute left-0  -bottom-[20px] h-[2px] bg-darkslategray/50"></div>
                </p>
                <p className=" text-darkslategray">
                  We develop innovative products, systems and services
                </p>
              </div>

              <div className="flex flex-col gap-10">
                <p className=" text-coral relative">
                  02{" "}
                  <div className="w-[50px] absolute left-0 -bottom-[20px] h-[2px] bg-darkslategray/50"></div>
                </p>
                <p>Next we build teams to scale them into companies</p>
              </div>

              <div className="flex flex-col gap-10">
                <p className=" text-coral relative">
                  03
                  <div className="w-[50px] absolute left-0 -bottom-[20px] h-[2px] bg-darkslategray/50"></div>
                </p>
                <p>Each startup solving one problem at a time</p>
              </div>
            </div>
          </div>

          <div className="absolute right-16 xl:right-36 top-16 xl:top-32">
            <img className="w-20 " src={questionMark} alt="Question Mark" />
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoWeAre
