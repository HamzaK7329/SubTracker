'use client';

type ButtonProps = {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
};

export function AddSubscriptionButton({
    onClick,
    className = "",
    children = "Add Subscription",
    disabled,
}: ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm font-semibold text-white bg-gradient-to-r from-[#F77519] to-[#F88D44] hover:opacity-90 transition disabled:opacity-50 ${className}`}
        >
            <span className="text-base">+</span>
            <span>{children}</span>
        </button>
    );
}
