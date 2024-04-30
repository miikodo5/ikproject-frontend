'use client';
import React, {createContext, useState} from 'react';

export enum From {
    Partner = 'partner',
    Customer = 'customer'
}

export type TypeContactFrom = From.Partner | From.Customer;
export const ContactFromContext = createContext<any>(null);

const ContactFromProvider = ({children}:{children: React.ReactNode}) => {
    const [from, setFrom] = useState<TypeContactFrom>(From.Partner);
    return (
        <ContactFromContext.Provider value={{from, setFrom}}>
            {children}
        </ContactFromContext.Provider>
    );
};

export default ContactFromProvider;