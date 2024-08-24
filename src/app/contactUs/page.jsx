import ContactPageComponents from "@/components/ContactPageComponents";
import React from "react";

export const metadata = {
  title: "Contact Us | iDesign - Your Trusted IT Consultancy",
  description:
    "Get in touch with iDesign via our Contact Page. Reach out for support, inquiries, or project discussions. Use our form to connect and start a conversation on how we can help achieve your goals.",
};
const ContactUs = () => {
  return (
    <div className="relative flex items-top justify-center bg-white dark:bg-gray-900 sm:items-center sm:pt-0 h-[calc(100vh-70px)]">
      <ContactPageComponents />
    </div>
  );
};

export default ContactUs;
