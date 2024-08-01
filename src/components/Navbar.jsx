"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const navigationMenu = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services",
      url: "/servicePage",
    },
    {
      title: "Our Team",
      url: "/our-team",
    },
    {
      title: "Contact Us",
      url: "/contactUs",
    },
  ];

  const pathname = usePathname();

  return (
    <div className={`w-full m-0 py-4 px-6 h-[70px] flex justify-between items-center ${pathname==='/contactUs' && "bg-gray-900 text-white"}`}>
      <div className="left font-bold text-3xl">
        <Link href='/'><span className="text-red-500">i</span>Design</Link>
      </div>
      <div className="right">
        <ul className="flex gap-5">
          {navigationMenu.map((item) => {
            return (
              <Link href={`${item.url}`} key={item.title}>
                
                <li
                  className={`p-2 ${
                    pathname === item.url &&
                    pathname !== "/contactUs" &&
                    "border-solid border-b-2 border-red-300"
                  } ${
                    item.title === "Contact Us" &&
                    "bg-blue-800 text-white rounded-md cursor-pointer hover:bg-blue-500"
                  }`}
                >
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
