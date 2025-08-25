// src/components/Header.tsx

'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
    <header  className={`sticky top-0 z-50 mx-auto w-full border-y border-[#5A5A5A] text-secondary-500 bg-[#020610] flex h-20 items-center justify-center transition-all duration-300 ${scrolled ? 'h-20' : 'h-35'}`}>
        <div className="flex justify-around w-full max-w-7xl">
            <h1 className="font-semibold text-xl">Logo</h1>
            <nav className="flex justify-around w-2xl font-semibold text-base">
                <p>Home</p>
                <p>Compare</p>
                <p>Contact</p>
                <p>Track</p>
            </nav>
        </div>
    </header>
    );
}