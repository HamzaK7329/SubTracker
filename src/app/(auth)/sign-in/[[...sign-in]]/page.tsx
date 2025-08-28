// scr/app/privacy/page.tsx
import { SignIn } from "@clerk/nextjs";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your information."
};

export default function Page() {
    return (
        <SignIn />
    )
}
