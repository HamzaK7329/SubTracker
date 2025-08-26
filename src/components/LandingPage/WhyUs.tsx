// src/components/HowInfo.tsx

'use client';

import { motion } from 'framer-motion'
import WhyUsCard from "./WhyUsCard";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
};

const featureContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.4, delayChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: 'easeOut' as const}
    }
};

const fromLeft = {
    hidden: { opacity: 0, x: -20 },
    show: {
        opacity: 1, x: 0,
        transition: { duration: 0.5, ease: 'easeOut' as const}
    }
};

const fromRight = {
    hidden: { opacity: 0, x: 20 },
    show: {
        opacity: 1, x: 0,
        transition: { duration: 0.5, ease: 'easeOut' as const}
    }
};

export default function HowInfo() {
    return (
        <div className="flex w-full justify-center text-center pt-52 sm:pt-25 md:pt-45 px-4 sm:px-6 md:px-8">
            <motion.div 
            className="max-w-4xl w-full"
            variants={container}
            initial='hidden'
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h1 className="text-2xl max-w-4xl sm:text-3xl md:text-6xl font-bold bg-gradient-to-r from-[#FDDDB4] to-[#F0EBDF] bg-clip-text text-transparent" variants={item}>
                    Why Choose App?</motion.h1>
                <motion.p className="text-secondary-500 pt-5 text-xs sm:text-sm md:text-base" variants={item}>
                    A simpler, smarter way to stay on top of your subscriptions.</motion.p>

                <motion.div 
                className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2" 
                variants={featureContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={fromLeft}>
                        <WhyUsCard 
                            icon={<BarChartIcon />}
                            title="One Simple Hub"
                            description="All your services stored in a clean, easy-to-use space."/>
                    </motion.div>
                    <motion.div variants={fromRight}>
                        <WhyUsCard 
                            icon={<BarChartIcon />}
                            title="Effortless Summaries"
                            description="See your spending at a glance without any manual tracking."/>
                    </motion.div>
                    <motion.div variants={fromLeft}>
                        <WhyUsCard 
                            icon={<BarChartIcon />}
                            title="Stay Ahead"
                            description="Be reminded before every renewal date so you can act in time."/>
                    </motion.div>
                    <motion.div variants={fromRight}>
                        <WhyUsCard 
                            icon={<BarChartIcon />}
                            title="Privacy First"
                            description="Your information is secure, we never share your data with third parties."/>
                    </motion.div>
                </motion.div>

                <div className="mt-20 sm:mt-32 md:mt-40"></div>
            </motion.div>
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