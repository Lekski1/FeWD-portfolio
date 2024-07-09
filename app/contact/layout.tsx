import type { Metadata } from 'next';
import TheHeader from '@/components/TheHeader';
import React from 'react';

export const metadata: Metadata = {
    title: 'Contact',
    description: "Mametov Eldar's contacts to contact him",
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
