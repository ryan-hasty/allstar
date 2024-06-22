import Standard from "@/app/standard-info/page";
import React from "react";
import MultipleItems from "@/app/components/slider";

export default function Roofing(){
    let title = "Roofing Replacements and Repairs"
    let description = "We specialize in providing durable roofing solutions with expert installation and " +
        "meticulous attention to detail. We use hand-driven nails to ensure precise placement," +
        " optimal sealing, and enhanced durability. This meticulous approach extends lifespan, " +
        "ensures exceptional performance, and adds value to your property. We deliver roofing solutions " +
        "that stand the test of time."

    const imageUrls = [
        "/assets/roofImages/roof1.jpg",
        "/assets/roofImages/roof2.jpg",
        "/assets/roofImages/roof3.jpg",
        "/assets/roofImages/roof4.jpg",
        "/assets/roofImages/roof5.jpg",
        "/assets/roofImages/roof6.jpg",
        "/assets/roofImages/roof7.jpg",
        "/assets/roofImages/roof8.jpg",
        "/assets/roofImages/roof9.jpg",
        "/assets/roofImages/roof10.jpg",
        "/assets/roofImages/roof11.jpg",
        "/assets/roofImages/roof12.jpg",
        "/assets/roofImages/roof13.jpg",
        "/assets/roofImages/roof14.jpg",
        "/assets/roofImages/roof15.jpg",
        "/assets/roofImages/roof16.jpg",
        "/assets/roofImages/roof17.jpg",
        "/assets/roofImages/roof18.jpg",
        "/assets/roofImages/roof19.jpg",
        "/assets/roofImages/roof20.jpg",
        "/assets/roofImages/roof21.jpg",
        "/assets/roofImages/roof22.jpg",
        "/assets/roofImages/roof23.jpg",
        "/assets/roofImages/roof24.jpg",
        "/assets/roofImages/roof25.jpg",
        "/assets/roofImages/roof26.jpg",
        "/assets/roofImages/roof27.jpg",
        "/assets/roofImages/roof28.jpg",
        "/assets/roofImages/roof29.jpg",
        "/assets/roofImages/roof30.jpg",
        "/assets/roofImages/roof31.jpg",
        "/assets/roofImages/roof32.jpg",
        "/assets/roofImages/roof33.jpg",
        "/assets/roofImages/roof34.jpg",
        "/assets/roofImages/roof35.jpg",
        "/assets/roofImages/roof36.jpg",
        "/assets/roofImages/roof37.jpg",
        "/assets/roofImages/roof38.jpg",
        "/assets/roofImages/roof39.jpg",
        "/assets/roofImages/roof40.jpg",
        "/assets/roofImages/roof41.jpg",
        "/assets/roofImages/roof42.jpg",
        "/assets/roofImages/roof43.jpg",
        "/assets/roofImages/roof44.jpg",
        "/assets/roofImages/roof45.jpg",
        "/assets/roofImages/roof46.jpg",
        "/assets/roofImages/roof47.jpg",
        "/assets/roofImages/roof48.jpg",
        "/assets/roofImages/roof49.jpg",
        "/assets/roofImages/roof50.jpg",
        "/assets/roofImages/roof51.jpg",
        "/assets/roofImages/roof52.jpg",
        "/assets/roofImages/roof53.jpg",
        "/assets/roofImages/roof54.jpg",
        "/assets/roofImages/roof55.jpg",
        "/assets/roofImages/roof56.jpg",
        "/assets/roofImages/roof57.jpg",
        "/assets/roofImages/roof58.jpg",
        "/assets/roofImages/roof59.jpg"
    ];

    return (
        <div>
            <Standard title={title} description={description}/>
            <div className="flex justify-center items-center text-3xl">
                <MultipleItems images={imageUrls} />
            </div>
        </div>
    )
}