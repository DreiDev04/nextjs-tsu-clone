import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import Link from "next/link";

const Bento = () => {
  return (
    <div className="bg-black md:p-20 p-8 text-white">
      <hr className="border-t-1 border-white mb-32" />
      <div className=" grid md:grid-cols-3 md:gap-10 gap-5 hover:cursor-pointer">
        {bentoItem.map((item, index) => (
          <div key={index} className="border rounded-xl overflow-hidden">
            <Link href={item.link} target="_blank">
              <Image
                src={item.src}
                alt={item.title}
                width={450}
                height={450}
                className=" max-h-52 object-cover"
              />
              <h1 className="md:text-lg text-md p-4 md:p-8">{item.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const bentoItem = [
  {
    src: "/images/pres-aev-web-thumbnail.webp",
    title: "Office of the University President",
    link: "https://www.tsu.edu.ph/university-president/office-of-the-university-president/",
  },
  {
    src: "/images/transparency-seal-thumbnail.webp",
    title: "Transparency Seal",
    link: "https://www.tsu.edu.ph/good-governance/transparency-seal/",
  },
  {
    src: "/images/freedom_info.webp",
    title: "Freedom of Information",
    link: "https://www.foi.gov.ph/agencies/tsu/",
  },
];

export default Bento;
