import type { Metadata } from 'next';
import TheHeader from '@/components/TheHeader';
import React from 'react';

export const metadata: Metadata = {
    title: 'IT',
    description:
        "A section with Mametov Eldar's portfolio in IT and his latest achievements in the it field",
};

export default function ITLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <TheHeader />
                <main>{children}</main>
            </body>
        </html>
    );
}
