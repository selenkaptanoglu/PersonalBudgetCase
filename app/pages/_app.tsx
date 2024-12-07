"use client";
import { AppProvider } from '././../context/AppContext';

export default function MyApp({ Component, pageProps }: any) {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
}