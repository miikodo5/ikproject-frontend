import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Search engine reputation management',
    description: 'SERM refers to the influencing and management of the online reputation of a brand or an individual.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;