import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Amazon Listing Optimisation',
    description: 'Boost your products’ rank in search results with Amazon-focused SEO & increase conversions with enhanced content'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;