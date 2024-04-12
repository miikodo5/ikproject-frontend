import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Amazon promotions strategy',
    description: 'Promotions that grab attention and win sales on Amazon'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;