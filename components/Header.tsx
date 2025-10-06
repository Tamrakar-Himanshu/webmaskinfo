"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { CircleArrowRight } from "lucide-react";
import Navbar from "./common/Navbar";
import Image from "next/image";

interface CardType {
  id: number;
  title: string;
  subtitle: string;
  word: string;
  bgColor: string;
  bottomBg: string;
  fillColor: string;
  image: string;
}

const HeroSection: React.FC = () => {
  // Cards array declared first
  const cards: CardType[] = useMemo(
    () => [
      {
        id: 0,
        title: "Web Development",
        subtitle: "Custom websites",
        word: "innovative",
        bgColor: "bg-blue-600",
        bottomBg: "bg-blue-300",
        fillColor: "fill-blue-600",
        image: "https://illustrations.popsy.co/yellow/web-design.svg",
      },
      {
        id: 1,
        title: "Mobile Apps",
        subtitle: "iOS & Android",
        word: "powerful",
        bgColor: "bg-purple-600",
        bottomBg: "bg-purple-400",
        fillColor: "fill-purple-600",
        image: "https://illustrations.popsy.co/pink/youtube-app.svg",
      },
      {
        id: 2,
        title: "Cloud Solutions",
        subtitle: "Scalable infrastructure",
        word: "reliable",
        bgColor: "bg-cyan-600",
        bottomBg: "bg-cyan-300",
        fillColor: "fill-cyan-600",
        image: "https://illustrations.popsy.co/sky/man-riding-a-rocket.svg",
      },
      {
        id: 3,
        title: "AI Integration",
        subtitle: "Smart automation",
        word: "intelligent",
        bgColor: "bg-indigo-600",
        bottomBg: "bg-indigo-400",
        fillColor: "fill-indigo-600",
        image: "https://illustrations.popsy.co/pink/designer.svg",
      },
    ],
    []
  );

  // States
  const [activeCard, setActiveCard] = useState<number>(0);
  const [displayWord, setDisplayWord] = useState(cards[0].word);
  const [nextWord, setNextWord] = useState<string | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const cardsRef = useRef<HTMLDivElement | null>(null);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  useEffect(() => {
    if (cards[activeCard].word === displayWord) return;

    setNextWord(cards[activeCard].word);
    setIsRolling(true);

    const timeout = setTimeout(() => {
      setDisplayWord(cards[activeCard].word);
      setNextWord(null);
      setIsRolling(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [activeCard, cards, displayWord]);

  return (
    <>
      {/* Hero Section */}
      <Navbar />
      <div className="bg-gradient-to-b from-slate-8 00 to-blue-900">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-12 px-8 lg:px-16 pt-4 sm:pt-10 items-center max-w-7xl mx-auto container mt-14"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center mt-4 sm:mt-10  ">
            <h1 className="sm:text-left text-center text-[48px] lg:text-8xl font-extrabold mb-2 sm:mb-8 text-white">
              Technology That&apos;s{" "}
              <span className="inline-block sm:block relative h-[70px] sm:h-[120px] overflow-hidden min-w-[330px]">
                <span
                  className="absolute top-0 left-[-1] sm:left-0 w-full text-slate-800 transition-transform duration-1000 ease-out"
                  style={{
                    transform: isRolling
                      ? "translateY(90%)"
                      : "translateY(10%)",
                  }}
                >
                  <span className="block h-[80px]">{displayWord}</span>
                  {nextWord && (
                    <span className="block h-[80px]">{nextWord}</span>
                  )}
                </span>
              </span>
            </h1>

            <p className="text-white text-[20px] font-normal sm:font-semibold lg:text-2xl sm:text-left text-center">
              What type of service are you looking for?
            </p>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Mobile Cards */}
            <div className="flex flex-col gap-4 lg:hidden mt-8">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`${card.bgColor} rounded-xl overflow-hidden px-4 flex items-center justify-between shadow-lg`}
                >
                  <div className="flex items-center justify-around gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="text-xs font-semibold text-white">
                        {card.subtitle}c
                      </p>
                    </div>
                    <div>
                      <CircleArrowRight className="text-white w-5 mx-1" />
                    </div>
                  </div>
                  <div className="relative flex-shrink-0 w-38 sm:w-52 h-28 bg-white/10 rounded-lg">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Carousel */}
            <div className="hidden lg:block">
              <div className="overflow-hidden mt-10">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeCard * 100}%)` }}
                >
                  {cards.map((card) => (
                    <div key={card.id} className="min-w-full px-4">
                      <div
                        className={`${card.bgColor} rounded-3xl overflow-hidden shadow-2xl`}
                      >
                        <div className="p-8 pb-30">
                          <h2 className="text-white text-4xl font-light mb-4">
                            {card.title}
                          </h2>
                          <div className="flex items-center gap-2 text-white mb-8">
                            <span className="text-lg">{card.subtitle}</span>
                            <CircleArrowRight className="w-8 h-8" />
                          </div>
                        </div>
                        <div
                          className={`${card.bottomBg} h-64 relative overflow-hidden`}
                        >
                          <svg
                            className="absolute top-0 left-0 w-full"
                            style={{ transform: "translateY(-1px)" }}
                            viewBox="0 0 1200 80"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0,40 C300,80 600,0 900,40 C1050,60 1150,40 1200,40 L1200,0 L0,0 Z"
                              className={card.fillColor}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="relative w-full h-full">
                              <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {cards.map((card, index) => (
                  <button
                    key={card.id}
                    onClick={() => setActiveCard(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeCard
                        ? "w-8 bg-white"
                        : "w-2 bg-white bg-opacity-50 hover:bg-opacity-75"
                    }`}
                    aria-label={`Go to ${card.title} card`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dividers */}
        <div>
          {/* Mobile Divider */}
          <svg
            className="w-full block md:hidden"
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,30 C100,50 200,10 300,30 C350,40 380,30 400,35 L400,60 L0,60 Z"
              className="fill-white"
            />
          </svg>
          {/* Desktop Divider */}
          <svg
            className="w-full hidden md:block"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,50 C300,80 600,20 900,50 C1050,70 1150,50 1200,60 L1200,100 L0,100 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
