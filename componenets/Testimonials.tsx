"use client";

import React, { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  // Sample testimonial data
  const testimonialsData: Testimonial[] = [
    {
      id: 2,
      name: "Jessica Lee",
      title: "Project Lead",
      image: "https://via.placeholder.com/40",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 4,
    },
    {
      id: 3,
      name: "David Chen",
      title: "CTO at Tech Solutions",
      image: "https://via.placeholder.com/40",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    {
      id: 4,
      name: "Emily White",
      title: "Operations Director",
      image: "https://via.placeholder.com/40",
      quote:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      rating: 4,
    },
    {
      id: 5,
      name: "Alex Johnson",
      title: "Data Scientist",
      image: "https://via.placeholder.com/40",
      quote:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
      rating: 5,
    },
    {
      id: 6,
      name: "Sarah Kim",
      title: "UI/UX Designer",
      image: "https://via.placeholder.com/40",
      quote:
        "Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
      rating: 4,
    },
  ];

  // Function to render star ratings
  const renderStars = (rating: number): JSX.Element => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <section
      className="text-gray-900 py-20 pl-10 hide-pagination relative container mx-auto"
      style={{
        // background: "linear-gradient(to bottom, #ecf1eebc 70%, #cbcccc)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fade effect overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          background:
            "radial-gradient(circle at bottom left, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 40%), radial-gradient(circle at bottom right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 40%)",
          pointerEvents: "none",
        }}
      />

      <div className="w-full mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-center text-slate-900 tracking-tight pb-5 sm:pb-15">
          Client <span className="text-[#D97F11] font-normal ">Reviews</span>
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={2.4}
          spaceBetween={24}
          loop={true}
          pagination={{ clickable: false }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 12 },
            768: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.4, spaceBetween: 24 },
          }}
          className="mySwiper"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="pb-16 flex items-stretch"
            >
              <div
                className="bg-white rounded-2xl p-8 relative overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                style={{ minHeight: "400px", maxHeight: "550px" }}
              >
                {/* Quote icon - large and faded */}
                <div className="absolute top-8 right-8 text-blue-100 opacity-50 text-8xl font-bold select-none z-0">&quot;</div>

                {/* Testimonial Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-4 object-cover border-2 border-blue-200"
                      width={40}
                      height={40}
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="mt-auto">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
