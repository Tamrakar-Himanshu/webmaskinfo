import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 px-6 md:px-16 py-12 border-t border-gray-200">
      {/* ===== Top CTA Section ===== */}
      <div className="max-w-7xl mx-auto text-center md:text-left px-4 md:px-12">
        <h2 className="text-3xl font-semibold text-gray-900">
          Do you have <br /> any questions?
        </h2>
        <p className="mt-3 text-gray-600">
          Feel free to send us your questions or request a free consultation.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
          SEND A MESSAGE
        </button>
      </div>

      <hr className="my-10 border-gray-300" />

      {/* ===== Bottom Section ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
        {/* LEFT COLUMN */}
        <div className="md:flex-1">
          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 md:gap-12 text-sm text-gray-600 mb-10">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              Sale <span aria-hidden>🔥</span>
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Contacts
            </a>
          </nav>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-12">
            {/* Phone + Email */}
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">Sign up</p>
              <p className="text-gray-900 text-sm font-medium">+1 890 123-52-61</p>

              <div className="mt-6">
                <p className="text-xs text-gray-500 uppercase mb-2">Email</p>
                <p className="text-gray-900 text-sm font-medium">
                  info@logoipsum.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">
                Opening hours
              </p>
              <p className="text-gray-900 text-sm font-medium">24/7</p>
            </div>

            {/* Spacer */}
            <div className="hidden sm:block" aria-hidden></div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="mt-12 md:mt-0 md:w-64 flex flex-col items-end">
          {/* Logo */}
          <div className="w-10 h-10 mb-4 text-gray-400" aria-hidden>
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none">
              <g fill="currentColor">
                <circle cx="6" cy="6" r="1.6" />
                <circle cx="12" cy="6" r="1.6" />
                <circle cx="18" cy="6" r="1.6" />
                <circle cx="6" cy="12" r="1.6" />
                <circle cx="12" cy="12" r="1.6" />
                <circle cx="18" cy="12" r="1.6" />
                <circle cx="6" cy="18" r="1.6" />
                <circle cx="12" cy="18" r="1.6" />
                <circle cx="18" cy="18" r="1.6" />
              </g>
            </svg>
          </div>

          {/* Tagline */}
          <p className="text-right text-sm leading-relaxed text-gray-600">
            Don&apos;t know where to get your car tinted?
            <br />
            Logoipsum — practical, safe, and affordable.
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-500 mt-4">© 2023 — Copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;