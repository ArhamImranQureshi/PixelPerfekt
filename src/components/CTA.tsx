"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RotatingSphere from "./sphere";
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Yahan aap apni API call handles kar sakte hain
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative bg-cover bg-center py-16 md:py-20 lg:py-[120px] overflow-hidden" style={{ backgroundImage: "url('/images/227_1-1-copyright 1.png')" }}>
   {/* <section className="relative py-16 md:py-20 lg:py-[120px] overflow-hidden bg-[#020a0a]">
      {/* 1. Three.js Teal Dynamic Fluid Sphere Background 
      <RotatingSphere /> */}
      {/* Background Overlay for better readability */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[120px] xl:px-[229px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="rounded-[30px] border border-white/20 bg-[rgba(30,30,30,0.35)] p-6 sm:p-10 shadow-[0px_18px_21px_rgba(0,0,0,0.3)] backdrop-blur-md lg:p-16"
        >
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left - Info Section */}
            <motion.div
              variants={fadeIn}
              className="w-full lg:w-[420px] flex flex-col justify-between"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold leading-[48px] sm:leading-[58px] tracking-[-0.03em] text-white">
                  Have Questions?
                  <br />
                  <span className="text-[#2CB6C0]">Get in touch!</span>
                </h2>
                <p className="mb-8 mt-4 text-base leading-relaxed text-white/70">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim.
                </p>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/location.svg"
                      alt="Location"
                      width={28}
                      height={28}
                    />
                  </div>
                  <p className="text-md lg:text-xl  leading-6 text-white/90 group-hover:text-white transition-colors">
                    941 Stratford Road, Hall Green, Birmingham, England, B28 8BH
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/phone.svg"
                      alt="Phone"
                      width={28}
                      height={28}
                    />
                  </div>
                  <a
                    href="tel:+442032398869"
                    className="text-md lg:text-xl  leading-6 text-white/90 group-hover:text-white transition-colors"
                  >
                    +44 20 3239 8869
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/email.svg"
                      alt="Email"
                      width={28}
                      height={20}
                    />
                  </div>
                  <a
                    href="mailto:support@pixelperfektsolutions.com"
                    className="text-md lg:text-xl leading-6 text-white/90 group-hover:text-white transition-colors break-all"
                  >
                    support@pixelperfektsolutions.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right - Interactive Form */}
            <motion.div variants={fadeIn} className="flex-1">
              <h3 className="mb-8 text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-white">
                Get Started
                <span className="text-blue-400 block h-1 w-12 bg-white mt-2 rounded"></span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-transparent pt-4 pb-2 text-white placeholder-white/30 border-b border-white/30 focus:border-white outline-none transition-colors duration-300 text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="w-full bg-transparent pt-4 pb-2 text-white placeholder-white/30 border-b border-white/30 focus:border-white outline-none transition-colors duration-300 text-sm"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Phone Input */}
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className="w-full bg-transparent pt-4 pb-2 text-white placeholder-white/30 border-b border-white/30 focus:border-white outline-none transition-colors duration-300 text-sm"
                    />
                  </div>

                  {/* Dropdown Service Select */}
                  <div className="relative group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-transparent pt-4 pb-2 text-white border-b border-white/30 focus:border-white outline-none transition-colors duration-300 text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-black">
                        Select Service
                      </option>
                      <option value="web-development" className="text-black">
                        Web Development
                      </option>
                      <option value="uiux-design" className="text-black">
                        UI/UX Design
                      </option>
                      <option value="marketing" className="text-black">
                        Digital Marketing
                      </option>
                    </select>
                    <svg
                      className="pointer-events-none absolute right-0 bottom-3 transition-transform duration-300 group-hover:translate-y-0.5"
                      width="14"
                      height="8"
                      viewBox="0 0 18 10"
                      fill="none"
                    >
                      <path
                        d="M1 1L9 9L17 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </svg>
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <textarea
                    name="message"
                    rows={2}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type Your Message"
                    className="w-full bg-transparent pt-4 pb-2 text-white placeholder-white/30 border-b border-white/30 focus:border-white outline-none transition-colors duration-300 text-sm resize-none"
                  />
                </div>

                {/* Submit Button with Hover Effects */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full sm:w-auto rounded-[30px] bg-white px-10 py-3.5 font-[Poppins] text-sm font-semibold uppercase text-black tracking-wider transition-all shadow-md hover:bg-gray-100 hover:shadow-lg"
                >
                  Send message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
