import Standard from "@/app/components/standard";
import React from "react";
import "@/app/constants"
import {fencingDescription, fencingImageUrls, fencingTitle} from "@/app/constants";
import ImageGrid from "@/app/components/image-grid";

export default function Fencing(){

    return (
        <div>
            <Standard title={fencingTitle} description={fencingDescription}/>
            <div>
                <ImageGrid imageUrls={fencingImageUrls}/>
            </div>
        </div>
    )
}