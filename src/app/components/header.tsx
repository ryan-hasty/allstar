import Image from "next/image";
import Link from "next/link";
import React from "react";
import {allStarPhoneNumber} from "@/app/constants";


export default function Header() {

    return (
        <div className="fixed top-0 min-w-full max-h-40 xl:max-h-60 xl:max-w-60 bg-[#FFFFFF] z-20">
            <div className="flex min-w-full items-center bg-[#FFFFFF]">
                {/* Can change w-60 (try removing to see) on below line to increase size of nav bar at top*/}
                <Image width={350} height={350} src="/assets/allstar-logo.jpg" alt="Allstar Logo" className="w-60 h-auto" priority={true}></Image>
                <div className="z-50 h-1 md:h-2 bg-[#F50000] mr-10 w-5/12 md:w-10/12">
                    <div className="hidden md:block">
                        <ul className="z-40 flex justify-start text-nowrap -mt-9 ml-16 xl:top-20 about-line-position text-2xl gap-20 w-.75 font-sans text-[#0F2E6C]">
                            <li>
                                <Link href={"/home"} className="hover:text-[#F50000]">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={"/roofing"} className="hover:text-[#F50000]">
                                    Roofing
                                </Link>
                            </li>
                            <li>
                                <Link href={"/fencing"} className="hover:text-[#F50000]">
                                    Fencing
                                </Link>
                            </li>
                            <li>
                                <Link href={"/about"} className="hover:text-[#F50000]">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href={"/contact"} className="hover:text-[#F50000]">
                                    Contact
                                </Link>
                            </li>
                            <li className="ml-auto text-2xl text-[#0F2E6C] font-bold">
                                GIVE US A CALL!
                            </li>
                            <li className="mr-14 -ml-14 text-[#0F2E6C] font-bold">
                                <a href="tel:832-885-0753" className="hover:text-[#F50000]">
                                    {allStarPhoneNumber}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}