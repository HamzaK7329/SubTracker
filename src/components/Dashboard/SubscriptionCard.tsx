'use client';

import React, { useState, useRef, useEffect } from 'react';

export type SubscriptionCardProps = {
    logo: string;
    name: string;
    category: string;
    price: string;
    billingDate: string;
    status: 'Active' | 'Paused';
    statusColor?: string;
    onEdit?: () => void;
    onPause?: () => void;
    onStart?: () => void;
    onDelete?: () => void;
};

export default function SubscriptionCard ({
    logo,
    name,
    category,
    price,
    billingDate,
    status,
    statusColor,
    onEdit,
    onPause,
    onStart,
    onDelete,
}: SubscriptionCardProps) {
    const statusBg =
        statusColor ||
        (status === 'Active'
            ? 'bg-green-500'
            : status === 'Paused'
            ? 'bg-yellow-500'
            : 'bg-red-500'
        );

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    
   

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [menuOpen]);


    return (
        <div className="flex flex-col rounded-xl bg-[#131720] p-4 border-[#252934] w-full max-w-sm">
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
                <div className='flex flex-col items-center'>
                <div className="relative" ref={menuRef}>
                    <button
                        className='p-1 rounded-full hover:bg-gray-700 transition mb-1'
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label='Open menu'
                    >
                        <svg width="20" height="20" fill='currentColor' className='text-gray-400' >
                            <circle cx="4" cy="10" r="2" />
                            <circle cx="10" cy="10" r="2" />
                            <circle cx="16" cy="10" r="2" />
                        </svg>
                    </button>
                    {menuOpen && (
                        <div className='absolute right-0 top-8 z-10 w-40 bg-[#23272f] rounded-lg shadow-lg py-2'>
                            <button
                                className='block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700'
                                onClick={() => {
                                    setMenuOpen(false);
                                    if (onEdit) onEdit();
                                }}
                            >
                                Edit Subscription
                            </button>
                            {status === 'Active' ? (
                                <button
                                className='block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700'
                                onClick={() => {
                                    setMenuOpen(false);
                                    if (onPause) onPause();
                                }}
                            >
                                Pause Subscription
                            </button>
                            ) : (
                                <button
                                className='block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700'
                                onClick={() => {
                                    setMenuOpen(false);
                                    if (onStart) onStart();
                                }}
                            >
                                Start Subscription
                            </button>
                            )}
                            
                            <button
                                className='block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700'
                                onClick={() => {
                                    setMenuOpen(false);
                                    if (onDelete) onDelete();
                                }}
                            >
                                Delete Subscription
                            </button>
                        </div>
                    )}
                </div>

                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium text-black ${statusBg}`}
                >
                    {status}
                </span>
                </div>
            </div>
            

            <div className="flex justify-between mt-6">
                <div>
                    <p className="text-sm text-gray-400 ">Monthly Cost</p>
                    <p className="text-lg font-semibold text-white ">{price}</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-400 ">Next Billing</p>
                    <p className="text-lg font-semibold text-white ">{billingDate}</p>
                </div>
            </div>

        </div>
    );

}
