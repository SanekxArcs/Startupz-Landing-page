import leftHand from "./../assets/untitled-artwork-12-11@2x.png";
import rightHand from "./../assets/untitled-artwork-12-1@2x.png";

const WeSolving = () => {
  return (
    <>
      <section className="container flex items-center justify-center gap-10 py-44">
        <div className="flex items-center justify-center gap-10">
          <img className="w-14 " src={leftHand} alt="left hand ok" />
          <h3 className="text-4xl text-coral">We love solving problems!</h3>
          <img className="w-14 " src={rightHand} alt="right hand ok" />
        </div>
      </section>
    </>
  );
};

export default WeSolving;
