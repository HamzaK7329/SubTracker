// src/components/LandingPage/ContactForm.tsx
'use client';

export default function ContactForm() {
    return (
        <div className="rounded-2xl border border-[#f8c5728e] bg-[#0b1220]/40 backdrop-blur-md p-6">
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Name *">
                        <input
                            type="text"
                            placeholder="Your full name"
                            className="w-full rounded-lg bg-white/5 border border-[#f8c5728e] text-white placeholder:text-secondary-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F8C572]/40"
                            required
                        />
                    </Field>
                    <Field label="Email *">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full rounded-lg bg-white/5 border border-[#f8c5728e] text-white placeholder:text-secondary-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F8C572]/40"
                            required
                        />
                    </Field>
                </div>

                <Field label="Subject">
                    <input
                        type="text"
                        placeholder="What's this about?"
                        className="w-full rounded-lg bg-white/5 border border-[#f8c5728e] text-white placeholder:text-secondary-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F8C572]/40"
                    />
                </Field>

                <Field label="Message *">
                    <textarea
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[140px] w-full rounded-lg bg-white/5 border border-[#f8c5728e] text-white placeholder:text-secondary-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F8C572]/40"
                        required
                    />
                </Field>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-b from-[#DA903D] to-[#F4A958] text-white font-semibold py-3 shadow-lg hover:from-[purple] hover:to-[pink] transition-colors"
                >
                    Send Message
                </button>

                <p className="text-center text-xs text-secondary-500">
                    * Required fields. We respect your privacy and won’t share your information.
                </p>
            </form>
        </div>
    );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <label className="block">
            <span className="mb-1 block text-sm text-white/80">{label}</span>
            {children}
        </label>
    );
}