import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Mobile Analytics',
    description: 'Customize the actions you want to track. Set up metrics and reporting.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;