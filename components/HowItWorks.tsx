"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";
import girl from "@/public/assets/divider-main-4.png";
import Image from "next/image";

interface Section {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

const HowItWorks: React.FC = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [autoPlayingVideos, setAutoPlayingVideos] = useState<Set<number>>(
    new Set()
  );
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const sections: Section[] = [
    {
      id: 1,
      title: "Get matched to the best therapist for you",
      description:
        "Answer a few questions to find a qualified therapist who fits your needs and preferences. Tap into the largest online network of credentialed providers.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=450&fit=crop",
    },
    {
      id: 2,
      title: "Communicate your way",
      description:
        "Talk to your therapist however you feel comfortable — text, chat, audio, or video. You can expect the same professionalism as an in-office therapist.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&h=450&fit=crop",
    },
    {
      id: 3,
      title: "Therapy when you need it",
      description:
        "You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=450&fit=crop",
    },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoId = Number(entry.target.getAttribute("data-video-id"));

          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setAutoPlayingVideos((prev) => new Set(prev).add(videoId));
            videoRefs.current[videoId]?.play();
          } else {
            setAutoPlayingVideos((prev) => {
              const newSet = new Set(prev);
              newSet.delete(videoId);
              return newSet;
            });
            if (videoRefs.current[videoId]) {
              videoRefs.current[videoId]!.pause();
              videoRefs.current[videoId]!.currentTime = 0;
            }
          }
        });
      },
      { threshold: [0.5], rootMargin: "-20% 0px -20% 0px" }
    );

    const videoElements = document.querySelectorAll("[data-video-container]");
    videoElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleMouseEnter = (sectionId: number) => {
    if (window.innerWidth >= 768) {
      setHoveredVideo(sectionId);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setHoveredVideo(null);
    }
  };

  const isVideoPlaying = (sectionId: number) => {
    return hoveredVideo === sectionId || autoPlayingVideos.has(sectionId);
  };

  return (
    <div className="bg-[#F5F7F5] pt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-center text-slate-900 tracking-tight">
            How it <span className="text-[#D97F11] font-normal">Works</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#D97F11] to-[#BF5F0B] rounded-full"></div>
        </div>

        <div className="space-y-12 sm:space-y-32 px-8 sm:px-20">
          {sections.map((section, index) => (
            <div key={section.id}>
              <div
                className={`grid md:grid-cols-2 gap-16 items-center${
                  index % 2 === 1 ? " md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`relative flex items-center justify-center z-0 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full max-w-md z-10"
                    onMouseEnter={() => handleMouseEnter(section.id)}
                    onMouseLeave={handleMouseLeave}
                    data-video-container
                    data-video-id={section.id}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          isVideoPlaying(section.id)
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                      >
                        <Image
                          src={section.thumbnail}
                          alt={section.title}
                          fill
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 transition-transform duration-300 group-hover:scale-110">
                            <Play
                              className="w-8 h-8 text-white ml-1"
                              fill="white"
                            />
                          </div>
                        </div>
                      </div>

                      <video
                        ref={(el) => {
                          videoRefs.current[section.id] = el;
                        }}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${
                          isVideoPlaying(section.id)
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        muted
                        loop
                        playsInline
                      >
                        <source src={section.videoUrl} type="video/mp4" />
                      </video>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>

                <div
                  className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 leading-tight">
                      {section.title}
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed font-light">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>

              {index < 2 && (
                <div className="flex justify-around pt-8">
                  <svg
                    className="w-12 h-16 text-[#D97F11]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 36"
                  >
                    <path
                      d="M12 4 L12 28 M12 28 L6 22 M12 28 L18 22"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-50 sm:h-100">
        <Image src={girl} alt="divider" fill className="object-cover container mx-auto" />
      </div>
    </div>
  );
};

export default HowItWorks;