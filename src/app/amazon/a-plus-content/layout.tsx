import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Amazon A+ Content",
    description: 'Enhanced content that drives an increase in conversion rates',
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;