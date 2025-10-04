import AboutUsSection from "@/componenets/AboutUs";
import Associations from "@/componenets/Associations";
import FloatingButton from "@/componenets/common/FloatingBottom";
import Footer from "@/componenets/common/Footer";
import Faq from "@/componenets/Faq";
import Header from "@/componenets/Header";
import HowItWorks from "@/componenets/HowItWorks";
import ServicesComponent from "@/componenets/OurServices";
import Testimonials from "@/componenets/Testimonials";
export default function Home() {
  return (
    <>
      <Header />
      <Associations />

      <AboutUsSection />

      <ServicesComponent />
      <Testimonials />

      <HowItWorks />
      <Faq />
      <Footer />
      <FloatingButton />
    </>
  );
}
