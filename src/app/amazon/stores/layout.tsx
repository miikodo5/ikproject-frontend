import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Amazon Stores',
    description: 'Inspire, educate & sell with UX-considered Amazon stores'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;