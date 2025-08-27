// src/components/Header.tsx


import Link from "next/link";

export default function Footer() {

    return (
    <footer  className="mx-auto w-full border-t border-[#5A5A5A] text-secondary-500 bg-[#020610]/20 backdrop-blur-md">
        <div className="w-full max-w-7xl mx-auto px-6 py-12">
            <div className="grid gap-10 md:grid-col-3">
                <div className="space-y-4">
                    <h1 className="font-semibold text-xl text-white">Logo</h1>
                </div>

                <div className="grid grid-cols-2 gap-8  md:gap-4">
                    <div>
                        <h3 className="text-white font-semibold mb-3">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/#top" className="hover:underline hover:text-[#FDDDB4]">Home</Link></li>
                            <li><Link href="/#features" className="hover:underline hover:text-[#FDDDB4]">Features</Link></li>
                            <li><Link href="/#how" className="hover:underline hover:text-[#FDDDB4]">How It Works</Link></li>
                            <li><Link href="/#contact" className="hover:underline hover:text-[#FDDDB4]">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-3">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/privacy" className="hover:underline hover:text-[#FDDDB4]">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:underline hover:text-[#FDDDB4]">Terms of Service</Link></li>
                        </ul>
                        <p className="mt-4 text-xs leading-5 text-secondary-500/80">
                            Important: Some links may be affiliate links. We may earn a small commision at no extra cost to you.
                        </p>
                    </div>

                    <div className="hidden md:block"></div>
                </div>

                <div className="mt-10 border-t border-[#5A5A5A]/60 pt-6 flex flex-col sm:flew-row items-center justify-between gap-4 text-xs">
                    <p className="text-secondary-500/80">
                        © {new Date().getFullYear()} Subtracker. All rights reserved.
                    </p>
                    <p className="text-secondary-500/80">
                        Built with ❤️ in UAE
                    </p>
                </div>
            </div>
        </div>
    </footer>
    );
}