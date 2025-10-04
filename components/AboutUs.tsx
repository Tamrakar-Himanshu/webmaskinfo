"use client";
import React, { useState, useEffect, useRef } from "react";

const AboutUsSection = () => {
  const [totalClients, setTotalClients] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [testimonials, setTestimonials] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounter = (
      setter: (value: number) => void,
      target: number,
      duration = 2000
    ) => {
      let start = 0;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    setTimeout(() => animateCounter(setTotalClients, 77), 200);
    setTimeout(() => animateCounter(setTotalProjects, 77), 400);
    setTimeout(() => animateCounter(setTestimonials, 77), 600);
  }, [isVisible]);

  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-5xl md:text-7xl font-normal mb-4 leading-tight">
                <span className="text-gray-900">About </span>
                <span className="text-orange-500 relative inline-block">
                  Us
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500"></span>
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 text-base leading-relaxed">
                Tech Monkey is a dynamic tech company founded by Varun, an
                Oxford MBA with extensive expertise in entrepreneurship, and
                Jainam, a visionary entrepreneur who co-built and sold their IT
                startup to Amazon alongside Varun. Together, they bring over
                eight years of combined experience in IT, sales, and CRM,
                creating a foundation of innovation and excellence.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Headquartered in Dubai, with offices in the United Kingdom and
                the United States, Tech Monkey specializes in developing
                customized technology solutions tailored to the needs of modern
                businesses. Our mission is to empower organizations to thrive in
                a digital-first world by streamlining processes, enhancing
                customer experiences, and driving sustainable growth.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                At Tech Monkey, Varun and Jainam&apos;s unique blend of
                technical expertise and strategic insight fuels our commitment
                to delivering cutting-edge solutions. Together, they lead a team
                dedicated to shaping the future of IT with creativity,
                precision, and impact.
              </p>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-0 sm:mt-20">
            {/* Total Clients Card */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-500 text-xs mb-2 font-medium uppercase tracking-wider">
                Total Clients
              </h3>
              <div className="text-4xl font-bold text-gray-900">
                {totalClients}
                <span className="text-gray-400">+</span>
              </div>
            </div>

            {/* Total Projects Card */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-500 text-xs mb-2 font-medium uppercase tracking-wider">
                Total Projects
              </h3>
              <div className="text-4xl font-bold text-gray-900">
                {totalProjects}
                <span className="text-gray-400">+</span>
              </div>
            </div>

            {/* Testimonials Card - Spans 2 columns */}
            <div className="sm:col-span-2 bg-gray-50 rounded-xl p-12 border border-gray-200 hover:shadow-lg transition-shadow duration-300 min-h-[180px]">
              <div className="flex items-center justify-between h-full">
                <div>
                  <h3 className="text-gray-500 text-xs mb-2 font-medium uppercase tracking-wider">
                    Testimonials
                  </h3>
                  <div className="text-4xl font-bold text-gray-900">
                    {testimonials}
                    <span className="text-gray-400">+</span>
                  </div>
                </div>
                <div>
                  <svg
                    className="w-10 h-10 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
