"use client";

import React, { createContext, useContext, ReactNode, useState } from 'react';

interface Customer {
    id: number;
    name: string;
}

interface Invoice {
    id: number;
    amount: number;
    customerId: number;
}

interface AppContextProps {
    customers: Customer[];
    invoices: Invoice[];
    setCustomers: (customers: Customer[]) => void;
    setInvoices: (invoices: Invoice[]) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    return (
        <AppContext.Provider value={{ customers, invoices, setCustomers, setInvoices }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
