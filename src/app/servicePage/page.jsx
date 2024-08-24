import React from "react";
import ServiceList from "@/components/ServiceList";

export const metadata = {
  title: "Our Services | iDesign - Comprehensive IT Solutions",
  description:
    "Explore iDesign's expert IT services: Custom Software Development, Full Stack Website Development, SEO for better visibility, and Business Data Analysis to drive strategic growth. Enhance your business efficiency and online presence today.",
};
const ServicePage = () => {
  return (
    <div className="h-[calc(100vh-70px)] p-4 bg-gray-50">
      <ServiceList />
    </div>
  );
};

export default ServicePage;
