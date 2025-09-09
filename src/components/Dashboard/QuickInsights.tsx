'use client';

import { useAuth } from "@clerk/nextjs";
import { useSubscriptionMetrics } from "@/hooks/useSubscriptionMetrics";

function Pill({ label, value, accent = ''}: { label: string, value: string, accent?: string}) {
    return (
        <div className="bg-[#131720] border border-[#242934] rounded-lg px-4 py-3 hover:border-[#f8c572de]" >
            <p className="text-sm text-secondary-500 " >{label}</p>
            <p className={`mt-1 text-[15px] font-medium ${accent || 'text-white'} `} >{value}</p>
        </div>
    );
}

export default function QuickInsights() {
    const { userId, isLoaded } = useAuth();
    const { loading, mostExpensiveLabel, pausedLabel, dueThisWeekLabel } = 
        useSubscriptionMetrics(isLoaded ? userId ?? undefined: undefined);

    if (!isLoaded || loading) {
        return (
            <section className="mt-8 bg-[#131720] border border-[#252934] rounded-xl p-5 " >
                <h3 className="text-white text-lg font-semibold mb-4 " >Quick Insights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" >
                    {[0,1,2].map(i => <div key={i} className="h-[64px] bg-[#0f1319] border border-[#252934] rounded-lg animate-pulse " />)}
                </div>
            </section>
        );
    }

    return (
        <section className="mt-8 bg-[#131720] border border-[#252934] rounded-xl p-5 " >
            <h3 className="text-white text-lg font-semibold mb-4" >Quick Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Pill label="Most Expensive" value={mostExpensiveLabel} />
                <Pill label="Paused Subscriptions" value={pausedLabel} />
                <Pill label="Due This Week" value={dueThisWeekLabel} />
            </div>
        </section>
    )

}
