import MetricsCard from "./MetricsCard";
import { useAuth } from "@clerk/nextjs";
import { useSubscriptionMetrics } from "@/hooks/useSubscriptionMetrics";

export default function MetricsGrid() {
    const { userId, isLoaded } = useAuth();
    const {
        loading,
        userCurrency,
        monthlyTotal,
        yearlyTotal,
        activeCount,
        nextPaymentLabel,
    } = useSubscriptionMetrics(isLoaded ? userId ?? undefined : undefined);

    if (!isLoaded || loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-[#131720] border b-[#252934] rounded-lg p-6 animate-pulse h-[120px]" />
                ))}
            </div>
        );
    }

    const metrics = [
        {
            label: 'Monthly Cost',
            value: monthlyTotal,
            type: "currency",
            currency: userCurrency,
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block filter invert" />
        },
        {
            label: 'Yearly Cost',
            value: yearlyTotal,
            type: "currency",
            currency: userCurrency,
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block filter invert" />
        },
        {
            label: 'Active Subscriptions',
            value: activeCount,
            type: "count",
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block filter invert" />
        },
        {
            label: 'Next Payment',
            value: nextPaymentLabel,
            type: "text",
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block filter invert" />
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
                <MetricsCard key={i} label={m.label} value={m.value} currency={m.currency} icon={m.icon} type={m.type} />
            ))}
        </div>
    )

}