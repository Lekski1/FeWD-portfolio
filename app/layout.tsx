import type { Metadata } from 'next';
import TheHeader from '@/components/TheHeader';
import React from 'react';

export const metadata: Metadata = {
    title: 'Home',
    description:
        "Join me, Eldar, in my journey around the world FROM and beyond. This blog is a mix of personal stories, career reflections, and my hobbies, including cybersecurity and backend. Let's unite!",
    authors: [{ name: 'Eldar Mametov' }],
    openGraph: {
        images: [
            {
                url: 'favicon.ico',
                alt: 'Description of your image',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <TheHeader />
                {children}
            </body>
        </html>
    );
}
