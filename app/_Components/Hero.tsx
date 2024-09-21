"use client";
import React, { useRef, useEffect } from "react";


const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Set initial volume to 50%
    }
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <section className="bg-gray-200 min-h-screen grid">
      <div className="relative w-full h-screen overflow-hidden shadow-inner-custom">
        <div className="absolute top-0 left-0 w-full h-full shadow-[inset_0px_-105px_169px_60px_#000] z-30"></div>
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          preload="none"
          autoPlay
          muted
          loop
        >
          <source src={process.env.NEXT_PUBLIC_VIDEO_LINK} type="video/mp4" />
        </video>
        <div className="absolute bottom-4 right-4 z-40">
          <button
            onClick={handlePlayPause}
            className="mr-2 p-2 bg-blue-500 text-white"
          >
            Play/Pause
          </button>
          <button
            onClick={handleMuteUnmute}
            className="p-2 bg-blue-500 text-white"
          >
            Mute/Unmute
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
