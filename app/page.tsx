"use client";
import Bento from "./_Components/Bento";
import CampusNews from "./_Components/CampusNews";
import Explore from "./_Components/Explore";
import Hero from "./_Components/Hero";
import Navbar from "./_Components/Navbar";
import News from "./_Components/News";
import Announcement from "./_Components/Announcement";
import Footer from "./_Components/Footer";
import React, { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Hero />
      </div>

      <div className="w-full h-auto z-10 relative mt-[100vh] bg-background">
        <Navbar />
        <Explore />
        <News />
        <CampusNews />
        <Announcement />
        <Bento />
        <Footer />
      </div>

      <div>
        {isVisible && (
          <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-background px-20 py-5 flex justify-between items-center z-50">
            <p>
              This is an unofficial website of Tarlac State University. This
              website is used for case study purposes only, is not affiliated
              with the university, and is not an official source of information.
              For the official website, please visit{" "}
              <a
                href="https://www.tsu.edu.ph"
                className="underline text-blue-400"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <button onClick={handleClose} className="ml-4 text-white">
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
