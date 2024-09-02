import Standard from "@/app/components/standard";
import MultipleItems from "@/app/components/slider";
import React from "react";
import "@/app/constants"
import {fencingDescription, fencingImageUrls, fencingTitle} from "@/app/constants";

export default function Fencing(){

    return (
        <div>
            <Standard title={fencingTitle} description={fencingDescription}/>
            <div>
                <MultipleItems images={fencingImageUrls}/>
            </div>
        </div>
    )
}