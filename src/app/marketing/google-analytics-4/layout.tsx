import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Setting up Google Analytics 4',
    description: 'Organize migration from the previous version.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;