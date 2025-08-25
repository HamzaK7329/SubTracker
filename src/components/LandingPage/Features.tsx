// src/components/Features.tsx

import FeatureCard from "./FeatureCard";


export default function Features() {
    return (
        <div className="flex w-full justify-center text-center pt-52 sm:pt-25 md:pt-45 px-4 sm:px-6 md:px-8">
            <div className="max-w-2xl w-full">
                <div className="inline-block border border-[#DA903D] rounded-3xl px-2.5 md:px-4 mb-5">
                    <p className="text-[#F8C572] text-xs md:text-base">
                        Track Subscriptions Easily
                    </p>
                </div>
                <h1 className="text-2xl max-w-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FDDDB4] to-[#F0EBDF] bg-clip-text text-transparent">
                    See All Your Monthly Costs in One Place</h1>
                <p className="text-secondary-500 pt-5 text-xs sm:text-sm md:text-base">
                    App helps you monitor, organise, and stay on top of every subscription
                    you pay for, from Netflix to Amazon Prime.</p>

                <div className="mt-16 grid gap-6 md:grid-cols-2">
                    <FeatureCard 
                        number={1}
                        icon={<BarChartIcon />}
                        title="Smart Subscription Tracking"
                        description="Add any subscription and our system records the exact name, plan, and billing cycle."
                    />
                    <FeatureCard 
                        number={1}
                        icon={<BarChartIcon />}
                        title="All-in-One Dashboard"
                        description="See all your monthly, quarterly, and yearly subscriptions in one clean, simple view."
                    />
                    <FeatureCard 
                        number={1}
                        icon={<BarChartIcon />}
                        title="Automatic Cost Calculation"
                        description="Get your total monthly and yearly spend calculated instantly — no spreadsheets needed."
                    />
                    <FeatureCard 
                        number={1}
                        icon={<BarChartIcon />}
                        title="Renewal Reminders"
                        description="Receive alerts before renewals so you can cancel or adjust plans before you’re charged."
                    />
                </div>

                <div className="mt-20 sm:mt-32 md:mt-40"></div>
            </div>
        </div>
    );
}

// Simple bar chart icon component
function BarChartIcon() {
    return (
        <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
        >
            <rect x="4" y="16" width="2" height="4" fill="currentColor"/>
            <rect x="10" y="12" width="2" height="8" fill="currentColor"/>
            <rect x="16" y="8" width="2" height="12" fill="currentColor"/>
        </svg>
    );
}