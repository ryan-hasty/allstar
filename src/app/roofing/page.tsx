import React from "react";
import Standard from "@/app/components/standard";
import MultipleItems from "@/app/components/slider";
import {roofingDescription, roofingImageUrls, roofingTitle} from "@/app/constants";

export default function Roofing(){
    return (
        <div>
            <Standard title={roofingTitle} description={roofingDescription}/>
            <div className="flex justify-center items-center text-3xl">
                <MultipleItems images={roofingImageUrls} />
            </div>
        </div>
    )
}