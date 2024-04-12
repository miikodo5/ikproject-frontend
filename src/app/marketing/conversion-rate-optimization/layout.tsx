import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Conversion Rate Optimization',
    description: 'Perform an audit of your analytics system. Examine user behavior on the site.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;