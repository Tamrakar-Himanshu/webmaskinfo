import AboutUsSection from "@/components/AboutUs";
import Associations from "@/components/Associations";
import FloatingButton from "@/components/common/FloatingBottom";
import Footer from "@/components/common/Footer";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import ServicesComponent from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
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
