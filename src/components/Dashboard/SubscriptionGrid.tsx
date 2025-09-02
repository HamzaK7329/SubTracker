import SubscriptionCard, { type SubscriptionCardProps } from "./SubscriptionCard";

export default function SubscriptionGrid() {
    const subscriptions: SubscriptionCardProps[] = [
        {
            logo: "/logo/netflix-logo.webp",
            name: "Netflix",
            category: "Entertainment",
            price: "$15.99",
            billingDate: "Aug 26, 2025",
            status: "Active",
        },
        {
            logo: "/logo/netflix-logo.webp",
            name: "Netflix",
            category: "Entertainment",
            price: "$15.99",
            billingDate: "Aug 26, 2025",
            status: "Active",
        },
        {
            logo: "/logo/netflix-logo.webp",
            name: "Netflix",
            category: "Entertainment",
            price: "$15.99",
            billingDate: "Aug 26, 2025",
            status: "Active",
        },
        {
            logo: "/logo/netflix-logo.webp",
            name: "Netflix",
            category: "Entertainment",
            price: "$15.99",
            billingDate: "Aug 26, 2025",
            status: "Active",
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {subscriptions.map((sub, idx) => (
                    <SubscriptionCard key={idx} {...sub} />
                ))}
            </div>
        </>
    )

}