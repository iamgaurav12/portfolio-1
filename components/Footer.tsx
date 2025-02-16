import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); 

    try {
      const formBody = new URLSearchParams(formData).toString();
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyZvu8bHj8HPWklnLNr2xmOLm7pw32IgQX3QrrnY5SXaEHKas6xMvKoKHRV_eR5YWoDig/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody,
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        setSuccessMessage("Message Sent successfully!❤️");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
      } else {
        setSuccessMessage("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("There was an error submitting the form.");
    }
  };

  return (
    <footer className="w-full pt-20 pb-10 relative bottom-0" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96 overflow-hidden">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Welcome! I’m just <span className="text-purple">Starting</span> digital out on Web Dev World.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I’m excited to share my journey and grow my digital presence with you.
        </p>
        <a href="mailto:prakashgaurav189@gmail.com">
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>

      {/* Contact Form */}
      <div className="mt-16 w-full max-w-lg mx-auto bg-gradient-to-r from-[#4C1D95] to-[#1E3A8A] p-8 rounded-3xl shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-4 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 bg-[#1F2937] text-white placeholder-gray-400 transition-all duration-300 hover:bg-[#374151]"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-4 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 bg-[#1F2937] text-white placeholder-gray-400 transition-all duration-300 hover:bg-[#374151]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-white text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="p-4 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 bg-[#1F2937] text-white placeholder-gray-400 transition-all duration-300 hover:bg-[#374151]"
              placeholder="Write your message here"
              required
            />
          </div>

          <button type="submit">
            <MagicButton title="Send Message" icon={<FaLocationArrow />} position="right" />
          </button>
        </form>

        {/* Success message display */}
        {successMessage && (
          <p className="text-green-500 font-bold mt-4 text-center">{successMessage}</p>
        )}
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © Gaurav. Made with ❤️ by Gaurav Prakash.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
