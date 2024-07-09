import type { Metadata } from 'next';
import TheHeader from '@/components/TheHeader';
import React from 'react';

export const metadata: Metadata = {
    title: 'Blog',
    description: "This is Mametov Eldar's blog with the latest news from my life",
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
