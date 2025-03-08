import Image from "next/image";
import React from "react";


export function Footer() {
    return (
        <footer
            className="flex justify-around sm:justify-between md:gap-20 bottom-0 p-4 mt-10 bg-[#0F2E6C] border-none items-center">
            <a
                href="https://www.facebook.com/profile.php?id=100077235862867"
                target={"_blank"}
                className="bg-white sm:ml-20">
                <Image
                    src="/assets/miscImages/facebook-logo.svg"
                    alt="facebook-logo"
                    width={34}
                    height={34}
                    className="h-auto"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }}></Image>
            </a>
            <a
                href="https://www.linkedin.com/in/ryan-hasty/"
                target="_blank"
                className="hover:text-[#F50000] sm:text-lg text-white sm:mr-20">
                Created by Ryan Hasty
            </a>
        </footer>
    );
}