'use client';
import React, {useState} from 'react';
import ContactForm from '@/app/components/form';
import Standard from "@/app/components/standard";
import Image from "next/image";
import {allStarEmailAddress, allStarFacebookHref, allStarPhoneNumber, mailToUrl} from "@/app/constants";

export default function Contact() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div className="max-w-5xl mx-auto py-8">
            <Standard title={"Contact Allstar"} />
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 sm:mt-8 lg:ml-32">
                <div className="flex flex-col text-2xl gap-y-4 font-semibold text-center lg:text-left">
                    <div className="mb-6 lg:mt-10">
                        <div className="sm:text-3xl text-2xl font-bold text-[#0F2E6C]">
                            CALL NOW!
                        </div>
                        <div>
                            <a href="tel:832-885-0753" className="text-[#555555] hover:text-[#F50000] text-2xl font-bold">
                                {allStarPhoneNumber}
                            </a>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="text-3xl font-bold text-[#0F2E6C]">Email:</div>
                        <a
                            href={mailToUrl}
                            target="_blank"
                            className={`text-[#555555] hover:text-[#F50000] ${isClicked ? 'text-[#F50000]' : ''}`}
                            onClick={handleClick}>
                            {allStarEmailAddress}
                        </a>

                    </div>
                    <div className="mt-5 flex">
                        <a
                            href={allStarFacebookHref}
                            target={"_blank"}
                            className="bg-white">
                            <Image src="/assets/miscImages/facebook-logo.svg" alt="facebook-logo" width={40}
                                   height={40}></Image>
                        </a>
                    </div>
                </div>
                <div className="w-full max-w-xs sm:max-w-xl">
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}
