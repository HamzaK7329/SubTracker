interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function InfoCard({ icon, title, description }: InfoCardProps) {
    return (
        <div 
        className="bg-[#0A101E] border border-[#f8c5728e] hover:border-[#f8c572de] rounded-lg relative w-full px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-6 md:min-h-50 ">
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