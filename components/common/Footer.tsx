import React from "react";
import Image from "next/image";
import logo from "@/public/logo6.png";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      {/* ===== Main Footer Content ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Top Section - Logo & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-700">
          {/* Logo & Description */}
          <div className="lg:col-span-5">
            {/* <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 text-blue-500">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none">
                  <g fill="currentColor">
                    <circle cx="6" cy="6" r="1.8" />
                    <circle cx="12" cy="6" r="1.8" />
                    <circle cx="18" cy="6" r="1.8" />
                    <circle cx="6" cy="12" r="1.8" />
                    <circle cx="12" cy="12" r="1.8" />
                    <circle cx="18" cy="12" r="1.8" />
                    <circle cx="6" cy="18" r="1.8" />
                    <circle cx="12" cy="18" r="1.8" />
                    <circle cx="18" cy="18" r="1.8" />
                  </g>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">
                WebmaskInfoTech
              </span>
            </div> */}
            <div className="mx-auto">
              <Image src={logo} alt="logo" className="w-full sm:w-96 h-42" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Empowering businesses through innovative technology solutions and
              digital transformation. Building the future, one line of code at a
              time.
            </p>
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* CTA Box */}
          <div className="lg:col-span-7 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 lg:p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6 text-sm lg:text-base">
              Let&apos;s discuss how we can help transform your business with
              cutting-edge technology solutions.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg transform hover:scale-115"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Middle Section - Links & Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 py-12 border-b border-slate-700">
          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Solutions
              </a>
              <a
                href="#associations"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Industries
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Case Studies
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Careers
              </a>
              <a
                href="#aboutus"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                About Us
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">
                  Sales Inquiries
                </p>
                <a
                  href="tel:+918839536713"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  +91 8839536713
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Email</p>
                <a
                  href="mailto:info@webmaskglobal.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm break-all"
                >
                  info@webmaskglobal.com
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Support</p>
                <p className="text-gray-300 text-sm">24/7 Available</p>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="sm:col-span-2 lg:col-span-6">
            <h4 className="text-white font-semibold text-lg mb-4">
              Our Locations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-start gap-2 mb-2">
                  <svg
                    className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      Bengaluru
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      3rd Street, 6th Floor, Jakkuru Layout, Bengaluru,
                      Karnataka 560092
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-start gap-2 mb-2">
                  <svg
                    className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      Bengaluru
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Awfis, 5th Floor, Jakkuru Layout, Bengaluru, Karnataka
                      560092
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-start gap-2 mb-2">
                  <svg
                    className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      Hyderabad
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Ganesh Building, East SR Nagar, Ameerpet, Telangana 500016
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-start gap-2 mb-2">
                  <svg
                    className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      Madhya Pradesh
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Unchehra District, Satna, Madhya Pradesh 485661
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 WebMaskGlobal. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
