import React from "react";
import ServicesCards from "@/components/ServicesCards";

const ServicePage = () => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored solutions designed to meet your unique business needs. Our team develops robust, scalable software to streamline your operations and enhance productivity.",
    },
    {
      title: "Full Stack Website Development",
      description:
        "From front-end design to back-end functionality, we create dynamic, responsive websites that provide a seamless user experience and drive your online presence.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost your website's visibility and attract more organic traffic with our comprehensive SEO strategies. We optimize your site to rank higher on search engines and reach your target audience effectively.",
    },
    {
      title: "Business Data Analysis",
      description:
        "Turn data into actionable insights. Our data analysis services help you make informed decisions, identify trends, and optimize business processes for better performance.",
    },
  ];

  return (
    <div className="h-[calc(100vh-70px)] p-4 bg-gray-50">
      <div className="flex gap-4 flex-wrap justify-center items-center h-full py-4 overflow-y-auto">
        {services.map((service) => {
          return (
            <ServicesCards
              key={service.title}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicePage;
