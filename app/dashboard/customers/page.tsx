"use client";

import { useAppContext } from './../../context/AppContext';

export default function Page() {
    const { customers, addCustomer } = useAppContext();


    const handleAddCustomer = () => {
        const newCustomer = {
            id: customers.length + 1,
            name: 'Jankey',
            email: 'ıtykt@example.com',
            image_url: ''
        };


        addCustomer(newCustomer);
    };

    return (
        <div>
            <h1>Customers</h1>
            {customers.length === 0 ? (
                <p>No customers available.</p>
            ) : (
                customers.map((customer) => (
                    <div key={customer.id}>
                        <p>{customer.name}</p>
                        <p>{customer.email}</p>
                    </div>
                ))
            )}
            <button onClick={handleAddCustomer}>
                Add Customer
            </button>
        </div>
    );
}
