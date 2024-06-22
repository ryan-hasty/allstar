import Standard from "@/app/standard-info/page";
import GalleryBox from "@/app/components/gallery-box";
import GeneralDesc from "@/app/components/general-desc";
import React from "react";

export default function Home() {
    let title = "Allstar Roofing and Fencing";
    let description =
        "At Allstar Roofing and Fencing, our mission is to provide dependable roof and fence installation and repair\n" +
        "services. With 20 years of experience, we are dedicated to delivering the highest quality workmanship and\n" +
        "ensuring complete customer satisfaction.";

    return (
        <div>
            <Standard title={title} description={description} />

            <div className="flex flex-col items-start justify-center lg:space-y-20 lg:pt-10 m-7 lg:m-20">
                {/* Roofing Section */}
                <div
                    className="flex flex-col justify-center align-middle items-center lg:flex lg:flex-row lg:items-center lg:space-x-20 w-full">
                    <GalleryBox title={"ROOFING"} imageUrl={"/assets/roofImages/roof1.jpg"} href={"/roofing"}/>
                    <GeneralDesc
                        desc={
                            "We specialize in providing durable roofing solutions" +
                            " with expert installation and meticulous attention to detail. " +
                            "We use hand-driven nails to ensure precise placement," +
                            " optimal sealing, and enhanced durability. This meticulous approach extends lifespan, " +
                            "ensures exceptional performance, and adds value to your property. We deliver roofing " +
                            "solutions that stand the test of time."
                        }/>
                </div>

                {/* Fencing Section */}
                <div
                    className="flex flex-col justify-center align-middle items-center lg:flex lg:flex-row lg:items-center lg:space-x-20 w-full">
                    <GalleryBox title={"FENCING"} imageUrl={"/assets/fenceImages/fence1.jpg"} href={"/fencing"}/>
                    <GeneralDesc
                        desc={
                            "We provide high-quality, durable, and stylish fencing solutions tailored to your needs. " +
                            "Our expert team ensures professional installation, compliance with local regulations, " +
                            "and a range of customizable designs. We focus on using premium materials for " +
                            "low-maintenance and long-lasting fences, backed by comprehensive warranties. " +
                            "Enhance your property's security, privacy, and curb appeal with Allstar's " +
                            "exceptional fencing services."
                        }
                    />
                </div>

                {/* Service Area Section */}
                <div
                    className="flex flex-col justify-center align-middle items-center lg:flex lg:flex-row lg:items-center lg:space-x-20 w-full">
                    <div className="-mt-52 lg:-mt-40">
                        <Standard title={"Service Area"} description={"Our extensive reach means we're always " +
                            "nearby, ready to assist with prompt, reliable, and professional service. We understand " +
                            "the unique needs of our local communities and are dedicated to exceeding expectations, " +
                            "providing comprehensive solutions that extend far beyond Baytown."}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
