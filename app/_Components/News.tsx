import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  Ghost,
} from "lucide-react";

const News = () => {
  return (
    <div className="h-screen w-full bg-foreground text-background p-10 md:px-16 flex md:flex-row flex-col items-center justify-center gap-5">
      <div className="flex flex-col md:text-2xl text-xl font-semibold space-y-4 md:space-y-6">
        <h1 className="leading-tight">
          <span className="text-5xl text-red-900">T </span>ruth in words, action
          and character
        </h1>
        <h1 className="leading-tight">
          <span className="text-5xl text-red-900">S </span>ervice with
          excellence and compassion
        </h1>
        <h1 className="leading-tight">
          <span className="text-5xl text-red-900">U </span>nity in diversity
        </h1>
      </div>

      <div className="relative w-full h-full grid items-center justify-center mt-10 md:mt-0">
        <div className="absolute inset-0 bg-foreground to-transparent opacity-50 rounded-lg"></div>
        <Image
          src="/news/flash/blep-aug-2024.webp"
          alt="Tsu Flash"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
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

const FlashCarousel = [
  {
    title: "Tsu Flash",
    image: "/news/flash/blep-aug-2024.webp",
  },
];

export default News;
