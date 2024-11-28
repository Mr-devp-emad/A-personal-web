"use client";

import 'animate.css';

const Hero = () => {
    return (
        <>
            {/* Large screen */}
            <div className="lg:block hidden">
                <div className="relative flex justify-around items-center pt-[120px] animate__animated animate__fadeInDown">
                    {/* Left Side */}
                    <div className="relative flex flex-col gap-[40px]">
                        <h1 className="text-2xl">
                            👋 Hi I&apos;m <b className="text-purple-600">Emad Ahmed</b>
                        </h1>
                        <h2 className="text-4xl font-bold">
                            Web <i className="text-blue-600">Developer</i>
                        </h2>

                        {/* Underline */}
                        <span className="h-[2px] w-[150px] bg-red-500 rounded-lg ml-[90px] relative -top-[27px] z-10"></span>
                        <p className="w-[220px] text-center relative -top-[20px] text-[20px]">
                            Transforming ideas into interactive, user-friendly web experiences with creativity and code. Let&apos;s build something remarkable together!
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="relative">
                        <img
                            src="https://cybexsolutions.co/wp-content/uploads/2021/11/3dillustration_29-removebg-preview.png"
                            alt="Character"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>

            {/* Small screens */}
            <div className="lg:hidden block w-screen h-screen bg-gradient-to-b from-black to-blue-500 flex flex-col items-center justify-center text-center p-4">
                {/* Content */}
                <h1 className="text-xl text-white">
                    👋 Hi I&apos;m <b className="text-purple-400">Emad Ahmed</b>
                </h1>
                <h2 className="text-3xl font-bold text-white mt-4">
                    Web <i className="text-blue-300">Developer</i>
                </h2>

                {/* Underline */}
                <div className="h-[2px] w-[100px] bg-red-500 rounded-lg mt-2"></div>

                <p className="text-white text-[18px] mt-4">
                    Transforming ideas into interactive, user-friendly web experiences with creativity and code. Let&apos;s build something remarkable together!
                </p>

                {/* Image */}
                <div className="mt-8">
                    <img
                        src="https://cybexsolutions.co/wp-content/uploads/2021/11/3dillustration_29-removebg-preview.png"
                        alt="Character"
                        className="w-[200px] h-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
