import Cards from "./Cards";

const About = () => {
  return (
    <>
      {/* Large Screens */}
      <div className="lg:block hidden">
        <div className="relative bg-slate-400 flex flex-col items-center p-4 h-[600px]">
          {/* About Me Heading */}
          <div className="relative text-center w-full">
            <h1 className="text-4xl font-bold font-serif">
              <u className="text-red-500">
                <i className="text-black">About Me</i>
              </u>
            </h1>
          </div>

          {/* Quote */}
          <div className="w-full flex justify-center mt-[20px]">
            <p className="text-[20px] text-gray-700 text-center">
              Crafting sleek, responsive, and user-centric web interfaces with modern technologies.
            </p>
          </div>

          {/* Work Experience */}
          <div className="flex items-center w-full justify-start mt-[40px] gap-10">
            <div className="text-center">
              <h2 className="text-6xl font-extrabold text-gray-900">3+</h2>
              <p className="text-2xl mt-[20px] text-gray-800 max-w-[400px]">
                I am a dedicated Frontend Developer with a passion for crafting seamless user experiences. My expertise lies in modern web technologies, including HTML, CSS, JavaScript, TypeScript, and Next.js.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="relative -mt-[200px] left-[100px]">
            <Cards />
          </div>
        </div>
      </div>

      {/* Small Screens */}
      <div className="lg:hidden block">
        <div className="relative bg-slate-300 flex flex-col items-center py-6 px-4">
          {/* About Me Heading */}
          <h1 className="text-3xl font-bold font-serif text-center">
            <u className="text-red-500">
              <i className="text-black">About Me</i>
            </u>
          </h1>

          {/* Quote */}
          <p className="text-lg text-gray-700 text-center mt-4">
            Crafting sleek, responsive, and user-centric web interfaces with modern technologies.
          </p>

          {/* Work Experience */}
          <div className="mt-6">
            <h2 className="text-5xl font-extrabold text-gray-900 text-center">3+</h2>
            <p className="text-lg mt-4 text-gray-800 text-center max-w-[350px]">
              I am a dedicated Frontend Developer with a passion for crafting seamless user experiences. My expertise lies in modern web technologies, including HTML, CSS, JavaScript, TypeScript, and Next.js.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-6 w-full">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
