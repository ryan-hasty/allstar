import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xjvnnbby");
    if (state.succeeded) {
        return <div className="text-center">Message Sent! You will be contacted shortly.</div>;
    }
    return (
        <form onSubmit={handleSubmit} method="POST" action={"https://formspree.io/f/xjvnnbby"}
              className="border-8 border-black resize-none flex flex-col p-5">

            <label htmlFor="name" className="font-semibold mr-10">
                Name:
            </label>

            <input className="mb-5 border-2 border-black p-1" maxLength={40}
                   id="name"
                   type="text"
                   name="name"
            />

            <label htmlFor="tel" className="font-semibold mr-10">
                Phone Number:
            </label>

            <input className="mb-5 border-2 border-black p-1" maxLength={10}
                   id="phoneNumber"
                   type="tel"
                   name="phoneNumber"
            />

            <label htmlFor="email" className="font-semibold mr-10">
                Email Address:
            </label>

            <input className="mb-5 border-2 border-black p-1" maxLength={50}
                   id="email"
                   type="email"
                   name="email"
            />


            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <label htmlFor="message" className="font-semibold">
                Message:
            </label>

            <textarea className="resize-none mb-5 border-2 border-black p-1"
                      id="message"
                      name="message"
                      maxLength={1000}
            />

            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            <button className="font-bold border-2 border-black bg-blue-950 text-white" type="submit"
                    disabled={state.submitting}>
                Submit
            </button>

        </form>
    );
}