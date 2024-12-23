import React from "react";
import { ContactData as ContactTypes } from "@/types";


type ContactDataProps = {
  data: ContactTypes[];
};

const ContactData: React.FC<ContactDataProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      {data?.map((item) => (
        <div
          key={item.id}
          className="flex items-start p-4 border-transparent rounded-lg shadow-sm  transition-shadow "
        >
          <div
            className="text-3xl flex justify-center items-center rounded-full w-12 h-12 bg-gray-100 mr-4 hover:bg-gray-200 transition"
            style={{ color: item.iconColor }}
            aria-label={`Icon for ${item.name}`}
          >
            {item.icon}
          </div>
          <div className="flex-grow">
            <span className="font-bold text-lg text-[#6A009E] hover:underline cursor-pointer">
              {item.name}
            </span>
            <div className="text-sm text-gray-600 mt-1">
              {Array.isArray(item.text) ? (
                item.text.map((line, index) => (
                  <p key={index} className="mb-1">
                    {line}
                  </p>
                ))
              ) : (
                <p>{item.text}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactData;
