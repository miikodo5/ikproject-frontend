import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Marketing Analytics Services',
    description: 'Create a system that will help you identify the best channels for attracting clients and make effective budget allocation decisions.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;