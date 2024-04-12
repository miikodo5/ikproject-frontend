import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PPC',
    description: 'Сomplex strategies for Pay Per Click and targeted advertising.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;