import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Email Marketing Agency',
    description: 'Email marketing on a turnkey basis for online stores, mobile applications, online services and commercial sites.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;