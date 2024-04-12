import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'E-Commerce',
    description:'With our E-Commerce services, powered by Shopify and WordPress expertise, we craft revenue-focused solutions for B2B and consumer brands.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;