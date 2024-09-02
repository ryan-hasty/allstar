import Image from "next/image";
import React from "react";
import {aboutTitle, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5} from "@/app/constants";

export default function About(){
    return (
        <>
            <div className="min-w-full">
                <div className="flex justify-center">
                    <div className="text-[#555555] mt-56 max-w-5xl md:max-w-none text-center">
                        <div className="pb-10 text-6xl font-bold -mb-5 text-[#0F2E6C]">
                            {aboutTitle}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-20">
                    <div
                        className="hidden md:block text-xl text-[#555555] text-left mt-12 max-w-32 max-h-32 md:max-w-3xl">
                        <p className="mb-10">{paragraph1}</p>
                        <p className="mb-10">{paragraph2}</p>
                        <p className="mb-10">{paragraph3}</p>
                        <p className="mb-10">{paragraph4}</p>
                        <p className="mb-10">{paragraph5}</p>
                    </div>
                    <div className="flex flex-col items-center sm:hidden">
                        <Image width={800} height={800} src="/assets/tempFamilyPhoto.jpg" alt="Family Photo"
                               className="max-w-80 mt-8"/>
                        <div
                            className="text-xl text-[#555555] text-center mt-12 max-w-80 md:max-w-3xl">
                            <p className="mb-10">{paragraph1}</p>
                            <p className="mb-10">{paragraph2}</p>
                            <p className="mb-10">{paragraph3}</p>
                            <p className="mb-10">{paragraph4}</p>
                            <p className="mb-10">{paragraph5}</p>
                        </div>
                    </div>

                    <div className="sm:flex hidden">
                        <Image width={625} height={625} src="/assets/tempFamilyPhoto.jpg" alt="Family Photo"
                               className="ml-24 mt-14 max-w-sm md:max-w-none md:max-h-none"/>
                    </div>
                </div>
            </div>
        </>
    )
}
