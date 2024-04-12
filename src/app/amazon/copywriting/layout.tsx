import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Amazon Copywriting',
    description: 'Creating copy to help you sell products on Amazon is reliant on the way your products are described'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;