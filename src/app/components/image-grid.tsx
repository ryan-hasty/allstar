import Image from 'next/image';

interface ImageUrls {
    imageUrls: string[];
}

export default function ImageGrid({ imageUrls }: ImageUrls) {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 mt-12">
            {imageUrls.map((url, index) => (
                <div key={index} className="relative h-64 md:h-96">
                    <Image
                        alt={`Image ${index + 1}`}
                        src={url}
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
}
