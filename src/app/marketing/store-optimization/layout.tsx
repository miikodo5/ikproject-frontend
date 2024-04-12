import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'App Store Optimization',
    description: 'Put simply, you only pay for the increased number of installs of your application.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;