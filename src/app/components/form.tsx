import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xjvnnbby");

    if (state.succeeded) {
        return (
            <div className="flex-col text-center text-[#0F2E6C] font-semibold text-4xl">
                Message Sent!
                <div className="pt-10">
                    You will be contacted shortly.
                </div>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            method="POST"
            action={"https://formspree.io/f/xjvnnbby"}
            className="border-2 border-gray-300 shadow-md rounded-lg p-6 max-w-lg mx-auto"
        >
            <label htmlFor="name" className="block font-semibold mb-1">
                Name
            </label>
            <input
                className="w-full border-2 border-gray-200 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-[#F50000]"
                id="name"
                type="text"
                name="Name"
                maxLength={40}
                required
            />

            <label htmlFor="phoneNumber" className="block font-semibold mb-1">
                Phone Number
            </label>
            <input
                className="w-full border-2 border-gray-200 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-[#F50000]"
                id="phoneNumber"
                type="tel"
                name="Phone Number"
                maxLength={10}
            />

            <label htmlFor="email" className="block font-semibold mb-1">
                Email Address
            </label>
            <input
                className="w-full border-2 border-gray-200 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-[#F50000]"
                id="email"
                type="email"
                name="Email"
                maxLength={50}
                required
            />
            <ValidationError
                prefix="Email"
                field="Email"
                errors={state.errors}
                className="text-red-600"
            />

            <label htmlFor="serviceNeed" className="block font-semibold mb-1">
                Service Need
            </label>

            <select
                className="w-full border-2 border-gray-200 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-[#F50000] max-w-full"
                name="Service Need"
                id="serviceNeed">
                <option>
                    Roofing
                </option>
                <option>
                    Fencing
                </option>
            </select>

            <label htmlFor="message" className="block font-semibold mb-1">
                Message
            </label>
            <textarea
                className="w-full border-2 border-gray-200 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-red-[#F50000]"
                id="message"
                name="Message"
                maxLength={1000}
                required
            />
            <ValidationError
                prefix="Message"
                field="Message"
                errors={state.errors}
                className="text-red-600"
            />

            <button
                className="bg-[#0F2E6C] hover:bg-[#F50000] text-white font-bold py-2 px-4 rounded-md border border-[#0F2E6C] focus:outline-none"
                type="submit"
                disabled={state.submitting}
            >
                {state.submitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}
