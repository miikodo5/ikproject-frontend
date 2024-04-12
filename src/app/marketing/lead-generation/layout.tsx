import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'B2B Lead Generation',
    description: 'Are you looking to create a steady stream of leads for your business that will help you enter or scale in new markets?'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;