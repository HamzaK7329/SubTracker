// scr/app/privacy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your information."
};

export default function TermsPage() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-12">
            <header className="mb-8">
                <h1 className="text-2xl md:text-3xl font-semibold text-white">Terms of Service</h1>
                <p className="mt-3 text-sm text-secondary-500">
                    <span className="mr-4"><strong>Effective Date</strong>: 27 August 2025</span>
                    <span><strong>Last Updated</strong>: 27 August 2025</span>
                </p>
            </header>

            <article>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">1. Introduction</h2>
                <p className="text-secondary-500 mb-8 text-sm md:text-base ">These Terms of Service (“Terms”) govern your use of SubTracker. By signing up or using our app, you agree to these Terms. If you do not agree, please discontinue use.</p>
                
                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">2. Eligibility</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">You must be at least 18 years old (or the legal age in your country) to use SubTracker. By creating an account, you confirm you meet this requirement.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">3. Account Registration</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">You are responsible for keeping your account details (email, password) safe. Any activity through your account is your responsibility.</p>
                
                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">4. Use of the Service</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">SubTracker provides tools to track and manage your subscriptions. You agree not to misuse the service (e.g., hacking, reverse-engineering, or using bots).</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">5. Subscription Data</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">You are solely responsible for the accuracy of the subscription and payment details you enter into the app. SubTracker does not automatically charge your accounts — it only tracks data you provide.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">6. Payment & Pricing</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">Some features may require a paid plan. Prices are displayed within the app and may change with prior notice. Fees are non-refundable unless required by law.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">7. Intellectual Property</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">All content, design, and code in SubTracker are owned by us. You may not copy, modify, or resell our service without permission.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">8. Privacy Policy</h2>
                <p className="text-secondary-500 mb-8 text-sm md:text-base ">Your use of the service is also governed by our [Privacy Policy], which explains how we handle your personal data.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">9. Third-Party Services</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">SubTracker may link to or integrate with third-party services (e.g., payment processors, analytics). We are not responsible for issues caused by these third parties.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">10. Termination</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">We may suspend or terminate your account if you violate these Terms or misuse the app. You can also delete your account at any time from settings.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">11. Disclaimers</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">SubTracker is provided “as is.” We do not guarantee uninterrupted service, error-free operation, or 100% accuracy of your subscription data.</p>

                <h2 id="introduction" className="text-white font-semibold text-xl">12. Limitation of Liability</h2>
                <p className="text-secondary-500 mb-8 text-sm md:text-base">To the maximum extent permitted by law, SubTracker is not liable for any indirect, incidental, or financial damages resulting from your use of the app.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">13. Changes to the Terms</h2>
                <p className="text-secondary-500 mb-8 text-sm md:text-base ">We may update these Terms from time to time. Significant changes will be communicated via email or in-app notifications.</p>
                
                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">14. Governing Law</h2>
                <p className="text-secondary-500 mb-8 text-sm md:text-base ">These Terms are governed by the laws of [Your Country / Jurisdiction]. Any disputes will be handled in courts located in [Your City].</p>
                
                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">15. Contact Us</h2>
                <p className="text-secondary-500 mb-8 text-sm md:text-base ">For questions about these Terms, contact: support@subtracker.com</p>
                



            </article>

        </section>
    )
}
