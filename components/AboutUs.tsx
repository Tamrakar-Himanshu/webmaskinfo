"use client";
import React, { useState, useEffect, useRef } from "react";

const AboutUsSection = () => {
  const [totalClients, setTotalClients] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
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

    setTimeout(() => animateCounter(setTotalClients, 50), 200);
    setTimeout(() => animateCounter(setTotalProjects, 200), 400);
  }, [isVisible]);

  return (
    <div className="bg-white pt-8 sm:py-24 px-6">
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
              <p className="text-2xl md:text-3xl font-semibold text-gray-700 mt-6 leading-snug">
                Innovative software solutions that drive your business forward
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 text-base leading-relaxed">
                At WebMaskGlobal, we are passionate about crafting innovative
                software solutions that propel businesses into the future.
                Founded on the principles of excellence, creativity, and
                collaboration, we specialize in developing custom software
                tailored to meet the unique needs of each client.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Our team of experienced developers, designers, and strategists
                work in harmony to transform complex challenges into elegant,
                streamlined solutions. Whether you&apos;re a startup bringing a
                groundbreaking idea to life or an established enterprise
                optimizing operations, we possess the expertise to turn your
                vision into reality.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                We believe technology should empower, not complicate. That&apos;s
                why we focus on creating user-friendly, scalable, and secure
                software that enhances productivity and fuels sustainable
                growth. From initial concept to final deployment, we partner
                with you every step of the way, ensuring our solutions not only
                meet but exceed your expectations.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                At WebMaskGlobal, we&apos;re more than just a software
                company—we&apos;re your dedicated partner in innovation,
                committed to helping you achieve your goals and unlock new
                opportunities. Let&apos;s build the future together.
              </p>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 sm:gap-16 mt-0 sm:mt-20">
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
            {/* <div className="sm:col-span-2 bg-gray-50 rounded-xl p-12 border border-gray-200 hover:shadow-lg transition-shadow duration-300 min-h-[180px]">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;