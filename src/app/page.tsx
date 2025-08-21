import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#020610] to-[#111724]">
            <Header />
            <Hero />
        </div>
    );
}