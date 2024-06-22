'use client'
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
            {/* Left arrow > Medium Sized Screens*/}
            <div>
                <a href={`#set${currentSet}`}
                   className="hidden md:flex absolute -left-20 top-40 transform -translate-y-1/3 z-10 btn btn-circle m-4 bg-[#FFFFFF] text-lg text-[#555555] border-0 shadow-none"
                   onClick={goToPreviousSet}>❮</a>
            </div>

            {/* Carousel > Medium Sized Screens */}
            <div className="carousel w-full hidden md:flex overflow-hidden">
                {sets[currentSet].map((image, index) => (
                    <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-1/3 p-2">
                        <Image src={image} width={800} height={800} alt={image} className="object-cover max-h-80" />
                    </div>
                ))}
            </div>

            {/* Right arrow > Medium Sized Screens*/}
            <div>
                <a href={`#set${currentSet}`}
                   className="hidden md:flex absolute -right-20 top-40 transform -translate-y-1/3 z-10 btn btn-circle m-4 bg-[#FFFFFF] text-lg text-[#555555] border-0 shadow-none"
                   onClick={goToNextSet}
                >❯</a>
            </div>

            {/* Left arrow  < Medium Sized Screens */}
            <div>
                <a href={`#set${currentImageIndex}`}
                   className="md:hidden absolute -left-16 top-20 z-10 btn btn-circle m-4 bg-[#FFFFFF] text-lg text-[#555555] border-0 shadow-none"
                   onClick={goToPreviousImage}>❮</a>
            </div>

            {/* Carousel - single image */}
            <div className="carousel w-full flex overflow-hidden md:hidden">
                <div id={`image${currentImageIndex}`} className="carousel-item relative w-full p-2">
                    <Image
                        src={images[currentImageIndex]} width={800} height={800} alt={`Image ${currentImageIndex}`}
                        className="object-cover max-h-52"
                    />
                </div>
            </div>

            {/* Right arrow < Medium Sized Screens*/}
            <div>
                <a href={`#set${currentImageIndex}`}
                   className="md:hidden absolute -right-16 top-20 z-10 btn btn-circle m-4 bg-[#FFFFFF] text-lg text-[#555555] border-0 shadow-none"
                   onClick={goToNextImage}
                >❯</a>
            </div>

            {/* Bottom buttons  ONLY on Medium+ Screens*/}
            <div className="hidden md:flex py-4 justify-center">
                <div className="flex gap-4">
                    {sets.map((_, index) => (
                        <a
                            key={index}
                            href={`#set${index}`}
                            className="btn btn-md bg-[#FFFFFF] text-lg text-[#555555] border-0 shadow-none"
                            onClick={() => goToClickedSet(index)}
                        >
                            {index + 1}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MultipleItems;
