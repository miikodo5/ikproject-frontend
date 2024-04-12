import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Amazon account management',
    description: 'Strategic account management for Amazon Seller Central and Vendor'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;