import React from "react";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";

const Explore = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl font-extralight">EXPLORE AND SOAR HIGHER </h1>
      <div className="flex flex-col mt-10 gap-4 mb-20">
        {exploreItem.map((item, index) => (
          <Link key={index} href={item.link} className="text-6xl text-center flex justify-center items-center hover:text-primary">
            {item.title}
            <span >
              <ArrowRight size={50}/>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const exploreItem = [
  {
    title: "About",
    link: "https://www.tsu.edu.ph/about",
  },
  {
    title: "Admissions",
    link: "https://www.tsu.edu.ph/admissions",
  },
  {
    title: "Alumni",
    link: "https://www.tsu.edu.ph/university-president/offices/alumni-affairs-office/",
  },
  {
    title: "Portals",
    link: "https://www.tsu.edu.ph/portals",
  },
];

export default Explore;
