import React from "react";

const ServicesComponent: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 px-4">
          <h2 className="text-5xl md:text-7xl font-medium mb-4 leading-tight">
            <span className="text-gray-900">Our </span>
            <span className="text-orange-500 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            At Tech Monkey, we deliver innovative, tailored solutions to meet
            your business needs. Our experienced team ensures every solution
            addresses current demands and supports future growth. We specialize
            in key tech areas that help your business stay competitive and
            thrive in a digital-first world.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Large Card - Web Development (Spans vertically) */}
          <div className="lg:col-span-1 lg:row-span-2 bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                Web Development and Design
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unlock growth, efficiency, and innovation with future-ready
                technology solutions tailored to your unique needs.
              </p>
            </div>
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center border border-gray-200 min-h-[10rem]">
              <div className="w-32 h-20 bg-white rounded-lg border border-gray-300 shadow-lg relative">
                <div className="flex items-center p-1 border-b border-gray-300">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-2 space-y-2">
                  <div className="h-1 bg-gray-300 rounded w-full"></div>
                  <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-300 rounded w-5/6"></div>
                  <div className="flex space-x-1">
                    <div className="h-3 bg-blue-500 rounded w-8"></div>
                    <div className="h-3 bg-gray-300 rounded w-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Service Cards */}
          {[
            {
              title: "Mobile App Development",
              colorFrom: "from-orange-50",
              colorTo: "to-amber-50",
              icon: (
                <div className="w-12 h-18 bg-white rounded-lg border border-gray-300 relative shadow-lg">
                  <div className="w-full h-3 bg-gray-200 rounded-t-lg"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-400 rounded-full"></div>
                  <div className="p-1 space-y-1">
                    <div className="h-0.5 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-0.5 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              ),
            },
            {
              title: "Real Estate Solutions",
              colorFrom: "from-purple-50",
              colorTo: "to-pink-50",
              icon: (
                <div className="flex items-end space-x-1">
                  {[8, 12, 16, 10, 14, 18, 12, 8].map((height, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm"
                      style={{ width: "3px", height: `${height}px` }}
                    >
                      <div className="w-full h-0.5 bg-blue-300 rounded-t-sm"></div>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: "E-Commerce Solutions",
              colorFrom: "from-green-50",
              colorTo: "to-emerald-50",
              icon: (
                <div className="relative">
                  <div className="w-16 h-12 bg-white rounded border border-gray-300 shadow-lg">
                    <div className="flex items-center p-0.5 border-b border-gray-300">
                      <div className="flex space-x-0.5">
                        <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-1 space-y-1">
                      <div className="h-0.5 bg-gray-300 rounded w-full"></div>
                      <div className="flex justify-between">
                        <div className="h-0.5 bg-gray-300 rounded w-1/3"></div>
                        <div className="h-0.5 bg-green-500 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    $
                  </div>
                </div>
              ),
            },
            {
              title: "Tech Support Consulting",
              colorFrom: "from-blue-50",
              colorTo: "to-cyan-50",
              icon: (
                <div className="relative w-16 h-16">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const radian = (angle * Math.PI) / 180;
                    const x = Math.cos(radian) * 20;
                    const y = Math.sin(radian) * 20;
                    return (
                      <div key={i}>
                        <div
                          className="absolute top-1/2 left-1/2 bg-blue-300 origin-left"
                          style={{
                            width: "20px",
                            height: "0.5px",
                            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                          }}
                        ></div>
                        <div
                          className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full"
                          style={{
                            top: `calc(50% + ${y}px - 3px)`,
                            left: `calc(50% + ${x}px - 3px)`,
                          }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              ),
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unlock growth, efficiency, and innovation with future-ready
                  technology solutions tailored to your unique needs.
                </p>
              </div>
              <div
                className={`h-24 bg-gradient-to-br ${service.colorFrom} ${service.colorTo} rounded-xl flex items-center justify-center border border-gray-200`}
              >
                {service.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
