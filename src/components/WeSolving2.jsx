import leftHand from "./../assets/untitled-artwork-12-11@2x.png";
import rightHand from "./../assets/untitled-artwork-12-1@2x.png";

const WeSolving2 = () => {
  return (
    <>
      <section className="container flex items-center justify-center gap-10 pb-44">
        <div className="flex items-center justify-center gap-10">
          <img className="w-14 " src={leftHand} alt="left hand ok" />
          <h3 className="text-4xl w-[800px] text-coral text-center">
            Startups create a world that actually is better. Any problem that
            can be solved, will be solved by a startup, and that is a huge
            opportunity.
          </h3>
          <img className="w-14 " src={rightHand} alt="right hand ok" />
        </div>
      </section>
    </>
  );
};

export default WeSolving2;
