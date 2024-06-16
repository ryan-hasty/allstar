import Image from "next/image";
import React from "react";

export default function About(){

    let title = "Who We Are"

    let p1 = "Welcome to our family business! At Allstar, we’re more than just a company – we’re a family. " +
        "Our story began with a shared dream and a commitment to hard work, founded by Aj and Jennifer McGee right here " +
        "in the heart of Texas. What started as a small, local endeavor, driven by a passion for excellence and a " +
        "dedication to our community, has grown into a trusted name in roofing and fencing."

    let p2 = "Allstar is family-owned and operated, with each member bringing their unique skills " +
        "and a shared sense of purpose. Every day, we work side by side, embodying the values our parents instilled in " +
        "us: integrity, respect, and unwavering commitment. We carry these principles into every roofing and fencing " +
        "project we undertake, the Texas way."

/*    let p3 = "We believe in treating our clients like family, ensuring that everyone that comes our way " +
        "feels welcomed, heard, and valued."*/

    let p3 = "From small repairs to major roofing and fencing projects, we approach each task with the same " +
        "care and attention to detail that we would for our own home. Our legacy is built on the trust and satisfaction " +
        "of our clients, and we take immense pride in the relationships we’ve built over the years."

    let p4 = "At Allstar, family is at the heart of everything we do. We invite " +
        "you to become a part of our story, knowing that when you work with us, you’re not just a client; you’re family."

    let p5 = "Welcome to Allstar – where our family takes care of yours, the Texas way."

    return (
        <>
            <div className="min-w-full">
                <div className="flex justify-center">
                    <div className="text-3xl text-[#555555] mt-56 max-w-5xl md:max-w-none text-center">
                        <div className="pb-10 text-6xl font-bold -mb-5 text-[#0F2E6C]">
                            {title}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-20">
                    <div
                        className="text-xl text-[#555555] text-left mt-12 max-w-32 max-h-32 md:max-w-3xl hidden md:block">
                        <p className="mb-10">{p1}</p>
                        <p className="mb-10">{p2}</p>
                        <p className="mb-10">{p3}</p>
                        <p className="mb-10">{p4}</p>
                        <p className="mb-10">{p5}</p>
                    </div>
                    <div className="flex flex-col items-center sm:hidden">
                        <Image width={800} height={800} src="/assets/tempFamilyPhoto.jpg" alt="Family Photo"
                               className="max-w-sm mt-8"/>
                        <div
                            className="text-xl text-[#555555] text-left mt-12 max-w-96 md:max-w-3xl">
                            <p className="mb-10">{p1}</p>
                            <p className="mb-10">{p2}</p>
                            <p className="mb-10">{p3}</p>
                            <p className="mb-10">{p3}</p>
                            <p className="mb-10">{p5}</p>
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
