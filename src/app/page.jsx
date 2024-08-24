"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const chooseUs = [
    {
      title: "Expert Team",
      description:
        "Our highly skilled professionals are experts in their fields, bringing years of experience and innovation to every project.",
    },
    {
      title: "Customized Soluions",
      description:
        "We understand that every business is unique. Our tailored IT solutions are designed to meet your specific needs and drive your success.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We leverage the latest technologies and industry best practices to deliver top-notch services that keep you ahead of the competition.",
    },
    {
      title: "Dedicated Support",
      description:
        "Our commitment to your success doesn't end with project delivery. We offer ongoing support and maintenance to ensure your systems run smoothly.",
      styling: "md:col-start-1 md:col-span-2",
    },
    {
      title: "Proven Track Record",
      description:
        "Our portfolio of successful projects and satisfied clients speaks for itself. We consistently deliver results that exceed expectations.",
      styling: "max-md:col-start-1 max-md:col-span-2",
    },
  ];

  return (
    <div className="h-[calc(100vh-70px)] overflow-y-auto bg-[radial-gradient(50%_50%_at_50%_50%,rgba(202,152,218,0.40)_0%,rgba(255,255,255,0.00)_100%)] md:snap-y md:snap-mandatory no-scrollbar">
      <div className="h-[calc(100vh-70px)] flex flex-col justify-center items-center md:snap-center scroll-smooth">
        <motion.h1
          className="text-4xl font-bold text-center"
          animate={{
            translateY: [-10, 0],
            opacity: [0, 1],
          }}
          transition={{ delay: 1, duration: 3, type: "spring" }}
        >
          Empowering Your Business with <br /> Cutting-Edge IT Solutions
        </motion.h1>
        <motion.p
          className="m-4"
          animate={{
            translateY: [10, 0],
            opacity: [0, 1],
          }}
          transition={{ delay: 1, duration: 3, type: "spring" }}
        >
          Innovative & Customized IT Services <br /> to elevate your business
          performance
        </motion.p>
        <motion.div
          animate={{
            translateY: [20, 0],
            opacity: [0, 1],
          }}
          transition={{ delay: 1, duration: 3.5, type: "spring" }}
        >
          <Link
            href="/contactUs"
            className="bg-blue-800 text-white rounded-md cursor-pointer hover:bg-blue-500 p-2"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
      <div className="choose-us h-[calc(100vh-70px)] p-4 md:snap-center">
        <p className="text-3xl font-bold text-center mb-16">Why Choose Us</p>
        <div className=" h-full m-4">
          <div className="plus-points grid grid-cols-3 gap-4 max-md:grid-cols-2">
            {chooseUs.map((reasons, index) => {
              return (
                <div
                  key={index}
                  className={`${reasons.styling} shadow-xl p-2 rounded-xl min-h-[200px] flex flex-col items-center justify-center gap-5 text-center bg-[rgba(255,255,255,.5)]`}
                >
                  <h2 className="font-bold text-xl">{reasons.title}</h2>
                  <p>{reasons.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="Join our Team md:snap-center h-[calc(100vh-70px)] flex flex-col items-center justify-center text-center">
        <p className="text-3xl font-bold text-gray-800">
          Join Our Innovative Team
        </p>
        <p className="text-lg text-gray-600 w-3/4">
          Are you passionate about technology and shaping the future? <br />
          We're seeking talented individuals to join our dynamic team and
          contribute to groundbreaking projects.
        </p>
        <Link
          href={"/contactUs"}
          className="bg-black text-white p-2 rounded-xl mt-4"
        >
          Get in touch
        </Link>
      </div>
      <div className="relative h-[300px] md:snap-start">
        <p className="text-2xl font-bold text-center p-4 rounded-xl">
          Footer Section
        </p>
        <p className="text-gray-600 text-center absolute bottom-0 left-0 right-0">
          Copyright © 2024 iDesign. All rights reserved.
        </p>
      </div>
    </div>
  );
}
