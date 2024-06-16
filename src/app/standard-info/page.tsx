interface StandardProps {
    title?: string;
    description?: string;
}


export default function Standard(props: StandardProps){
    return <div className="flex justify-center">
        <div className="text-xl lg:text-3xl text-[#555555] mt-60 max-w-5xl text-center">
            <div className="pb-10 text-3xl lg:text-6xl font-bold -mb-5 text-[#0F2E6C]">
                {props.title}
            </div>

            <div className="m-7">
                {props.description}
            </div>
        </div>
    </div>
}