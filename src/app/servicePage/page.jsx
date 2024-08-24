import React from "react";
import ServiceList from "@/components/ServiceList";

export const metadata = {
  title: "iDesign | Services",
  description:
    "Discover iDesign's range of expert IT services designed to elevate your business. Our offerings include Custom Software Development for tailored, scalable solutions, Full Stack Website Development for dynamic and responsive web experiences, comprehensive Search Engine Optimization (SEO) to boost your online visibility, and insightful Business Data Analysis to turn data into strategic advantages. Explore how our specialized services can enhance your business efficiency and online presence.",
};
const ServicePage = () => {
  return (
    <div className="h-[calc(100vh-70px)] p-4 bg-gray-50">
      <ServiceList />
    </div>
  );
};

export default ServicePage;
