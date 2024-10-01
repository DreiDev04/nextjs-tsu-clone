"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
  index: number;
}

const News = () => {
  return (
    <div className="h-screen w-full bg-foreground text-background p-10 md:px-16 flex md:flex-row flex-col items-center justify-center gap-5">
      <div className="flex flex-col md:text-2xl text-xl font-semibold space-y-4 md:space-y-6">
        <AnimatedHeading
          text="Truth in words, action and character"
          index={0}
        />
        <AnimatedHeading
          text="Service with excellence and compassion"
          index={1}
        />
        <AnimatedHeading text="Unity in diversity" index={2} />
      </div>

      <div className="relative w-full h-full grid items-center justify-center mt-10 md:mt-0">
        <div className="absolute  rounded-lg"></div>
        <Image
          src="/news/flash/blep-aug-2024.webp"
          alt="Tsu Flash August 2024"
          width={800}
          height={800}
          className="rounded-lg"
        />
        <div className="absolute bottom-0 right-0 p-5 flex gap-2">
          <p className="items-center flex">Slide 1 of 5</p>
          <Button variant="ghost">
            <ArrowLeftCircle />
          </Button>
          <Button variant="ghost">
            <ArrowRightCircle />
          </Button>
        </div>
      </div>
    </div>
  );
};

const AnimatedHeading = ({ text, index }: AnimatedHeadingProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);

  return (
    <motion.h1
      ref={ref}
      className="leading-tight"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span className="text-5xl text-red-900">{firstLetter}</span>
      {restOfText}
    </motion.h1>
  );
};

const FlashCarousel = [
  {
    title: "Tsu Flash",
    image: "/news/flash/blep-aug-2024.webp",
  },
];

export default News;