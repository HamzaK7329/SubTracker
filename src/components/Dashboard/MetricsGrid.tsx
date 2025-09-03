import MetricsCard from "./MetricsCard";
import { useAuth } from "@clerk/nextjs";
import { useSubscriptionMetrics } from "@/hooks/useSubscriptionMetrics";

export default function MetricsGrid() {
    const { userId, isLoaded } = useAuth();
    const {
        loading,
        monthlyLabel,
        yearlyLabel,
        activeCountLabel,
        nextPaymentLabel,
    } = useSubscriptionMetrics(isLoaded ? userId ?? undefined : undefined);

    if (!isLoaded || loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-[#131720] border b-[#252934] rounded-lg p-6 animation-pulse h-[120px]" />
                ))}
            </div>
        );
    }

    const metrics = [
        {
            label: 'Monthly Cost',
            value: monthlyLabel,
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block" />
        },
        {
            label: 'Yearly Cost',
            value: yearlyLabel,
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block" />
        },
        {
            label: 'Active Subscriptions',
            value: activeCountLabel,
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block" />
        },
        {
            label: 'Next Payment',
            value: nextPaymentLabel,
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block" />
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
                <MetricsCard key={i} label={m.label} value={m.value} icon={m.icon} />
            ))}
        </div>
    )

}