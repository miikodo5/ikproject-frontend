import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Amazon Product Image',
    description: 'Inform & convert with high-performing product content'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;