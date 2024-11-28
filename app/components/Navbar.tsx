"use client";

import Link from "next/link";
import './Navbar.css';
import { useState } from "react";
import { NavItems } from "@/app/components/Items";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Large Screens */}
            <div className="lg:block hidden">
                <div className="relative flex justify-around items-center pt-[20px] pb-[20px]">
                    {/* Logo */}
                    <h1 className="relative uppercase text-4xl font-extrabold">My Portfolio </h1>

                    {/* Navigation Items */}
                    <div className="relative">
                        {NavItems.map((item) => (
                            <Link
                                href={item.Link}
                                key={item.id}
                                className="mx-[20px] hover:text-blue-500 text-[17px]"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* Hire Me Button */}
                    <div>
                        <button className="w-[100px] h-[50px] bg-red-500 rounded-lg text-white hover:bg-red-700 ease-in-out duration-300">
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>

            {/* Small Screens */}
            <div className="lg:hidden block">
                <div className="flex justify-between items-center p-4">
                    {/* Logo */}
                    <h1 className="uppercase text-2xl font-extrabold">MY PORTFOLIO </h1>

                    {/* Hamburger Menu */}
                    <button
                        onClick={toggleMenu}
                        className="text-2xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="dropdown bg-gray-800 text-white p-4 w-screen text-center">
                        {NavItems.map((item) => (
                            <Link
                                href={item.Link}
                                key={item.id}
                                className="block my-2 hover:text-blue-400"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <button className="mt-4 w-full h-[50px] bg-red-500 rounded-lg text-white hover:bg-red-700 ease-in-out duration-300">
                            Hire Me
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
