import { useEffect, useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, doc, onSnapshot, orderBy, query, Timestamp, updateDoc, deleteDoc } from "firebase/firestore";
import SubscriptionCard from "./SubscriptionCard";
import { useSubscriptionMetrics } from "@/hooks/useSubscriptionMetrics";
import { useAuth } from "@clerk/nextjs";
import EditSubscriptionModal from "./EditSubscriptionModal";

type SubDoc = {
    id: string;
    name: string;
    category: string;
    amount: number;
    currency: string;
    cycle: string;
    status: "active"|"paused"|"canceled";
    nextChargeAt?: Timestamp;
};

type UISubDoc = Omit<SubDoc, 'nextChargeAt'> & { nextChargeAt: Date };

export function SubscriptionGrid({ uid }: { uid: string }) {
    const { userId, isLoaded } = useAuth();
    const { userCurrency } = useSubscriptionMetrics(isLoaded ? userId ?? undefined : undefined);
    const [subs, setSubs ] = useState<UISubDoc[]>([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedSubscription, setSelectedSubscription] = useState<UISubDoc | null>(null);

    function handleEdit(sub: UISubDoc) {
        setSelectedSubscription({
            ...sub,
            nextChargeAt: sub.nextChargeAt ? sub.nextChargeAt : new Date,
        });
        setEditModalOpen(true);
    }

    async function handlePause(sub: UISubDoc) {
        if (!userId || !sub.id) return;
        try {
            const subDoc = doc(db, 'users', userId, 'subscriptions', sub.id);
            await updateDoc(subDoc, { status: 'paused' });
            // i can refresh the list here
        } catch (err) {
            console.error("Error pausing subscription: ", err);
        }

    };

    async function handleStart(sub: UISubDoc) {
        if (!userId || !sub.id) return;
        try {
            const subDoc = doc(db, 'users', userId, 'subscriptions', sub.id);
            await updateDoc(subDoc, { status: 'active' });
            // i can refresh the list here
        } catch (err) {
            console.error("Error starting subscription: ", err);
        }

    };

    async function handleDelete(sub: UISubDoc) {
        if (!userId || !sub.id) return;
        try {
            const subDoc = doc(db, 'users', userId, 'subscriptions', sub.id);
            await deleteDoc(subDoc)
        } catch (err) {
            console.error("Error deleting subscription ", err);
        }
    };

    useEffect(() => {
        const subsRef = collection(doc(db, "users", uid), "subscriptions");
        const q = query(subsRef, orderBy("nextChargeAt", "asc"));
        const unsub = onSnapshot(q, (snap) => {
            setSubs(
                snap.docs.map(d => {
                    const data = d.data() as SubDoc;
                    return {
                        ...data,
                        id: d.id,
                        nextChargeAt: data.nextChargeAt ? data.nextChargeAt.toDate() : new Date(),
                    } as UISubDoc;
                })
            )
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
                price={`${userCurrency} ${s.amount.toString()}`}
                billingDate={s.nextChargeAt ? s.nextChargeAt.toLocaleDateString(undefined, { month: "short", day: "2-digit", year: "numeric" }) : "—"}
                status={s.status === "paused" ? "Paused" : "Active"}
                onEdit={() => handleEdit(s)}
                onPause={() => handlePause(s)}
                onStart={() => handleStart(s)}
                onDelete={() => handleDelete(s)}
                />
            ))}
            {selectedSubscription && (
            <EditSubscriptionModal
                isOpen={editModalOpen}
                onClose={() => setEditModalOpen(false)}
                subscription={selectedSubscription}
            />
            )}
        </div>
    );

}
