interface FeatureCardProps {
    number: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ number, icon, title, description }: FeatureCardProps) {
    return (
        <div 
        className="bg-[#0A101E] border border-[#f8c5728e] rounded-lg relative w-full px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-6 md:min-h-60 ">
            <div className="absolute top-4 left-4 w-8 h-8 bg-[#DA903D] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{number}</span>
            </div>

            <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#DA903D] rounded-full flex items-center justify-center">
                    {icon}
                </div>
            </div>

            <h3 className="text-xl font-bold text-white text-center mb-3">
                {title}
            </h3>

            <p className="text-secondary-500 text-center text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}