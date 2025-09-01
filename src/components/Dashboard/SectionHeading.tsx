interface SectionHeadingProps {
    title: string,
    subtitle?: string,
    className?: string
}

export default function SectionHeading({ title, subtitle, className = ""}: SectionHeadingProps) {
    return (
        <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 ${className}`}>
            <div className={`mb-8 ${className}`}>
                <h1 className="text-3xl md:text-3xl font-semibold text-white mb-3">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-secondary-500 text-base md:text-base">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    )
}