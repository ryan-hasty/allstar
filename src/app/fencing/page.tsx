import Standard from "@/app/standard-info/page";
import MultipleItems from "@/app/components/slider";
import React from "react";

export default function Fencing(){
    let title = "Fencing Replacements and Repairs"
    let description = "We specialize in providing durable roofing solutions with expert installation " +
        "and meticulous attention to detail. We use hand-driven nails to ensure precise placement, optimal " +
        "sealing, and enhanced durability. This meticulous approach extends lifespan, ensures exceptional " +
        "performance, and adds value to your property. We deliver roofing solutions that stand the test of time."

    const imageUrls = [
        "/assets/fenceImages/fence1.jpg",
        "/assets/fenceImages/fence2.jpg",
        "/assets/fenceImages/fence3.jpg",
        "/assets/fenceImages/fence4.jpg",
        "/assets/fenceImages/fence5.jpg",
        "/assets/fenceImages/fence6.jpg",
        "/assets/fenceImages/fence7.jpg",
        "/assets/fenceImages/fence8.jpg",
        "/assets/fenceImages/fence9.jpg",
        "/assets/fenceImages/fence10.jpg",
        "/assets/fenceImages/fence11.jpg",
        "/assets/fenceImages/fence12.jpg",
        "/assets/fenceImages/fence13.jpg",
        "/assets/fenceImages/fence14.jpg",
        "/assets/fenceImages/fence15.jpg",
        "/assets/fenceImages/fence16.jpg",
        "/assets/fenceImages/fence17.jpg",
        "/assets/fenceImages/fence18.jpg",
        "/assets/fenceImages/fence19.jpg",
        "/assets/fenceImages/fence20.jpg",
        "/assets/fenceImages/fence21.jpg",
        "/assets/fenceImages/fence22.jpg",
        "/assets/fenceImages/fence23.jpg",
        "/assets/fenceImages/fence24.jpg",
        "/assets/fenceImages/fence25.jpg",
        "/assets/fenceImages/fence26.jpg",
        "/assets/fenceImages/fence27.jpg",
        "/assets/fenceImages/fence28.jpg",
        "/assets/fenceImages/fence29.jpg",
        "/assets/fenceImages/fence30.jpg",
        "/assets/fenceImages/fence31.jpg",
        "/assets/fenceImages/fence32.jpg",
        "/assets/fenceImages/fence33.jpg",
        "/assets/fenceImages/fence34.jpg",
        "/assets/fenceImages/fence35.jpg",
        "/assets/fenceImages/fence36.jpg",
        "/assets/fenceImages/fence37.jpg",
        "/assets/fenceImages/fence38.jpg",
        "/assets/fenceImages/fence39.jpg",
        "/assets/fenceImages/fence40.jpg",
        "/assets/fenceImages/fence41.jpg",
        "/assets/fenceImages/fence42.jpg",
        "/assets/fenceImages/fence43.jpg",
        "/assets/fenceImages/fence44.jpg",
        "/assets/fenceImages/fence45.jpg",
        "/assets/fenceImages/fence46.jpg",
        "/assets/fenceImages/fence47.jpg",
        "/assets/fenceImages/fence48.jpg",
        "/assets/fenceImages/fence49.jpg",
        "/assets/fenceImages/fence50.jpg",
        "/assets/fenceImages/fence51.jpg",
        "/assets/fenceImages/fence52.jpg",
        "/assets/fenceImages/fence53.jpg",
        "/assets/fenceImages/fence54.jpg",
        "/assets/fenceImages/fence55.jpg",
        "/assets/fenceImages/fence56.jpg",
        "/assets/fenceImages/fence57.jpg"
    ];

    return (
        <div>
            <Standard title={title} description={description}/>
            <div>
                <MultipleItems images={imageUrls}/>
            </div>
        </div>
    )
}