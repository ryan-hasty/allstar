import Link from "next/link";
import Image from "next/image";
import React from "react";

interface GeneralDescProps{
    desc?: string
}

export default function GeneralDesc({ desc }: GeneralDescProps) {
    return (
        <div className="text-lg lg:text-2xl lg:w-1/3 lg:mb-0 text-[#555555] mb-10 mt-2 hidden xl:block">
            {desc}
        </div>
    );
}