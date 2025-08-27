// scr/app/privacy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your information."
};

export default function PrivacyPage() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-12">
            <header className="mb-8">
                <h1 className="text-2xl md:text-3xl font-semibold text-white">Privacy Policy</h1>
                <p className="mt-3 text-sm text-secondary-500">
                    <span className="mr-4"><strong>Effective Date</strong>: 27 August 2025</span>
                    <span><strong>Last Updated</strong>: 27 August 2025</span>
                </p>
            </header>

            <article>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">1. Introduction</h2>
                <p className="text-secondary-500 mb-8 text-sm md:text-base ">We respect your privacy and are committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights as a user.</p>
                
                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">2. Information We Collect</h2>
                <ul className="text-secondary-500 mb-8 text-sm md:text-base">
                    <li><strong>Account Information</strong>: Name, email, and password when you sign up.</li>
                    <li><strong>Subscription Data</strong>: Services you track, payment details you choose to log, and billing dates.</li>
                    <li><strong>Usage Data</strong>: Device type, browser, IP address, and how you interact with our app.</li>
                </ul>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">3. How We Use Your Information</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">We use your data to provide and improve the subscription tracking service, personalize your dashboard, send reminders/notifications, and ensure account security.</p>
                
                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">4. Sharing of Information</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">We do <strong>not sell your data</strong>. We only share with trusted third-party providers (e.g., cloud storage, analytics, payment processors) strictly to run our service.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">5. Data Storage and Security</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">Your data is stored securely in [Firebase / Supabase servers]. We apply encryption, authentication, and access controls to protect your information.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">6. Cookies and Tracking Technologies</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">We use cookies and similar technologies to remember your login, analyze app performance, and improve the user experience.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">7. User Rights</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">You can access, update, or delete your data anytime by visiting your settings page or contacting support. You may also request account deletion.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">8. Children’s Privacy</h2>
                <p className="text-secondary-500 mb-8 text-sm md:text-base ">Our app is not directed at children under 13. We do not knowingly collect data from minors.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">9. Third-Party Links</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">Our app may link to third-party websites or services. We are not responsible for the privacy practices of these external sites.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">10. International Data Transfers</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">If you access our service outside [your base country], your information may be transferred and stored in other countries with different data protection laws.</p>

                <h2 id="introduction" className="text-white font-semibold text-lg md:text-xl">11. Changes to This Privacy Policy</h2>
                <p className="text-secondary-500  mb-8 text-sm md:text-base">We may update this policy from time to time. We’ll notify you of significant changes via email or in-app notifications.</p>

                <h2 id="introduction" className="text-white font-semibold text-xl">12. Contact Us</h2>
                <p className="text-secondary-500 mb-8 text-sm md:text-base">If you have questions about this Privacy Policy, contact us at: support@subtracker.com</p>


            </article>

        </section>
    )
}
