import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ContactFormData } from "@/types";
import emailjs from "@emailjs/browser";

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
   setFormData((prevFormData) => ({
     ...prevFormData,
     [name]: value,
   }));
 };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send the email using EmailJS
    processEmail(templateParams);
  };

  const processEmail = async (templateParams: any) => {
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );
      console.log("Email sent successfully!", response);

      // Clear form data after successful email send
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
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
          {item.name === "Message" ? (
            <textarea
              name={item.name}
              id={item.name}
              placeholder={item.placeholder}
              value={formData[item.name as keyof typeof formData]}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a3bdb] focus:border-transparent resize-none"
            />
          ) : (
            <input
              type="text"
              name={item.name}
              id={item.name}
              placeholder={item.placeholder}
              value={formData[item.name as keyof typeof formData]}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a3bdb] focus:border-transparent"
            />
          )}
        </div>
      ))}
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
