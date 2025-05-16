"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import HeroVideo from "./HeroVideo";
import HeroBanner from "./HeroBanner";
import HeroButtons from "./HeroButtons";
import PlayPauseButton from "./PlayPauseButton";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <section id="home" className="scroll-mt-32">
        <HeroBanner />

        <section
          aria-labelledby="hero-heading"
          className="relative min-h-[calc(100vh-8rem)] overflow-hidden"
        >
          {/* Video */}
          <div className="absolute inset-0 z-0">
            <HeroVideo
              videoRef={videoRef}
              className="h-full w-full brightness-50 object-cover"
              poster="/heroImg.webp"
              ariaLabel="Video som visar barn som leker med träklossar"
            />
          </div>
          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
            {/* Play/Pause button */}
            <div className="absolute top-5 right-5 z-30">
              <PlayPauseButton
                isPlaying={isPlaying}
                onClick={togglePlay}
                ariaLabel={isPlaying ? "Pausa video" : "Spela video"}
              />
            </div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="
              text-3xl md:text-4xl lg:text-5xl
              mb-6 font-[350]
              text-white drop-shadow-lg
              max-w-3xl
            "
            >
              Liten barngrupp, stor omtanke – en lugnare start i livet i trygg
              hemmiljö
            </motion.h1>

            {/* Buttons */}
            <div className="w-full max-w-md">
              <HeroButtons />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
