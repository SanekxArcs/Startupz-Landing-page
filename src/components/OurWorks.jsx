
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
    color: "text-darkseagreen",
  },
  {
    title: "Feedback Labs",
    description:
      "Feedback Labs turns feedback into actionable insights for your team.",
    image: img2,
    color: "text-lightsteelblue",
  },
  {
    title: "Codekeeper",
    description:
      "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
    image: img3,
    color: "text-darkcyan",
  },
  {
    title: "LegalSite",
    description:
      "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
    image: img4,
    color: "text-mediumpurple",
  },
];

const OurWorks = () => {
  return (
    <section className="container py-24 md:py-44 xl:px-[8rem] px-4 overflow-hidden">
      <h4 className="text-4xl text-center md:text-5xl">Our works</h4>
      <div className="grid gap-6 pt-16 lg:grid-cols-2">
        {workData.map((work, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-10 shadow-lg rounded-4xl"
          >
            <h5 className={`${work.color} text-3xl`}>{work.title}</h5>
            <p className="text-center md:w-3/4 ">
              <i>{work.description}</i>
            </p>
            <img className="w-full md:w-96" src={work.image} alt="" />
            <a
              className="px-6 py-3 mt-6 font-bold no-underline rounded-full text-complementary-green ring-1 ring-complementary-green hover:-translate-y-0.5 transition-all hover:shadow-md"
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
