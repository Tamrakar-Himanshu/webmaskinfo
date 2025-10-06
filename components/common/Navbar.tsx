"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link, Menu, X } from "lucide-react";
import logo from "@/public/logo6.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const navLinks = [
    { name: "About", href: "#aboutus" },
    { name: "Our Services", href: "#services" },
    { name: "How It Works", href: "#howitworks" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className=" mx-auto max-w-8xl px-4 sm:px-6 lg:px-14 mt-2">
          <div className="flex items-center justify-between h-16 lg:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt="Logo"
                className="h-18 w-full lg:h-20 lg:w-full"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <button
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => router.push("/contact")}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-gray-800 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${idx * 50 + 100}ms` : "0ms",
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsMenuOpen(false)}
              className={`w-50 flex justify-center mx-auto  mt-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen ? "400ms" : "0ms",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
