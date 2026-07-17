"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function GlassForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
    alert("Thanks for reaching out! We will get back to you soon.");
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white/5 p-8 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-6">Let's Build Your Brand</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-[#2CB6C0] focus:outline-none focus:ring-1 focus:ring-[#2CB6C0] transition-colors"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-[#2CB6C0] focus:outline-none focus:ring-1 focus:ring-[#2CB6C0] transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="sr-only">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name (Optional)"
              className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-[#2CB6C0] focus:outline-none focus:ring-1 focus:ring-[#2CB6C0] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="projectDetails" className="sr-only">Project Details</label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us about your brand vision..."
              rows={4}
              className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-[#2CB6C0] focus:outline-none focus:ring-1 focus:ring-[#2CB6C0] transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#2CB6C0] hover:bg-[#239299] text-white px-6 py-3 font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(44,182,192,0.4)]"
          >
            <span>Get a Proposal</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
