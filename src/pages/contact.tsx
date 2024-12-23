// pages/contact.tsx
import React from "react";
import PortfolioLayout from "@/components/layout";
import { contactData, contactFormData } from "@/config";
import ContactData from "@/components/Contact/contactData";
// import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <PortfolioLayout>
      <div className="bg-gradient-to-r from-[#FDEBD0] to-[#F9D7E3] py-16">
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#7a3bdb] wordArtText mb-2">
            Contact
          </h1>
          <h1 className="text-2xl font-semibold text-[#FF8C00] mb-6">
            Get In Touch
          </h1>

          <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0">
            {/* Left Side - Contact Data */}
            <div className="flex-1 space-y-4">
              <ContactData data={contactData} />
            </div>
            {/* Right Side - Contact Form */}
            <div className="flex-1">
              {/* <ContactForm formData={contactFormData} /> */}
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Contact;
