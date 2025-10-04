import React from "react";
import Image from "next/image";
import googlecloud from "@/public/assets/googlecloud.png";
import nvidia from "@/public/assets/nvidia.png";
import salesforcce from "@/public/assets/salesforcce.png";

const Associations: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#FFFDF6]">
      <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
        Our Associations
      </h2>

      <div
        className="
          flex flex-wrap 
          items-center justify-center 
          gap-10 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40
        "
      >
        <Image
          src={googlecloud}
          alt="Google Cloud"
          width={160}
          height={80}
          className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS"
          width={160}
          height={60}
          className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
        />
        <Image
          src={salesforcce}
          alt="Salesforce"
          width={160}
          height={80}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
          alt="SAP"
          width={160}
          height={60}
          className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
        />
        <Image
          src={nvidia}
          alt="NVIDIA"
          width={160}
          height={80}
          className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
        />
      </div>
    </div>
  );
};

export default Associations;
