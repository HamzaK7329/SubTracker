// src/components/Hero.tsx

'use client';

import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: 'easeOut' as const}
    }
};

export default function Hero() {
    return (
        <div className="flex w-full justify-center text-center pt-30">
            <motion.div 
            className="max-w-2xl"
            variants={container}
            initial="hidden"
            animate="show"
            >
                <motion.div className="inline-block border border-[#DA903D] rounded-3xl px-2.5 md:px-4 mb-5" variants={item}>
                    <p className="text-[#F8C572] text-xs md:text-base">
                        See Your Subscriptions Clearly
                    </p>
                </motion.div >
                <motion.h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FDDDB4] to-[#F0EBDF] bg-clip-text text-transparent" variants={item}>
                    Stay Aware.</motion.h1>
                <motion.h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FDDDB4] to-[#F0EBDF] bg-clip-text text-transparent" variants={item}>
                    Track Your Subscriptions.</motion.h1>
                <motion.h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FDDDB4] to-[#F0EBDF] bg-clip-text text-transparent" variants={item}>
                    Save More.</motion.h1>
                <motion.p className="text-secondary-500 pt-5 text-xs sm:text-sm md:text-base" variants={item}>Your subscription dashboard.</motion.p>
                <motion.p className="text-secondary-500 text-xs sm:text-sm md:text-base" variants={item}>Track payments and manage spending effortlessly.</motion.p>

                <motion.div className="flex gap-4 justify-center mt-8" variants={item}>
                    <button className="px-2 py-1 text-xs sm:text-sm md:text-base sm:px-4 sm:py-2  md:px-6 md:py-3 rounded-lg bg-gradient-to-b from-[#DA903D] to-[#F4A958] text-white font-semibold shadow-lg hover:from-[purple] hover:to-[pink] transition-all duration-200">
                        Start Tracking
                    </button>
                    <button className="px-2 py-1 text-xs sm:text-sm md:text-base sm:px-4 sm:py-2  md:px-6 md:py-3 rounded-lg border bg-black border-[#DA903D] text-white font-semibold ">
                        How It Works
                    </button>
                </motion.div>

            </motion.div>
        </div>
    );
}