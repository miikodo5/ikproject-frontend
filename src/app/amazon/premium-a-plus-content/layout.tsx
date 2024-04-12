import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Premium A+ Content',
    description: 'The premium shopping experience that boosts sales by up to 15%'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;