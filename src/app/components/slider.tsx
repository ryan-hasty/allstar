'use client';
import Image from "next/image";
import { useState } from "react";

interface ImageList {
    images: string[];
}

function MultipleItems({ images }: ImageList) {
    // useState for managing current set index
    const [currentSet, setCurrentSet] = useState<number>(0);

    // useState for managing current image index
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    // Check if images is undefined or null
    if (!images || images.length === 0) {
        return null; // or render a default message, placeholder, etc.
    }

    // Group images into sets of 3
    const sets: string[][] = [];
    for (let i = 0; i < images.length; i += 3) {
        sets.push(images.slice(i, i + 3));
    }

    const totalSets: number = sets.length;

    // Function to navigate to the previous set
    const goToPreviousSet = () => {
        setCurrentSet((prev) => (prev === 0 ? totalSets - 1 : prev - 1));
    };

    // Function to navigate to the next set
    const goToNextSet = () => {
        setCurrentSet((prev) => (prev === totalSets - 1 ? 0 : prev + 1));
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    const goToNextImage = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }

    // Function to navigate to the clicked set
    const goToClickedSet = (setIndex: number) => {
        setCurrentSet(setIndex);
    };

    return (
        <div className="slider-container w-9/12 mt-14 mb-20 border-8 border-white mx-auto relative">
            {/* Left arrow > Medium Sized Screens */}
            <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 -left-16 z-10 -mt-10">
                <button
                    onClick={goToPreviousSet}
                    className="text-6xl text-[#555555] bg-[#FFFFFF] border-0 rounded-full p-2 shadow-md hover:scale-110 transition-transform"
                >
                    ❮
                </button>
            </div>

            {/* Carousel > Medium Sized Screens */}
            <div className="carousel w-full hidden md:flex overflow-hidden">
                {sets[currentSet].map((image, index) => (
                    <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-1/3 p-2">
                        <Image src={image} width={800} height={800} alt={image} className="object-cover max-h-80" />
                    </div>
                ))}
            </div>

            {/* Right arrow > Medium Sized Screens */}
            <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 -right-16 z-10 -mt-10">
                <button
                    onClick={goToNextSet}
                    className="text-6xl text-[#555555] bg-[#FFFFFF] border-0 rounded-full p-2 shadow-md hover:scale-110 transition-transform"
                >
                    ❯
                </button>
            </div>

            {/* Left arrow < Medium Sized Screens */}
            <div className="md:hidden absolute top-1/2 transform -translate-y-1/2 -left-12 md:-left-10 z-10">
                <button
                    onClick={goToPreviousImage}
                    className="text-4xl text-[#555555] bg-[#FFFFFF] border-0 rounded-full p-2 shadow-md hover:scale-110 transition-transform"
                >
                    ❮
                </button>
            </div>

            {/* Carousel - single image */}
            <div className="carousel w-full flex overflow-hidden md:hidden">
                <div id={`image${currentImageIndex}`} className="carousel-item relative w-full">
                    <Image
                        src={images[currentImageIndex]} width={800} height={800} alt={`Image ${currentImageIndex}`}
                        className="object-cover max-h-52"
                    />
                </div>
            </div>

            {/* Right arrow < Medium Sized Screens */}
            <div className="md:hidden absolute top-1/2 transform -translate-y-1/2 -right-12 md:-right-10 z-10">
                <button
                    onClick={goToNextImage}
                    className="text-4xl text-[#555555] bg-[#FFFFFF] border-0 rounded-full p-2 shadow-md hover:scale-110 transition-transform">
                    ❯
                </button>
            </div>

            {/* Bottom buttons ONLY on Medium+ Screens */}
            <div className="hidden md:flex py-4 justify-center">
                <div className="flex gap-4">
                    {sets.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToClickedSet(index)}
                            className="btn btn-md bg-[#FFFFFF] text-xl text-[#555555] border-0 shadow-none">
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MultipleItems;
