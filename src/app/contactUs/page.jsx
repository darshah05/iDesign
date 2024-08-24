import ContactPageComponents from "@/components/ContactPageComponents";
import React from "react";

export const metadata = {
  title: "iDesign | Contact Us",
  description:
    "Get in touch with iDesign through our Contact Page. Whether you have questions, require support, or want to discuss a new project, our team is ready to assist you. Use the contact form to reach out directly, and let's start a conversation about how we can work together to achieve your goals.",
};
const ContactUs = () => {
  return (
    <div className="relative flex items-top justify-center bg-white dark:bg-gray-900 sm:items-center sm:pt-0 h-[calc(100vh-70px)]">
      <ContactPageComponents />
    </div>
  );
};

export default ContactUs;
