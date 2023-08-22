import rocket from "./../assets/subtract.svg";
const Contacts = () => {
  return (
    <>
      <section className="relative text-white bg-secondary-yellow">
        <div className="px-[7.8rem] container pb-16">
          <h4 className="w-2/3 text-6xl font-bold pt-14">
            Are you ready <br /> to board this rocket ship?
          </h4>
          <p className="text-2xl pt-7">Share your excitement with us.</p>
          <div className="pt-20 mt-5 bg-whitesmoke w-128 rounded-2xl">
            <form className="flex flex-col justify-center gap-4 px-10">
              <div className="">
                <input
                  className="w-full px-5 py-3.5 font-medium border-0 shadow-lg text-lg rounded-xl text-whitesmoke"
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name*"
                />
              </div>
              <div className="">
                <input
                  className="w-full px-5 py-3 text-lg font-medium border-0 shadow-lg rounded-xl text-whitesmoke"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email*"
                />
              </div>
              <div className="form-group-input">
                <textarea
                  className="w-full px-5 py-3 text-lg font-roboto border-0 shadow-lg rounded-xl text-whitesmoke"
                  name="message"
                  id="message"
                  cols="50"
                  rows="9"
                  placeholder="Message*"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-2 border-0 mt-2 mb-10 text-lg font-bold text-white no-underline rounded-full bg-darkslategray hover:-translate-y-0.5 transition-all hover:shadow-md"
                >
                  Shoot us a message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="absolute bottom-0 right-52">
          <img className="" src={rocket} alt="logo" />
        </div>
      </section>
    </>
  );
};

export default Contacts;
