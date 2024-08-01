import React from "react";

const ServicesCards = ({ title, description }) => {
  return (
    <div className="card bg-white w-[236px] h-[350px] flex flex-col justify-around items-center text-center p-4 rounded-xl shadow-xl">
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCards;
