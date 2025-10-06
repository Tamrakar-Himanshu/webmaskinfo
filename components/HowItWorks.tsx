"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";
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
      title: "Discovery & Consultation",
      description:
        "We start by understanding your business goals, challenges, and technical requirements. Our expert team conducts a thorough analysis to identify the best technology solutions tailored to your specific needs.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop",
    },
    {
      id: 2,
      title: "Planning & Strategy",
      description:
        "We create a detailed roadmap and technical architecture for your project. Our team defines milestones, timelines, and resources to ensure a smooth development process aligned with your business objectives.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
    },
    {
      id: 3,
      title: "Design & Development",
      description:
        "Our skilled developers and designers work collaboratively to bring your vision to life. We follow agile methodologies, keeping you involved throughout the process with regular updates and demonstrations.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      description:
        "We rigorously test every aspect of your solution to ensure it meets the highest standards. Our QA team conducts comprehensive testing including functionality, security, and performance optimization.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    },
    {
      id: 5,
      title: "Launch & Support",
      description:
        "After successful deployment, we provide ongoing support, maintenance, and optimization. Our commitment doesn't end at launch—we ensure your technology continues to deliver value and adapt to your evolving needs.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
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
    <div className="bg-[#F5F7F5] pt-20" id="howitworks">
      <div className="container mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-center text-slate-900 tracking-tight">
            How it <span className="text-[#D97F11] font-normal">Works</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#D97F11] to-[#BF5F0B] rounded-full"></div>
          <p className="text-center text-gray-600 max-w-3xl mt-6 px-4 text-base sm:text-lg leading-relaxed">
            Our streamlined process ensures your project is delivered on time,
            within budget, and exceeds expectations. From initial consultation
            to ongoing support, we&apos;re with you every step of the way.
          </p>
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
                  {/* Decorative circles - Behind video */}
                  {index === 0 && (
                    <>
                      <div className="absolute top-0 left-0 w-24 h-24 bg-[#F4C9A0] rounded-full -translate-x-8 -translate-y-8 opacity-70 z-0" />
                      <div className="absolute bottom-16 left-8 w-20 h-20 bg-[#7EC4A8] rounded-full opacity-60 z-0" />
                      <div className="absolute top-1/3 right-0 w-16 h-16 bg-[#9DC88D] rounded-full translate-x-8 opacity-70 z-0" />
                      <div className="absolute bottom-8 right-16 w-24 h-24 bg-[#B8D4A8] rounded-full opacity-60 z-0" />
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="absolute top-8 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-[#F4D35E] rounded-full translate-x-8 sm:translate-x-12 opacity-60 z-0" />
                      <div className="absolute bottom-20 right-8 w-10 h-10 sm:w-20 sm:h-20 bg-[#A8DADC] rounded-full opacity-70 z-0" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F1FAEE] rounded-full -translate-x-8 translate-y-8 opacity-80 z-0" />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="absolute top-0 left-8 w-28 h-28 bg-[#90E0A8] rounded-full -translate-y-10 opacity-60 z-0" />
                      <div className="absolute bottom-12 left-0 w-16 h-16 bg-[#FFD166] rounded-full -translate-x-8 opacity-70 z-0" />
                      <div className="absolute top-1/3 right-0 w-20 h-20 bg-[#EF8354] rounded-full translate-x-6 sm:translate-x-10 opacity-60 z-0" />
                      <div className="absolute bottom-0 right-12 w-24 h-24 bg-[#A8DADC] rounded-full translate-y-8 opacity-70 z-0" />
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#C4B5FD] rounded-full translate-x-8 -translate-y-8 opacity-70 z-0" />
                      <div className="absolute bottom-16 right-8 w-20 h-20 bg-[#FCA5A5] rounded-full opacity-60 z-0" />
                      <div className="absolute top-1/3 left-0 w-16 h-16 bg-[#93C5FD] rounded-full -translate-x-8 opacity-70 z-0" />
                      <div className="absolute bottom-8 left-16 w-24 h-24 bg-[#FBCFE8] rounded-full opacity-60 z-0" />
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <div className="absolute top-8 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-[#FDE68A] rounded-full -translate-x-8 sm:-translate-x-12 opacity-60 z-0" />
                      <div className="absolute bottom-20 left-8 w-10 h-10 sm:w-20 sm:h-20 bg-[#A7F3D0] rounded-full opacity-70 z-0" />
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#BFDBFE] rounded-full translate-x-8 translate-y-8 opacity-80 z-0" />
                      <div className="absolute top-1/4 right-0 w-16 h-16 bg-[#FED7AA] rounded-full translate-x-6 opacity-70 z-0" />
                    </>
                  )}

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
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D97F11] to-[#BF5F0B] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {section.id}
                      </div>
                      <div className="h-0.5 w-16 bg-gradient-to-r from-[#D97F11] to-transparent"></div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 leading-tight">
                      {section.title}
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed font-light">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>

              {index < 4 && (
                <div className="flex justify-center pt-8">
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

      
    </div>
  );
};

export default HowItWorks;
