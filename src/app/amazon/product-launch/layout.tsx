import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Amazon product launch',
    description: 'Launch strategies for products on Amazon – packed with SEO, PPC and UX strategy for success'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;