"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import girl from "@/public/assets/divider-main-4.png";
import { useRouter } from "next/navigation";  
import Image from "next/image";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();
  const faqs = [
    {
      question: "What services does your IT company provide?",
      answer:
        "We offer a comprehensive range of IT services including custom software development, web and mobile app development, cloud solutions, cybersecurity, IT consulting, system integration, DevOps, and ongoing technical support. Our team specializes in delivering tailored solutions that align with your business objectives.",
    },
    {
      question: "How experienced is your development team?",
      answer:
        "Our team consists of highly skilled developers, engineers, and IT professionals with an average of 8+ years of industry experience. Each team member is certified in their respective technologies and stays updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with a wide range of modern technologies including React, Node.js, Python, Java, .NET, Angular, Vue.js, AWS, Azure, Google Cloud, Docker, Kubernetes, and more. We also specialize in emerging technologies like AI/ML, blockchain, IoT, and data analytics to help businesses stay competitive.",
    },
    {
      question: "How much does a typical project cost?",
      answer:
        "Project costs vary based on scope, complexity, technology stack, and timeline. Small projects may start from $10,000, while enterprise solutions can range from $50,000 to $500,000+. We offer flexible pricing models including fixed-price, time & material, and dedicated team arrangements. Contact us for a detailed quote tailored to your specific requirements.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines depend on complexity and requirements. A simple website may take 4-6 weeks, while a complex enterprise application could take 6-12 months or more. After understanding your needs, we provide a detailed project timeline with clear milestones and deliverables.",
    },
    {
      question: "How do you ensure project quality and security?",
      answer:
        "We follow industry-standard development practices including Agile/Scrum methodologies, code reviews, automated testing, and CI/CD pipelines. Security is built into every phase with regular audits, penetration testing, and compliance with standards like ISO 27001, GDPR, and SOC 2. We also provide ongoing support and maintenance.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, security patches, and feature enhancements. We provide flexible support packages ranging from basic maintenance to 24/7 dedicated support based on your needs and SLA requirements.",
    },
    {
      question: "Can you work with our existing systems and team?",
      answer:
        "Absolutely! We have extensive experience integrating with existing systems, legacy applications, and third-party services. We can work as an extended team, augment your in-house staff, or take complete ownership of projects. We're flexible and adapt to your preferred communication tools, workflows, and development practices.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#F5f7f5] relative w-full h-50 sm:h-100 ">
        <Image
          src={girl}
          alt="divider"
          fill
          className="object-cover container mx-auto"  
        />
      </div>

      <div className="bg-[#F5F3F0] relative" id="faq">
        {/* Yellow decorative wave at top */}
        <div className="absolute top-[-40px] left-0 right-0 h-20 overflow-hidden">
          <div
            className="w-full h-full bg-[#F5F3F0]"
            style={{ borderRadius: "50% 50% 0 0" }}
          />
        </div>

        <div className="relative container mx-auto px-6 py-12 md:py-20 max-w-4xl">
          {/* Title */}
          <h2 className="text-2xl md:text-6xl font-bold sm:font-light mb-4 leading-tight text-center">
            <span className="text-gray-900">Frequently Asked </span>
            <span className="text-orange-600 relative inline-block mb-2 sm:mb-10">
              Questions
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-600"></span>
            </span>
          </h2>

          {/* FAQ Items - Responsive padding */}
          <div className="space-y-4 mb-8 md:mb-12 px-0 md:px-20 lg:px-40">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start md:items-center justify-between text-left py-4 hover:text-slate-600 transition-colors gap-4"
                >
                  <span className="text-base md:text-lg font-normal text-slate-900 flex-1">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 mt-1 md:mt-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 opacity-100 mb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-700 pb-4 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="text-center px-16 sm:px-4">
            <button className="bg-blue-600 hover:bg-blue-700 font-medium px-8 md:px-12 py-3 md:py-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg text-white w-full md:w-auto" onClick={() => router.push("/contact")}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
