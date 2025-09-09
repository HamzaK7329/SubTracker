import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from 'framer-motion';

interface CountUpProps {
    to: number;
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}

export default function CountUp({ to, duration = 1, decimals = 0, prefix = "", suffix = ""}: CountUpProps) {
    const [display, setDisplay] = useState(0);
    const motionValue = useMotionValue(0);

    useEffect(() => {
        const controls = animate(motionValue, to, {
            duration,
            onUpdate: (latest) => setDisplay(latest),
        });
        return controls.stop;
    }, [to, duration, motionValue]);

    return (
        <motion.span>
            {prefix}
            {display.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
            {suffix}
        </motion.span>
    );

}