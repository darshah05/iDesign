import React from "react";
import Image from "next/image";

const OurTeam = () => {
  const members = [
    {
      name: "Darshit Shah",
      role: "Software Developer",
      // Assuming you have separate image files for each member
      image: "/assets/profile.png", // Replace with actual image path
    },
    {
      name: "Pranav Patil",
      role: "Project Manager",
      image: "/assets/profile.png", // Replace with actual image path
    },
    {
      name: "Vishal Patil",
      role: "UX/UI Designer",
      image: "/assets/profile.png", // Replace with actual image path
    },
  ];

  return (
    <div className="flex justify-center items-center h-[calc(100vh-70px)] p-4">
      <div className="flex justify-center gap-4 flex-wrap w-3/4">
        {members.map((member) => {
          return (
            <div className="flex flex-col items-center" key={member.name}>
              <Image
                src={member.image}
                alt={`Profile Image of ${member.name}`} // Descriptive alt text
                width={200}
                height={200}
                className="rounded-full h-[200px]"
              />
              <h1 className="text-2xl font-bold">
                <span className="text-red-500">{member.name[0]}</span>
                {member.name.slice(1)}
              </h1>
              <p>{member.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
