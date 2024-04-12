import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Web Analytics',
    description: 'Web analytics forms the backbone of the data-driven approach in digital marketing.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;