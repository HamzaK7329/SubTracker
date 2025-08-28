// src/app/(dashboard)/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Quick form",
};

export default function Dashboard() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <form className="w-full max-w-sm bg-white/5 border border-[#5A5A5A] rounded-lg p-6 backdrop-blur">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-md bg-transparent border border-[#5A5A5A] px-3 py-2 text-white placeholder:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-[#FDDDB4]/60"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full rounded-md bg-[#FDDDB4] text-black font-semibold py-2 hover:opacity-90 transition"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}