"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Announcement = () => {
  return (
    <div className="min-h-screen bg-background text-foregorund p-10">
      <h1 className="md:text-5xl text-4xl font-serif mb-8 text-center text-red-800">
        Announcements
      </h1>
      <hr className="border-b-2 border-gray-300 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {announcementList.map((announcement, index) => (
          <div
            key={index}
            className="bg-background border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl "
          >
            <div className="relative h-48 md:h-64">
              <Image
                src={announcement.image}
                alt={announcement.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-serif font-bold mb-2 text-red-800">
                {announcement.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{announcement.date}</p>
              <p className="text-base text-gray-700 line-clamp-4">
                {announcement.description}
              </p>
              <Button className="mt-4">Read More</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="text-lg font-semibold text-red-800 border border-red-800 hover:bg-red-800 hover:text-white transition-colors duration-300 px-6 py-2 rounded-lg">
          More Announcements
        </button>
      </div>
    </div>
  );
};

interface Announcement {
  title: string;
  date: string;
  description: string;
  image: string;
}

const announcementList = [
  {
    title: "Nominate now for the Bayanihan Media Awards (BMA) 2024!",
    date: "Fri, Sep 13, 2024",
    description:
      "This award is a collaborative effort between the Philippine National Volunteer Service Coordinating Agency (PNVSCA), Philippine Information Agency (PIA), Philippine Association of State Universities and Colleges (PASUC), Department of Public Works and Highways (DPWH), and the Ayala Foundation Inc. (AFI), celebrating outstanding media practitioners and organizations that champion responsible and ethical media practices.",
    image: "/news/announcement/1.png",
  },
  {
    title:
      "OFFICIAL STATEMENT Re: Circulating Video of a Crime Incident at Lucinda Campus",
    date: "Sat, Sep 07, 2024",
    description:
      "A video maliciously painting the TSU Lucinda Campus, particularly the TSU Hotel, as a site of a heinous crime has been circulating among members of the TSU community through a messaging application. Such has been raised to the university administration, which has immediately launched investigations and inquiries to ascertain the truthfulness of this accusation thrown at the university.",
    image: "/news/announcement/2.webp",
  },
  {
    title: "Nominations for the BAYANIHAN MEDIA Awards are officially OPEN!",
    date: "Fri, Sep 06, 2024",
    description:
      "Do you know someone who made an outstanding impact on the community or industry? This is your moment to highlight their exceptional achievements and dedication.",
    image: "/news/announcement/3.jpg",
  },
  {
    title: "NOTICE TO THE PUBLIC | Change of Office Name of VPRDE and OTDTC",
    date: "Thu, Jul 04, 2024",
    description:
      "The office of the Vice President for Research Development and Extension shall be known as the Vice President for Research, Innovation, and Extension (VPRIE) effective June 26, 2024, by virtue of the TSU Board of Regents' approval through Resolution No. 56, s. 2024.",
    image: "/news/announcement/4.png",
  },
];

export default Announcement;
