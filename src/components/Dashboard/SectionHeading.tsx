import { motion } from 'framer-motion';
import { container, item } from '../animation';

interface SectionHeadingProps {
    title: string,
    subtitle?: string,
    className?: string
}

export default function SectionHeading({ title, subtitle, className = ""}: SectionHeadingProps) {
    return (
        <motion.div className={`mx-auto w-full max-w-7xl  ${className}`}
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.div className={`mb-8 ${className}`} variants={item}>
                <h1 className="text-3xl md:text-3xl font-semibold text-white mb-3">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-secondary-500 text-base md:text-base">
                        {subtitle}
                    </p>
                )}
            </motion.div>
        </motion.div>
    )
}