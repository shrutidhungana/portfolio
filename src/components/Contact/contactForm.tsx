import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ContactFormData } from "@/types";

type ContactFormProps = {
  data: ContactFormData[];
};

const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-transparent shadow-lg rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-[#6A009E]">
        Contact Me
      </h2>
      {data?.map((item) => (
        <div key={item.id} className="flex flex-col space-y-2">
          <label
            htmlFor={item.name}
            className="text-sm font-medium text-gray-700"
          >
            {item.label}
          </label>
          <input
            type="text"
            name={item.name}
            id={item.name}
            placeholder={item.placeholder}
            value={formData[item.name as keyof typeof formData]}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a3bdb] focus:border-transparent"
          />
        </div>
      ))}
      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a3bdb] focus:border-transparent resize-none"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-[#7a3bdb] to-[#5e2a9d] rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Send Message
        <FaArrowRight className="ml-2" />
      </button>
    </form>
  );
};

export default ContactForm;
