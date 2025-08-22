import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";
import Features from "@/components/LandingPage/Features";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#020610] to-[#111724]">
            <Header />
            <Hero />
            <Features/ >
        </div>
    );
}