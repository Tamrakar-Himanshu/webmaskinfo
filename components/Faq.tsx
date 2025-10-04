"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who are the therapists?",
      answer:
        "All therapists on our platform are licensed, trained, experienced, and credentialed professionals. They have been qualified and certified by their state professional board after successfully completing the necessary education, exams, training and practice.",
    },
    {
      question: "Who will be helping me?",
      answer:
        "After you sign up, we will match you to an available therapist who fits your objectives, preferences, and the type of issues you are dealing with. Different therapists have different approaches and areas of focus, so it's important to find the right fit for you.",
    },
    {
      question: "Is BetterHelp right for me?",
      answer:
        "BetterHelp may be right for you if you're looking to improve the quality of your life. Whenever there is anything that interferes with your happiness or prevents you from achieving your goals, we may be able to help. We also have therapists who specialize in specific issues such as stress, anxiety, relationships, parenting, depression, addictions, eating, sleeping, trauma, anger, family conflicts, LGBT matters, grief, religion, self esteem, and more.",
    },
    {
      question: "How much does it cost?",
      answer:
        "The cost of therapy through BetterHelp ranges from $65 to $100 per week (billed every 4 weeks) and is based on your location, preferences, and therapist availability. You can cancel your membership at any time, for any reason.",
    },
    {
      question: "I signed up. How long until I'm matched with a therapist?",
      answer:
        "This can vary. The process can take a few hours to a few days. We will do our very best to connect you with a therapist as soon as possible. You will be notified by email as soon as you're matched.",
    },
    {
      question: "How will I communicate with my therapist?",
      answer:
        "You can get therapy in four ways: Exchanging messages with your therapist, Chatting live with your therapist, Speaking over the phone with your therapist, and Video conferencing with your therapist. You can use different ways at different times as you wish.",
    },
    {
      question:
        "Can BetterHelp substitute for traditional face-to-face therapy?",
      answer:
        "The professionals who work through BetterHelp are licensed and credentialed therapists who were certified by their state's board to provide therapy and counseling. However, while the service may have similar benefits, it's not capable of substituting for traditional face-to-face therapy in every case.",
    },
    {
      question: "How long can I use BetterHelp?",
      answer:
        "This depends on your needs and varies a lot from one person to another. Some people feel they get most of the value after just a few weeks, while others prefer to stick with it for months or even years. It is completely up to you.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
          <span className="text-orange-500 relative inline-block">
            Questions
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500"></span>
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
          <button className="bg-[#11a7d9] hover:bg-[#5b54bf]  font-medium px-8 md:px-12 py-3 md:py-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg text-white w-full md:w-auto">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
