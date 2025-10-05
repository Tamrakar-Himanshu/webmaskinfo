import Contact from "@/components/Contact";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <div className=" bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2 font-extrabold" />
            <div className="font-bold text-lg">Back to Home</div>
          </Link>
        </div>
        <Contact />
      </div>
      {/* <Footer /> */}
    </>
  );
}
