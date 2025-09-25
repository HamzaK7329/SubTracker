'use client';

import { useEffect, useMemo, useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, doc, onSnapshot, query, where, Timestamp, getDoc } from "firebase/firestore";

type SubDoc = {
    id: string;
    name: string;
    amount: number;
    currency: string;
    cycle: 'daily' | 'weekly' | 'monthly' | 'quaterly' | 'yearly';
    interval?: number;
    status: 'active' | 'paused' | 'canceled';
    nextChargeAt?: Timestamp;
};

function monthlyEquivalent(amount: number, cycle: SubDoc['cycle'], interval = 1) {
    const DAYS_IN_MONTH = 30.4375;
    const WEEKS_IN_MONTH = 4.34524;
    switch (cycle) {
        case 'daily': return amount * DAYS_IN_MONTH * interval;
        case 'weekly': return amount * WEEKS_IN_MONTH * interval;
        case 'monthly': return amount * (1 / 1) * interval;
        case 'quaterly': return amount * (1 / 3) * interval;
        case 'yearly': return amount * (1 / 12) * interval;
        default: return amount;
    }

}

export function useSubscriptionMetrics(uid?: string) {
    const [subs, setSubs] = useState<SubDoc[]>([]);
    const [userCurrency, setUserCurrency] = useState<string>('USD');
    const [loading, setLoading] = useState(true);

    // fetch user profile for defaultCurrency
    useEffect(() => {
        if (!uid) return;
        (async () => {
            try {
                const userSnap = await getDoc(doc(db, 'users', uid));
                const defCur = (userSnap.data()?.defaultCurrency as string) || 'USD';
                setUserCurrency(defCur);
            } catch {
                setUserCurrency('USD');
            }
        })();
    }, [uid]);

    useEffect(() => {
        if (!uid) return;
        setLoading(true);

        const subRef = collection(doc(db, 'users', uid), 'subscriptions');
        const q = query(
            subRef,
            where('status', '==', 'active'),
            //orderBy('nextChargeAt', 'asc')
        );

        const off = onSnapshot(
            q,
            snap => {
                console.log('subs count:', snap.size);
                const rows = snap.docs.map(d => ({ id: d.id, ...(d.data() as Omit<SubDoc, "id">) })) as SubDoc[];
                setSubs(rows);
                setLoading(false);
            },
            () => setLoading(false)
        );

        return () => off();
    }, [uid]);

    const metrics = useMemo(() => {
        const norm = subs.map(s => ({
            ...s,
            status: (s.status ?? 'active').toLowerCase() as SubDoc['status'],
            cycle: (s.cycle ?? 'monthly').toLowerCase() as SubDoc['cycle'],
            interval: s.interval ?? 1,
            amount: Number(s.amount) || 0,
        }));

        if (!subs.length) {
            return {
                monthlyTotal: 0,
                yearlyTotal: 0,
                activeCount: 0,
                nextPaymentDate: undefined as Date | undefined,
                mostExpensiveName: undefined as string | undefined,
                mostExpensiveValue: 0,
                pausedCount: 0,
                dueThisWeekCount: 0,
            }
        }

        const monthlyTotal = subs.reduce((sum, s) => {
            const interval = s.interval ?? 1;
            return sum + monthlyEquivalent(s.amount || 0, s.cycle, interval);
        }, 0);

        const yearlyTotal = monthlyTotal * 12;

        const upcoming = subs
            .map(s => s.nextChargeAt?.toDate())
            .filter((d): d is Date => !!d)
            .sort((a, b) => a.getTime() - b.getTime())[0];

        const active = norm.filter(s => s.status === 'active');
        const paused = norm.filter(s => s.status === 'paused');

        const withMonthly = active
            .map(s => ({ ...s, monthly: monthlyEquivalent(s.amount, s.cycle, s.interval)}))
            .sort((a, b) => b.monthly - a.monthly);

        const mostExpensive = withMonthly[0];
        const now = new Date();
        const end = new Date();
        end.setDate(end.getDate() + 7);
        end.setHours(23, 59, 59, 999);

        const dueThisWeekCount = active.filter(s => {
            const d = s.nextChargeAt?.toDate();
            return d && d >= now && d <= end;
        }).length;

        return {
            monthlyTotal,
            yearlyTotal,
            activeCount: subs.length,
            nextPaymentDate: upcoming,
            mostExpensiveName: mostExpensive?.name,
            mostExpensiveValue: mostExpensive?.monthly ?? 0,
            pausedCount: paused.length,
            dueThisWeekCount,
        };

    }, [subs]);

    function fmtCurrency(n: number) {
        try {
            return new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency: userCurrency || 'USD',
                maximumFractionDigits: 2,
            }).format(n);
        } catch {
            return new Intl.NumberFormat().format(n);
        }
    }

    function fmtNextPayment(d?: Date) {
        if (!d) return '-';
        const now = new Date();
        const ms = d.getTime() - now.getTime();
        const days = Math.ceil(ms / (1000 * 60 * 60 * 24));
        if (days < 0) {
            return d.toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric'});
        }
        if (days === 0) return "Today";
        if (days === 1) return "Tomorrow";
        return `In ${days} days`
    }

    return {
        loading,
        userCurrency,
        monthlyTotal: metrics.monthlyTotal,
        yearlyTotal: metrics.yearlyTotal,
        activeCount: metrics.activeCount,
        monthlyLabel: fmtCurrency(metrics.monthlyTotal),
        yearlyLabel: fmtCurrency(metrics.yearlyTotal),
        activeCountLabel: String(metrics.activeCount),
        nextPaymentLabel: fmtNextPayment(metrics.nextPaymentDate),

        mostExpensiveLabel: metrics.mostExpensiveName
            ? `${metrics.mostExpensiveName} - ${fmtCurrency(metrics.mostExpensiveValue)}`
            : '-',
        pausedLabel: String(metrics.pausedCount),
        dueThisWeekLabel: `${metrics.dueThisWeekCount} Subscription${metrics.dueThisWeekCount === 1 ? '' : 's'}`,
    };

}

