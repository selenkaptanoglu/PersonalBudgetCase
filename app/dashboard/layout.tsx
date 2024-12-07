import React from 'react';
import { AppProvider } from './../context/AppContext';
import { lusitana } from '@/app/ui/fonts';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Your App</title>
            </head>
            <body className={lusitana.className}>
                <AppProvider>
                    {children} {/* AppProvider ile sararak children'ı render edin */}
                </AppProvider>
            </body>
        </html>
    );
}