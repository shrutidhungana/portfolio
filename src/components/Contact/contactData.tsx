import React from "react";
import { ContactData as ContactTypes } from "@/types";

type ContactDataProps = {
  data: ContactTypes[];
};

const ContactData: React.FC<ContactDataProps> = ({ data }) => {
  return (
    <div className="space-y-3">
      {data?.map((item) => (
        <div key={item.id} className="flex items-center">
          <div
            className="text-2xl flex justify-center"
            style={{ color: item.iconColor }}
          >
            {item.icon}
          </div>
          <div className="flex-grow ml-2">
            <span className="font-semibold text-lg text-[#6A009E]">
              {item.name}
            </span>
            <div className="text-sm text-[#8A9A5B]">
              {Array.isArray(item.text) ? (
                // If it's an array (like the location), display each item on a new line
                item.text.map((line, index) => (
                  <p key={index} className="mb-1">
                    {line}
                  </p>
                ))
              ) : (
                <p>{item.text}</p> // For other fields like phone and email
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactData;
