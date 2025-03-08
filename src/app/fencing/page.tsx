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

/*
import Standard from "@/app/components/standard";
import React from "react";
import "@/app/constants"
import {fencingDescription, fencingImageUrls, fencingTitle} from "@/app/constants";
import ImageGrid from "@/app/components/image-grid";

import fence1 from '../../../public/assets/fenceImages/fence1.jpg'
import fence2 from '../../../public/assets/fenceImages/fence2.jpg'
import fence3 from '../../../public/assets/fenceImages/fence3.jpg'
import fence4 from '../../../public/assets/fenceImages/fence4.jpg'
import fence5 from '../../../public/assets/fenceImages/fence5.jpg'
import fence6 from '../../../public/assets/fenceImages/fence6.jpg'
import fence7 from '../../../public/assets/fenceImages/fence7.jpg'
import fence8 from '../../../public/assets/fenceImages/fence8.jpg'
import fence9 from '../../../public/assets/fenceImages/fence9.jpg'
import fence10 from '../../../public/assets/fenceImages/fence10.jpg'
import fence11 from '../../../public/assets/fenceImages/fence11.jpg'
import fence12 from '../../../public/assets/fenceImages/fence12.jpg'
import fence13 from '../../../public/assets/fenceImages/fence13.jpg'
import fence14 from '../../../public/assets/fenceImages/fence14.jpg'
import fence15 from '../../../public/assets/fenceImages/fence15.jpg'
import fence16 from '../../../public/assets/fenceImages/fence16.jpg'
import fence17 from '../../../public/assets/fenceImages/fence17.jpg'
import fence18 from '../../../public/assets/fenceImages/fence18.jpg'
import fence19 from '../../../public/assets/fenceImages/fence19.jpg'
import fence20 from '../../../public/assets/fenceImages/fence20.jpg'
import fence21 from '../../../public/assets/fenceImages/fence21.jpg'
import fence22 from '../../../public/assets/fenceImages/fence22.jpg'
import fence23 from '../../../public/assets/fenceImages/fence23.jpg'
import fence24 from '../../../public/assets/fenceImages/fence24.jpg'
import fence25 from '../../../public/assets/fenceImages/fence25.jpg'
import fence26 from '../../../public/assets/fenceImages/fence26.jpg'
import fence27 from '../../../public/assets/fenceImages/fence27.jpg'
import fence28 from '../../../public/assets/fenceImages/fence28.jpg'
import fence29 from '../../../public/assets/fenceImages/fence29.jpg'
import fence30 from '../../../public/assets/fenceImages/fence30.jpg'
import fence31 from '../../../public/assets/fenceImages/fence31.jpg'
import fence32 from '../../../public/assets/fenceImages/fence32.jpg'
import fence33 from '../../../public/assets/fenceImages/fence33.jpg'
import fence34 from '../../../public/assets/fenceImages/fence34.jpg'
import fence35 from '../../../public/assets/fenceImages/fence35.jpg'
import fence36 from '../../../public/assets/fenceImages/fence36.jpg'
import fence37 from '../../../public/assets/fenceImages/fence37.jpg'
import fence38 from '../../../public/assets/fenceImages/fence38.jpg'
import fence39 from '../../../public/assets/fenceImages/fence39.jpg'
import fence40 from '../../../public/assets/fenceImages/fence40.jpg'
import fence41 from '../../../public/assets/fenceImages/fence41.jpg'
import fence42 from '../../../public/assets/fenceImages/fence42.jpg'
import fence43 from '../../../public/assets/fenceImages/fence43.jpg'
import fence44 from '../../../public/assets/fenceImages/fence44.jpg'
import fence45 from '../../../public/assets/fenceImages/fence45.jpg'
import fence46 from '../../../public/assets/fenceImages/fence46.jpg'
import fence47 from '../../../public/assets/fenceImages/fence47.jpg'
import fence48 from '../../../public/assets/fenceImages/fence48.jpg'
import fence49 from '../../../public/assets/fenceImages/fence49.jpg'
import fence50 from '../../../public/assets/fenceImages/fence50.jpg'
import fence51 from '../../../public/assets/fenceImages/fence51.jpg'
import fence52 from '../../../public/assets/fenceImages/fence52.jpg'
import fence53 from '../../../public/assets/fenceImages/fence53.jpg'
import fence54 from '../../../public/assets/fenceImages/fence54.jpg'
import fence55 from '../../../public/assets/fenceImages/fence55.jpg'
import fence56 from '../../../public/assets/fenceImages/fence56.jpg'
import fence57 from '../../../public/assets/fenceImages/fence57.jpg'


const fenceImageUrls = [
    fence1, fence2, fence3, fence4, fence5, fence6, fence7, fence8, fence9, fence10,
    fence11, fence12, fence13, fence14, fence15, fence16, fence17, fence18, fence19, fence20,
    fence21, fence22, fence23, fence24, fence25, fence26, fence27, fence28, fence29, fence30,
    fence31, fence32, fence33, fence34, fence35, fence36, fence37, fence38, fence39, fence40,
    fence41, fence42, fence43, fence44, fence45, fence46, fence47, fence48, fence49, fence50,
    fence51, fence52, fence53, fence54, fence55, fence56, fence57
];

export default function Fencing(){

    return (
        <div>
            <Standard title={fencingTitle} description={fencingDescription}/>
            <div>
                <ImageGrid imageUrls={fenceImageUrls}/>
            </div>
        </div>
    )
}*/
