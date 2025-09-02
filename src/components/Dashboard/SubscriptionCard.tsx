'use client';

export type SubscriptionCardProps = {
    logo: string;
    name: string;
    category: string;
    price: string;
    billingDate: string;
    status: 'Active' | 'Paused';
    statusColor?: string;
};

export default function SubscriptionCard ({
    logo,
    name,
    category,
    price,
    billingDate,
    status,
    statusColor,
}: SubscriptionCardProps) {
    const statusBg =
        statusColor ||
        (status === 'Active'
            ? 'bg-green-500'
            : status === 'Paused'
            ? 'bg-yellow-500'
            : 'bg-red-500'
        );


    return (
        <div className="flex flex-col rounded-xl bg-[#131720] p-4 border-[#252934] w-full max-w-sm ">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <img 
                        src={logo}
                        alt={name}
                        className="w-10 h-10 rounded-[10px] object-cover "
                    />
                    <div>
                        <h3 className="text-base font-semibold text-white">{name}</h3>
                        <p className="text-sm text-gray-400">{category}</p>
                    </div>

                </div>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium text-black ${statusBg}`}
                >
                    {status}
                </span>
            </div>

            <div className="flex justify-between mt-6">
                <div>
                    <p className="text-sm text-gray-400 ">Monthly Cost</p>
                    <p className="text-sm font-semibold text-white ">{price}</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-400 ">Next Billing</p>
                    <p className="text-sm font-semibold text-white ">{billingDate}</p>
                </div>
            </div>

        </div>
    );

}
