"use client"
import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Explore = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl font-extralight">EXPLORE AND SOAR HIGHER </h1>
      <div className="flex flex-col mt-10 gap-4 mb-20">
        {exploreItem.map((item, index) => (
          <AnimatedLink key={index} href={item.link} title={item.title} index={index} />
        ))}
      </div>
    </div>
  );
};

interface AnimatedLinkProps {
  href: string;
  title: string;
  index: number;
}

const AnimatedLink = ({ href, title, index }: AnimatedLinkProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={href}
        className="text-6xl text-center flex justify-center items-center hover:text-primary hover:translate-x-2 transition-transform "
      >
        {title}
        <span>
          <ArrowRight size={50} />
        </span>
      </Link>
    </motion.div>
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