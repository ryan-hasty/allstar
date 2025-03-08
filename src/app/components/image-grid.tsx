import Image from "next/image";

interface ImageUrls {
    imageUrls: string[];
}

export default function ImageGrid({ imageUrls }: ImageUrls) {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 mt-12">
            {imageUrls.map((url, index) => (
                <div key={index} className="image-container">
                    <Image
                        alt={`Image ${index + 1}`}
                        className="responsive lg:max-h-60 md:max-h-40"
                        src={url}
                        width={500}
                        height={500}
                    />
                </div>
            ))}
        </div>
    );
}