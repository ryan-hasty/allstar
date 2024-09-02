'use client'
import React, { useState } from "react";
import Image from "next/image";

interface NavigationList {
    navigationElements: { label: string; href: string }[];
}

export default function Navbar({ navigationElements }: NavigationList) {
    const [isDisplayed, setIsDropdownListDisplayed] = useState(false);

    const handleClick = () => {
        setIsDropdownListDisplayed(!isDisplayed); // Toggle the dropdown visibility
    };

    return (
        <div className="block md:hidden">
            {/* Hamburger Button */}
            <button onClick={handleClick}>
                <Image
                    src={isDisplayed ? "/assets/buttonImages/close.png" : "/assets/buttonImages/hamburger.png"}
                    alt="Menu Button"
                    width={30}
                    height={30}
                    className="fixed top-4 right-4 z-50"
                />
            </button>

            {/* Dropdown Menu */}
            <div
                className={`fixed top-0 right-0 w-full h-full bg-blue-950 text-white z-40 duration-300 transform ${
                    isDisplayed ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col justify-start mt-20 gap-7 p-4 text-4xl">
                    {navigationElements.map((element) => (
                        <li key={element.label}>
                            <a href={element.href} onClick={handleClick} className="hover:text-gray-400">
                                {element.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
