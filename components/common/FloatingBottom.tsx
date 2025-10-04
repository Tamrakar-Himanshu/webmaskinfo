"use client";
import { ArrowBigUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const FloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-6 right-6 z-50 bg-[#3c48f3] text-white rounded-full shadow-lg hover:bg-[#3b0aec] transition-all duration-300 w-16 h-16 flex items-center justify-center text-sm font-semibold ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <ArrowBigUp />
    </button>
  );
};

export default FloatingButton;