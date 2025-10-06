"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Globe,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const autoReplyTemplateId =
        process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        const missing = [
          !serviceId ? "NEXT_PUBLIC_EMAILJS_SERVICE_ID" : null,
          !templateId ? "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID" : null,
          !publicKey ? "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY" : null,
        ]
          .filter(Boolean)
          .join(", ");
        throw new Error(
          `Email service is not configured (missing: ${missing})`
        );
      }

      // Send main notification email to WebMask Global
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        user_name: formData.name,
        user_email: formData.email,
        user_subject: formData.subject,
        user_message: formData.message,
        reply_to: formData.email,
        to_name: "Webmask Global",
      } as Record<string, string>;

      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      // Send auto-reply to the user from info@webmaskglobal.com
      if (autoReplyTemplateId) {
        const autoReplyParams = {
          user_name: formData.name,
          email: formData.email,
          to_email: formData.email,
          to_name: formData.name,
          subject: formData.subject,
          message: formData.message,
          user_subject: formData.subject,
          user_message: formData.message,
        } as Record<string, string>;

        await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, {
          publicKey,
        });
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      const err = error as { status?: number; text?: string; message?: string } | undefined;
      console.error(
        "Error submitting form:",
        err?.status,
        err?.text || err?.message || err
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@webmaskglobal.com",
      secondary: "We'll respond within 24 hours",
      link: "mailto:info@webmaskglobal.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 8839536713",
      secondary: "Mon-Fri from 9am to 6pm IST",
      link: "tel:+918839536713",
    },
    {
      icon: Clock,
      title: "Support Hours",
      primary: "24/7 Available",
      secondary: "Round-the-clock assistance",
    },
    {
      icon: Globe,
      title: "Locations",
      primary: "4 Office Locations",
      secondary: "Across India",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 min-h-screen overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Contact Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let&apos;s Start a
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Conversation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? We&apos;re here to turn your ideas into
            reality. Reach out and let&apos;s create something amazing together.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-medium mb-1">{info.primary}</p>
                <p className="text-sm text-gray-500">{info.secondary}</p>
              </div>
            );

            return info.link ? (
              <a key={index} href={info.link} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - Additional Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Transparent pricing and timelines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>100+ successful projects delivered</span>
                </li>
              </ul>
            </div>

            {/* Office Locations */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Offices
                </h3>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <p className="font-medium text-gray-900 mb-1">Bengaluru</p>
                  <p className="text-sm text-gray-600">
                    Jakkuru Layout, Karnataka 560092
                  </p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="font-medium text-gray-900 mb-1">Hyderabad</p>
                  <p className="text-sm text-gray-600">
                    SR Nagar, Telangana 500016
                  </p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="font-medium text-gray-900 mb-1">
                    Madhya Pradesh
                  </p>
                  <p className="text-sm text-gray-600">Satna, MP 485661</p>
                </div>
                
              </div>
            </div>
          </div>  

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900">Success!</p>
                    <p className="text-green-800 text-sm">
                      Thank you! We&apos;ll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                  <p className="text-red-800 font-medium">
                    There was an error sending your message. Please try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      placeholder="Project inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none outline-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
