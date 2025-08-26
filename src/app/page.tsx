import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";
import Features from "@/components/LandingPage/Features";
import HowInfo from "@/components/LandingPage/HowInfo";
import WhyUs from "@/components/LandingPage/WhyUs";
import ContactUs from "@/components/LandingPage/ContactUs";

export default function LandingPage() {
    return (
        <div id="top" className="min-h-screen bg-gradient-to-br from-[#020610] to-[#111724]">
            <Header />
            <Hero />
            <Features/ >
            <HowInfo/ >
            <WhyUs/ >
            <ContactUs/ >
        </div>
    );
}