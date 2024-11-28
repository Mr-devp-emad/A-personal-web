"use client";

const Cards = () => {
  return (
    <>
      {/* Large Screens */}
      <div className="lg:block hidden lg:w-full ">
        <div className="flex gap-[40px] relative justify-end w-full">
          {/* Card 1 */}
          <div className="Cards w-[14vw] bg-white text-black rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="p-4 text-center">
              <h1 className="font-bold text-green-600">UI/UX</h1>
              <p className="text-[15px]">
                Transforming ideas into visually stunning and intuitive designs,
                I focus on crafting user interfaces (UI) that captivate and user
                experiences (UX) that delight. My goal is to ensure every
                interaction feels seamless and engaging.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="Cards w-[14vw] bg-white text-black rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="p-4 text-center">
              <h1 className="font-bold text-green-600">Responsive Design</h1>
              <p className="text-[15px]">
                Ensuring websites look and perform flawlessly on all devices.
                From desktops to mobile screens, I create adaptable layouts for
                a consistent user experience.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="Cards w-[14vw] bg-white text-black rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="p-4 text-center">
              <h1 className="font-bold text-green-600">Performance Optimization</h1>
              <p className="text-[15px]">
                Delivering fast and efficient web applications by optimizing
                code, assets, and performance to enhance user satisfaction and
                engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screens */}
      <div className="lg:hidden block">
        <div className="flex flex-col gap-[20px] items-center mt-[40px] px-4">
          {/* Card 1 */}
          <div className="Cards w-[90%] bg-white text-black rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="p-4 text-center">
              <h1 className="font-bold text-green-600">UI/UX</h1>
              <p className="text-[15px]">
                Transforming ideas into visually stunning and intuitive designs,
                I focus on crafting user interfaces (UI) that captivate and user
                experiences (UX) that delight. My goal is to ensure every
                interaction feels seamless and engaging.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="Cards w-[90%] bg-white text-black rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="p-4 text-center">
              <h1 className="font-bold text-green-600">Responsive Design</h1>
              <p className="text-[15px]">
                Ensuring websites look and perform flawlessly on all devices.
                From desktops to mobile screens, I create adaptable layouts for
                a consistent user experience.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="Cards w-[90%] bg-white text-black rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="p-4 text-center">
              <h1 className="font-bold text-green-600">Performance Optimization</h1>
              <p className="text-[15px]">
                Delivering fast and efficient web applications by optimizing
                code, assets, and performance to enhance user satisfaction and
                engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
