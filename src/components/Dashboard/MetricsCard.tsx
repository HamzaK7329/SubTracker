// src/components/Dashboard/MetricsCard.tsx
interface MetricsCardProps {
    label: string;
    value: string;
    icon: React.ReactNode;
    className?: string;
}

export default function MetricsCard({ label, value, icon, className = "" }: MetricsCardProps) {
    return (
        <div className={`bg-[#131720] border border-[#252934] rounded-lg p-6 backdrop-blur ${className}`}>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <p className="text-secondary-500 text-sm mb-2">{label}</p>
                    <p className="text-2xl md:text-3xl font-semibold text-white">{value}</p>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-[#5A5A5A]">
                    <div className="text-white">
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
}