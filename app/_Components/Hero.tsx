"use client";
import { CirclePause, CirclePlay, VolumeOff, Volume2 } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; 
    }
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
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
          
          loop
        >
          <source src={"https://cs50-tindahan.s3.ap-southeast-2.amazonaws.com/Personal/tsu-web/TSU-PROFILE.mp4"} type="video/mp4" />
        </video>
        <div className="absolute bottom-4 right-4 z-40 flex space-x-2">
          <button onClick={handlePlayPause} className="p-2 text-background hover:text-primary">
            {isPlaying ? <CirclePause size={50} /> : <CirclePlay size={50} />}
          </button>
          <button onClick={handleMuteUnmute} className="p-2 text-background hover:text-primary">
            {isMuted ? <VolumeOff size={50} /> : <Volume2 size={50} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
