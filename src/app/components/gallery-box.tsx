import Link from "next/link";
import React from "react";
import Image from "next/image";


interface GalleryBoxProps {
    title?: string
    imageUrl?: string
    href?: string
}

export default function GalleryBox({ title, imageUrl, href }: GalleryBoxProps) {
    return (
/*        <Link className="h-1/6 w-6/12 lg:h-1/2 lg:w-3/5 ml-20 flex jus5tify-left items-end relative" href={href || "#"}>*/
        <Link className="h-1/6 w-full xl:h-1/2 xl:w-4/12 xl:ml-20 flex justify-left items-end" href={href || "#"}>
            <div className="relative w-full mb-5 xl:mb-0">
                <Image src={imageUrl || ""} alt={title || ""} height={1000} width={1000} className="w-full max-h-80 object-fit"/>
                <div className="absolute inset-0 bg-[#0F2E6C] opacity-50 hover:bg-[#555555]"></div>
                <div className="absolute bottom-0 left-0 xl:ml-7 ml-3 mb-3 xl:mb-7 text-white text-4xl sm:text-6xl">{title}</div>
            </div>
        </Link>
    );
}
