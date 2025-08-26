// src/components/Features.tsx

'use client';

import { motion } from 'framer-motion'
import FeatureCard from "./FeatureCard";

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

export default function Features() {
    return (
        <div id="features" className="flex w-full justify-center text-center pt-52 sm:pt-25 md:pt-45 px-4 sm:px-6 md:px-8">
            <motion.div 
            className="max-w-4xl w-full"
            variants={container}
            initial='hidden'
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="inline-block border border-[#f8c5728e] rounded-3xl px-2.5 md:px-4 mb-5" variants={item}>
                    <p className="text-[#F8C572] text-xs md:text-base">
                        Track Subscriptions Easily
                    </p>
                </motion.div>
                <motion.h1 className="text-2xl max-w-4xl sm:text-3xl md:text-6xl font-bold bg-gradient-to-r from-[#FDDDB4] to-[#F0EBDF] bg-clip-text text-transparent" variants={item}>
                    See All Your Monthly Costs in One Place</motion.h1>
                <motion.p className="text-secondary-500 pt-5 text-xs sm:text-sm md:text-base" variants={item}>
                    App helps you monitor, organise, and stay on top of every subscription
                    you pay for, from Netflix to Amazon Prime.</motion.p>

                <motion.div 
                className="mt-16 grid gap-6 md:grid-cols-2" 
                variants={featureContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={item}>
                        <FeatureCard 
                            number={1}
                            icon={<img src={'https://www.svgrepo.com/show/455605/bar-chart-magnifying-glass.svg'} width={26} height={26} className='inline-block'/>}
                            title="Smart Subscription Tracking"
                            description="Add any subscription and our system records the exact name, plan, and billing cycle."/>
                    </motion.div>
                    <motion.div variants={item}>
                        <FeatureCard 
                            number={2}
                            icon={<img src={'https://www.svgrepo.com/show/455954/double-touch.svg'} width={26} height={26} className='inline-block'/>}
                            title="All-in-One Dashboard"
                            description="See all your monthly, quarterly, and yearly subscriptions in one clean, simple view."/>
                    </motion.div>
                    <motion.div variants={item}>
                        <FeatureCard 
                            number={3}
                            icon={<img src={'https://www.svgrepo.com/show/456852/calculator.svg'} width={26} height={26} className='inline-block'/>}
                            title="Automatic Cost Calculation"
                            description="Get your total monthly and yearly spend calculated instantly — no spreadsheets needed."/>
                    </motion.div>
                    <motion.div variants={item}>
                        <FeatureCard 
                            number={4}
                            icon={<img src={'https://www.svgrepo.com/show/457010/bell-reminder.svg'} width={26} height={26} className='inline-block'/>}
                            title="Renewal Reminders"
                            description="Receive alerts before renewals so you can cancel or adjust plans before you’re charged."/>
                    </motion.div>
                </motion.div>

               
            </motion.div>
        </div>
    );
}

