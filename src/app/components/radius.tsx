import Image from 'next/image';

interface ServiceUrl{
    serviceRadiusUrl: string
}

export default function Radius({ serviceRadiusUrl }: ServiceUrl){

    return (
        <div className="flex justify-center mt-7 sm:mt-10">
            <Image src={serviceRadiusUrl || ""}  width={750} height={750} alt={"Service Radius" || ""}/>
        </div>
    )
}
