// src/components/HowInfo.tsx

'use client';

import { motion } from 'framer-motion'
import ContactForm from './ContactForm';

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
                    Get In Touch</motion.h1>
                <motion.p className="text-secondary-500 pt-5 text-xs sm:text-sm md:text-base" variants={item}>
                    Have questions about App? Want to suggest a new feature or report an issue? We'd love to hear from you!</motion.p>
                
                <motion.div className="mt-15 text-left" variants={item}>
                    <ContactForm />
                </motion.div>
                

                <div className="mt-20 sm:mt-32 md:mt-40"></div>
            </motion.div>
        </div>
    );
}

