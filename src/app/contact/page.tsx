'use client';
import ContactForm from '@/app/components/form';
import Standard from "@/app/standard-info/page";

export default function Contact() {
    return (
        <div>
            <Standard title={"Reach Out"} />
            <div className="flex items-start justify-center mt-10 border-8 gap-32">
                <div className="flex flex-col text-3xl mt-2 gap-y-10">
                    <div>Phone Number: 281-785-0030</div>
                    <div>Email Address: allstarfencing33@gmail.com</div>
                </div>
                <div className="p-4 rounded border-black w-full max-w-xl max-h-10 text-xl">
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}
