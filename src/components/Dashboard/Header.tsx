'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

function cx(...cls: Array<string | false | undefined>) {
    return cls.filter(Boolean).join(' ');
}

export default function DashboardHeader() {
    const pathname = usePathname();

    const nav = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/analytics", label: "Analytics" },
        { href: "/settings", label: "Settings" }
    ];

    const isActive = (href: string) => {
        if (href === "/dashboard") return pathname === "/dashboard" || pathname?.startsWith("/dashboard");
        return pathname === href || pathname?.startsWith(`${href}/`);
    };

    return (
        <header className='w-full border-b border-[#2A2A2A] bg-[#0b1018]/60 backdrop-blur '>
            <div className='mx-auto w-full max-w-7xl h-14 flex items-center justify-between px-4 sm:px-6 '>
                <Link href='/' className='text-white font-semibold text-lg' >
                    SubHawk
                </Link>

                <nav className='hidden sm:flex items-center gap-2 '>
                    {nav.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className={cx(
                                'px-3 py-1.5 rounded-full text-sm transition-colors',
                                'text-secondary-500 hover:text-white',
                                isActive(item.href) && "bg-[#2A2D21] text-white "
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                
                <div className='flex items-center gap-3'>
                    <Link
                        href="/upgrade"
                        className='px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#DA903D] to-[#F4A958] hover:opacity-90 transition '
                    >
                        Upgrade to Plus
                    </Link>

                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: "w-8 h-8",
                                userButtonPopoverCard: 'bg-[#0b1018] border border-[#2A2A2A]',
                                userButtonPopoverActionButton: 'text-white hover:bg-[#2A2A2A] ',
                                userButtonPopoverFooter: 'border-t border-[#2A2A2A]'
                            }
                        }}
                    />
                </div>
            </div>
        </header>
    )
   
}