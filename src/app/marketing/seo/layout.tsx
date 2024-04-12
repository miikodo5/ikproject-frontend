import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'SEO (Search Engine Optimization)',
    description: 'Grow your businesses, not just to improve your overall search rankings.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;