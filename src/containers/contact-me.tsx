"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rajayush746@gmail?subject=${formData.subject}&body=
    Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className='absolute top-24 text-2xl font-bold text-[#ccd6f6]'> / contact me</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-xl sm:text-2xl font-semibold text-center text-[#8892b0]">
          I have got just what you need.{" "}
          <span className="decoration-[#64ffda]/50 underline block sm:inline text-[#8892b0]">
            Let's Talk
          </span>
        </h4>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />

            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button className="bg-[#64ffda] py-5 px-10 rounded-md text-black font-bold text-lg tracking-[3px]">
            SUBMIT
          </button>
        </form>

        <div className="space-y-3 lg:inline-flex gap-6">
          <div className="flex items-center space-x-5 justify-center lg:mt-3">
            <PhoneIcon className="text-[#64ffda] h-6 w-6 animate-pulse" />
            <p className="text-xl text-[#8892b0]">+91 9304357267</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#64ffda] h-6 w-6 animate-pulse" />
            <p className="text-xl text-[#8892b0]">rajayush746@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#64ffda] h-6 w-6 animate-pulse" />
            <p className="text-xl text-[#8892b0]">Bhagalpur, Bihar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
