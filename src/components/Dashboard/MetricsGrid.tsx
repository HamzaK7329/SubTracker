import MetricsCard from "./MetricsCard";

export default function MetricsGrid() {
    const metrics = [
        {
            label: 'Monthly Cost',
            value: '$128.94',
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block" />
        },
        {
            label: 'Yearly Cost',
            value: '$1,547.28',
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block" />
        },
        {
            label: 'Active Subscriptions',
            value: '5',
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block" />
        },
        {
            label: 'Next Payment',
            value: 'In 3 days',
            icon: <img src="https://www.svgrepo.com/show/456912/sign-dollar.svg" width={24} height={24} className="inline-block" />
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
                <MetricsCard
                    key={index}
                    label={metric.label}
                    value={metric.value}
                    icon={metric.icon}
                />
            ))}
        </div>
    )

}