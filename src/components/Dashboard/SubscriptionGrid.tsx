import { useEffect, useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, doc, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import SubscriptionCard from "./SubscriptionCard";

type SubDoc = {
    id: string;
    name: string;
    category?: string;
    amount: number;
    currency: string;
    status: "active"|"paused"|"canceled";
    nextChargeAt?: Timestamp;
};

export function SubscriptionGrid({ uid }: { uid: string }) {
    const [subs, setSubs ] = useState<SubDoc[]>([]);

    useEffect(() => {
        const subsRef = collection(doc(db, "users", uid), "subscriptions");
        const q = query(subsRef, orderBy("nextChargeAt", "asc"));
        const unsub = onSnapshot(q, (snap) => {
            setSubs(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));
        });
        return () => unsub();
    }, [uid]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {subs.map((s) => (
                <SubscriptionCard
                key={s.id}
                logo={`/logos/${s.name.toLowerCase()}.jpg`}
                name={s.name}
                category={s.category ?? "General"}
                price={`$ ${s.amount.toString()}`}
                billingDate={s.nextChargeAt ? s.nextChargeAt.toDate().toLocaleDateString(undefined, { month: "short", day: "2-digit", year: "numeric" }) : "—"}
                status={s.status === "paused" ? "Paused" : "Active"}
                />
            ))}
        </div>
    );

}
