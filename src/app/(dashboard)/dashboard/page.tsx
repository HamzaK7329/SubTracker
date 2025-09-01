'use client'

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { db } from "@/app/firebaseConfig";
import { doc, getDoc } from 'firebase/firestore';

import Header from "@/components/Dashboard/Header";
import SectionHeading from "@/components/Dashboard/SectionHeading";
import MetricsGrid from "@/components/Dashboard/MetricsGrid";

export default function Dashboard() {
    const { userId, isLoaded } = useAuth();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkOnboarding = async () => {
            if (!isLoaded || !userId) return;

            try {
                const userDoc = await getDoc(doc(db, 'users', userId));
                if (!userDoc.exists()) {
                    router.push('dashboard/onboarding');
                    return
                }
                setIsChecking(false);
            } catch (error) {
                console.log("Error checking onboarding status:", error);
                setIsChecking(false);
            }

        };
        checkOnboarding();
    }, [isLoaded, userId, router]);

    if (isChecking) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FDDDB4]"></div>
            </div>
        )       
    }

    return (
        <>
            <Header />
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
                <SectionHeading
                    title="Your Dashboard"
                    subtitle="Your subscription dashboard. Track payments and manage spending effortlessly."
                    className="mt-8"
                    />
                <MetricsGrid />
            </div>
        </>
    );
}