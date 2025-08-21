// src/components/Header.tsx

import Link from "next/link";

export default function Header() {
    return (
    <header  className="mx-auto w-full border-y border-[#5A5A5A] text-secondary-500 bg-[#020610] flex h-20 items-center justify-center">
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