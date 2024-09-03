import React from "react";
import Standard from "@/app/components/standard";
import {roofingDescription, roofingImageUrls, roofingTitle} from "@/app/constants";
import ImageGrid from "@/app/components/image-grid";

export default function Roofing(){
    return (
        <div>
            <Standard title={roofingTitle} description={roofingDescription}/>
            <div>
                <ImageGrid imageUrls={roofingImageUrls}/>
            </div>
        </div>
    )
}