
import img1 from "./../assets/img1.png";
import img2 from "./../assets/img2.png";
import img3 from "./../assets/img3.png";
import img4 from "./../assets/img4.png";

const workData = [
  {
    title: "Tolq",
    description:
      "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
    image: img1,
  },
  {
    title: "Feedback Labs",
    description:
      "Feedback Labs turns feedback into actionable insights for your team.",
    image: img2,
  },
  {
    title: "Codekeeper",
    description:
      "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
    image: img3,
  },
  {
    title: "LegalSite",
    description:
      "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
    image: img4,
  },
];

const OurWorks = () => {
  return (
    <section className="container py-44 px-[7.5rem]">
      <h4 className="text-5xl text-center">Our works</h4>
      <div className="grid grid-cols-2 gap-5 pt-16">
        {workData.map((work, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-10 shadow-md rounded-2xl"
          >
            <h5 className="text-3xl">{work.title}</h5>
            <p className="w-3/4 text-center te">
              <i>{work.description}</i>
            </p>
            <img className="w-96" src={work.image} alt="" />
            <a
              className="px-6 py-3 mt-6 font-bold no-underline rounded-full text-complementary-green ring-1 rind-complementary-green"
              href=""
            >
              More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;
