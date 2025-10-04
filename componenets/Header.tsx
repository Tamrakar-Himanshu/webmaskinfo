"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { CircleArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import mobdivider from "@/public/assets/divider-main-1-phone.png";
import divider from "@/public/assets/divider-main-1.png";

// Import your card images
import individualImg from "@/public/assets/individual.png";
import couplesImg from "@/public/assets/couple.png";
import teenImg from "@/public/assets/teen.png";
import familyImg from "@/public/assets/teen.png";

import Navbar from "./common/Navbar";

interface CardType {
  id: number;
  title: string;
  subtitle: string;
  word: string;
  bgColor: string;
  bottomBg: string;
  image: StaticImageData; // Changed from string to StaticImageData
  fillColor: string;
}

const HeroSection: React.FC = () => {
  // Cards array declared first
  const cards: CardType[] = useMemo(
    () => [
      {
        id: 0,
        title: "Individual",
        subtitle: "For myself",
        word: "happy",
        bgColor: "bg-emerald-700",
        bottomBg: "bg-yellow-300",
        image: individualImg,
        fillColor: "fill-emerald-700",
      },
      {
        id: 1,
        title: "Couples",
        subtitle: "For my partner",
        word: "loved",
        bgColor: "bg-teal-600",
        bottomBg: "bg-teal-500",
        image: couplesImg,
        fillColor: "fill-teal-600",
      },
      {
        id: 2,
        title: "Teen",
        subtitle: "For my child",
        word: "supported",
        bgColor: "bg-amber-700",
        bottomBg: "bg-yellow-300",
        image: teenImg,
        fillColor: "fill-amber-700",
      },
      {
        id: 3,
        title: "Family",
        subtitle: "For my family",
        word: "connected",
        bgColor: "bg-purple-700",
        bottomBg: "bg-purple-400",
        image: familyImg,
        fillColor: "fill-purple-700",
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
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#712D13] to-[#BF5F0B]">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-12 px-8 lg:px-16 pt-4 sm:pt-10 pb-16 sm:pb-12 items-center max-w-7xl mx-auto container mt-14"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center mt-10">
            <h1 className="sm:text-left text-center text-[28px] lg:text-7xl font-extrabold mb-2 sm:mb-8 text-white">
              You Deserve{" "}
              <span className="inline-block sm:block relative h-[70px] sm:h-[85px] overflow-hidden min-w-[220px]">
                <span
                  className="absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out"
                  style={{
                    transform: isRolling
                      ? "translateY(-120%)"
                      : "translateY(5%)",
                  }}
                >
                  <span className="block h-[60px]">{displayWord}</span>
                  {nextWord && (
                    <span className="block h-[60px]">{nextWord}</span>
                  )}
                </span>
              </span>
            </h1>

            <p className="text-white text-[20px] font-normal sm:font-semibold lg:text-2xl sm:text-left text-center">
              What type of therapy are you looking for?
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
                      <p className="text-md font-semibold text-white">
                        {card.subtitle}
                      </p>
                    </div>
                    <div>
                      <CircleArrowRight className="text-white w-5" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-52 h-28">
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-lg"
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
                            <Image
                              src={card.image}
                              alt={card.title}
                              className="w-full object-cover"
                            />
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
          <Image
            src={mobdivider}
            alt="mobile divider"
            className="w-full block md:hidden"
          />
          <Image
            src={divider}
            alt="desktop divider"
            className="w-full hidden md:block"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;