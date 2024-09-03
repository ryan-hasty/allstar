import Image from 'next/image';

interface ServiceUrl{
    serviceRadiusUrl: string
}

export default function Radius({ serviceRadiusUrl }: ServiceUrl){

    return (
        <div className="flex justify-center mt-10 sm:mt-28">
            <Image src={serviceRadiusUrl || ""}  width={900} height={900} alt={"Service Radius" || ""}/>
        </div>
    )
}
