import React from "react";
import PortfolioLayout from "@/components/layout";
import { contactData, contactFormData, socialMediaLinks } from "@/config";
import ContactData from "@/components/Contact/contactData";
import ContactForm from "@/components/Contact/contactForm";
import Image from "next/image";


const Contact: React.FC = () => {
  return (
    <PortfolioLayout>
      <div className="min-h-screen bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3] py-16">
        <div className="max-w-screen-lg mx-auto px-4 text-center mt-8">
          <h1 className="text-4xl font-bold text-[#7a3bdb] wordArtText mb-2">
            Contact
          </h1>
          <p className="text-xl font-normal text-[#FF8C00] mb-6 mt-2 text-center">
            Get In Touch
          </p>

          <div className="flex flex-col md:flex-row md:space-x-48 space-y-8 md:space-y-0">
            {" "}
            {/* Increased space here from md:space-x-16 to md:space-x-32 */}
            {/* Left Side - Contact Data */}
            <div className="flex-1 space-y-4">
              <ContactData data={contactData} />
              <div className="flex space-x-6 mt-6 justify-center md:justify-start">
                {socialMediaLinks.map((link) => (
                  <div key={link.name} className="flex items-center space-x-2">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 ${link.hoverColor} transition duration-300`}
                      aria-label={link.name}
                    >
                      <span
                        className="text-3xl flex justify-center items-center rounded-full w-12 h-12 bg-gray-100 mr-4 hover:bg-gray-200 transition"
                        style={{ color: link.iconColor }}
                      >
                        {link.icon}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Side - Contact Form */}
            <div className="flex-1">
              <ContactForm data={contactFormData} />
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-4 right-4">
          <Image
            src="/contact.png" // Replace with your image path
            alt="Decorative Contact Image"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Contact;
