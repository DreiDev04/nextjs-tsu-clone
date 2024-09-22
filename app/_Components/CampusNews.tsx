"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CampusNews = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      <h1 className="md:text-5xl text-4xl font-serif mb-8 text-center text-red-800">
        Campus News
      </h1>
      <hr className="border-b-2 border-gray-300 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {CampusNewsList.map((news, index) => (
          <AnimatedNewsCard key={index} news={news} index={index} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="text-lg font-semibold text-red-800 border border-red-800 hover:bg-red-800 hover:text-white transition-colors duration-300 px-6 py-2 rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
};

interface News {
  title: string;
  date: string;
  description: string;
  image: string;
}

const AnimatedNewsCard = ({ news, index }: { news: News; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="col-span-1"
    >
      <NewsCard news={news} />
    </motion.div>
  );
};

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 hover:bg-grays transition-all duration-300">
      <div className="h-48 relative">
        <Image
          src={news.image}
          alt={news.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-10">
        <h2 className="text-xl font-serif font-bold mb-2 text-red-800">
          {news.title}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{news.date}</p>
        <p className="text-base text-gray-700 line-clamp-4">
          {news.description}
        </p>
        <Button className="mt-4">Read More</Button>
      </div>
    </div>
  );
};

const CampusNewsList = [
  {
    title: "TSU, LGU Anao to work for modernized info system",
    date: "Fri, Sep 20, 2024",
    description:
      "Tarlac State University, through the Center for Community and Local Governance Studies and Policy Development, sealed a memorandum of agreement with the Municipality of Anao as the pioneer town for Project PRISM on Friday (September 20) at the TSU Main AVR.",
    image: "/news/modernized_info.webp",
  },
  {
    title: "TSU is the first SUC in PH to partner with ISOCARP",
    date: "Wed, Sep 11, 2024",
    description:
      "Tarlac State University and the International Society of City and Regional Planners (ISOCARP) signed a memorandum of understanding for research, capacity building, and international networking opportunities. ",
    image: "/news/first SUC.jpg",
  },
  {
    title: "TSU faculty, staff participate in SCUFAR-III",
    date: "Tue, Aug 20, 2024",
    description:
      "Two hundred and twenty faculty and staff of Tarlac State University attended the opening ceremony of the SCUFAR-III games earlier today (August 20) at the Pampanga State Agricultural University in Magalang, Pampanga.",
    image: "/news/SCUFAR-III.jpeg",
  },
];

export default CampusNews;