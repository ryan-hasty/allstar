import Standard from "@/app/components/standard";
import GalleryBox from "@/app/components/gallery-box";
import GeneralDesc from "@/app/components/general-desc";
import "@/app/constants";
import React from "react";
import {
    homePageDescription,
    homePageFencingDescription, homePageFencingTitle,
    homePageRoofingDescription, homePageRoofingTitle, homePageServiceAreaDescription, homePageServiceAreaTitle,
    homePageTitle, navigationElements
} from "@/app/constants";
import Navbar from "@/app/components/navbar";

export default function Home() {

    return (
        <div>
            <Standard title={homePageTitle} description={homePageDescription} />

            <div className="flex flex-col items-start justify-center lg:space-y-20 lg:pt-10 m-7 lg:m-20">
                {/* Roofing Section */}
                <div
                    className="flex flex-col justify-center align-middle items-center lg:flex lg:flex-row lg:items-center lg:space-x-20 w-full mb-10 lg:mb-0">
                    <GalleryBox title={homePageRoofingTitle} imageUrl={"/assets/roofImages/roof1.jpg"} href={"/roofing"}/>
                    <GeneralDesc
                        desc={homePageRoofingDescription}/>
                </div>

                {/* Fencing Section */}
                <div
                    className="flex flex-col justify-center align-middle items-center lg:flex lg:flex-row lg:items-center lg:space-x-20 w-full">
                    <GalleryBox title={homePageFencingTitle} imageUrl={"/assets/fenceImages/fence1.jpg"} href={"/fencing"}/>
                    <GeneralDesc
                        desc={homePageFencingDescription}
                    />
                </div>

                {/* Service Area Section */}
                <div
                    className="flex flex-col justify-center align-middle items-center lg:flex lg:flex-row lg:items-center lg:space-x-20 w-full">
                    <div className="-mt-32 lg:-mt-36">
                        <Standard title={homePageServiceAreaTitle} description={homePageServiceAreaDescription}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
