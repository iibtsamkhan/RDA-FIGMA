import React from 'react'
import MagicButton from "@/components/ui/MagicButton";
import { FaRegEnvelope  } from "react-icons/fa6";
import { FormEvent, useState } from "react"; 

export default function Contact() {
    const [formStatus, setFormStatus] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    try {
    // Collect form values
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const website = (form.elements.namedItem("website") as HTMLInputElement).value;
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement).value;

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "77cab34b-0bdc-4e97-8b12-e8da7da09416",
            name: `${firstName} ${lastName}`,
            email: email,
            company: company,
            website: website,
            message: description,
        }),
    });
    const result = await response.json();
    if (result.success) {
      setFormStatus("Thank you! Your inquiry has been successfully sent.");
    }else {
      setFormStatus("Oops! Something went wrong. Please try again.");
    }
} catch (error) {
  setFormStatus("An error occurred. Please check your network and try again.");
}
}
  return (
    <>
        <div className="w-[50%] flex flex-col justify-start items-start py-5 mx-auto">
                  <form
                      className="w-full max-w-[700px] flex flex-col gap-4"
                      onSubmit={handleSubmit}    
                  >
                      <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                          <label className="text-[#f3f3f3]">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            className="p-3 bg-white text-black cursor-text"
                            required
                          />
                        </div>
                        <div className="flex flex-col w-1/2">
                          <label className="text-[#f3f3f3]">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            className="p-3 bg-white text-black cursor-text"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[#f3f3f3]">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="p-3 bg-white text-black cursor-text"
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[#f3f3f3]">Company /</label>
                        <input
                          type="text"
                          name="company"
                          className="p-3 bg-white text-black cursor-text"
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[#f3f3f3]">Website</label>
                        <input
                          type="url"
                          name="website"
                          className="p-3 bg-white text-black cursor-text"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[#f3f3f3]">Brief Description</label>
                        <textarea
                          name="description"
                          className="p-3 bg-white text-black cursor-text"
                          // rows="4"
                        ></textarea>
                      </div>
                      <div className="mt-5" >
                          <MagicButton
                              title="Submit"
                              icon={<FaRegEnvelope  />}
                              position="right"
                          />
                      </div>
                  </form>
                  {formStatus && (
                    <div className="mt-4 text-[#f3f3f3] bg-[#1C2432] p-4 rounded-md">
                      {formStatus}
                    </div>
                  )}
            </div>
    </>
  )
}
