import React from "react";
import Image from "next/image";

const Associations: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-8"
      id="associations"
    >
      <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
        Our Associations
      </h2>

      <div
        className="
          flex flex-wrap 
          items-center justify-center 
          gap-12 sm:gap-16 md:gap-20 lg:gap-28 xl:gap-36
        "
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS"
          width={180}
          height={70}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
          alt="Microsoft Azure"
          width={180}
          height={70}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
          alt="Microsoft"
          width={180}
          height={70}
          className="h-8 sm:h-12 md:h-14 lg:h-16 w-auto"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/GoDaddy_logo.svg"
          alt="GoDaddy"
          width={180}
          height={70}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
          alt="OpenAI"
          width={180}
          height={70}
          className="h-8 sm:h-12 md:h-14 lg:h-16 w-auto"
        />
        <Image
          src="https://www.deepseek.com/favicon.ico"
          alt="DeepSeek"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
          width={180}
          height={70}
        />
      </div>
    </div>
  );
};

export default Associations;
