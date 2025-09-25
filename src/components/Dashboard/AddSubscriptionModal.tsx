'use client';

import { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, doc, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "@clerk/nextjs";

import ServiceCombobox from '@/components/Dashboard/ServiceComoBox';
import CategoryCombobox from "./CategoryComboBox";
import { DEFAULT_CATEGORIES } from "./categories";
import { POPULAR_SERVICES } from "./popularSubscriptions";
  

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function AddSubscriptionModal({ isOpen, onClose }: Props) {
    const { userId } = useAuth();

    const [service, setService] = useState('');
    const [cost, setCost] = useState('');
    const [billingCycle, setBillingCycle] = useState('Monthly');
    const [nextBillingDate, setNextBillingDate] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userId) return;

        try {
            const subsRef = collection(doc(db, 'users', userId), 'subscriptions');
            await addDoc(subsRef, {
                name: service,
                category: category || "General",
                amount: parseFloat(cost),
                currency: "USD",
                cycle: billingCycle.toLocaleLowerCase(),
                status: 'active',
                nextChargeAt: new Date(nextBillingDate),
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            onClose();
        } catch (err) {
            console.error("Error adding subscription: ", err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-[#1a1d29] w-full max-w-md rounded-lg p-6 shadow-lg ">
                <h2 className="text-white text-lg font-semibold mb-4">
                    Add New Subscription
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-300" >Service</label>
                        <ServiceCombobox
                            options={POPULAR_SERVICES}
                            value={service}
                            onChange={(opt) => {
                                const name = 'name' in opt ? opt.name : (opt as { name: string }).name;
                                setService(name);
                                // Prefill when we have metadata
                                if ('id' in opt && opt.id !== 'custom') {
                                const svc = POPULAR_SERVICES.find(s => s.id === opt.id as string);
                                if (svc?.category) setCategory(svc.category);
                                }
                            }}
                            className="mt-1"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 " >
                        <div>
                            <label className="text-sm text-gray-300" >Cost</label>
                            <input
                                type="number"
                                step="0.01"
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                                className="w-full mt-1 px-3 py-2 rounded bg-[#0f1117] border border-[#2A2A2A] text-white"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-300" >Billing Cycle</label>
                            <select
                                value={billingCycle}
                                onChange={(e) => setBillingCycle(e.target.value)}
                                className="w-full mt-1 px-3 py-2 rounded bg-[#0f1117] border border-[#2A2A2A] text-white "
                            >
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Quarterly</option>
                                <option>Yearly</option>
                            </select>
                        </div>

                    </div>

                    <div>
                        <label className="text-sm text-gray-300" >Next Billing Date</label>
                        <input
                            type="date"
                            value={nextBillingDate}
                            onChange={(e) => setNextBillingDate(e.target.value)}
                            className="w-full mt-1 px-3 py-2 rounded bg-[#0f1117] border border-[#2A2A2A] text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-300">Category</label>
                        <CategoryCombobox
                            options={DEFAULT_CATEGORIES}
                            value={category}
                            onChange={(opt) => {
                                const name = 'name' in opt ? opt.name : (opt as { name: string }).name;
                                setCategory(name);
                            }}
                            className="mt-1"
                        />
                    </div>

                    <div className="flex justify-center gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 min-w-43 rounded bg-gray-600 text-white hover:opacity-80"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-4 py-2 min-w-43 rounded bg-gradient-to-r from-[#F77519] to-[#F88D44] text-white font-semibold hover:opacity-90"
                        >
                            Add Subscription
                        </button>

                    </div>

                </form>

            </div>
        </div>
    )

}


