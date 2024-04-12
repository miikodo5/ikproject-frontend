import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Amazon consumer insights audit',
    description: 'Market intelligence & research reports for data-driven business decisions on Amazon'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;