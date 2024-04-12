import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Amazon demand-side platform',
    description: 'Extend the reach of your advertising beyond Amazon to audiences across the web'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;