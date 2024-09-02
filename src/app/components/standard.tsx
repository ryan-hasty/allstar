import React from "react";


interface StandardProp {
    title?: string;
    description?: string;
}

export default function Standard({ title, description}: StandardProp) {
    return (<div className="flex justify-center">
        <div className="text-xl lg:text-3xl text-[#555555] mt-44 md:mt-52 sm:mt-52 max-w-5xl text-center">
            <div className="pb-10 text-4xl lg:text-6xl font-semibold mb-5 text-[#0F2E6C]">
                {title}
            </div>

            <div className="m-7">
                {description}
            </div>
        </div>
    </div>);
}