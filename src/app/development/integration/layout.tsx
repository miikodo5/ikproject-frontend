import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Integration',
    description:'We develop complex websites and web applications that can handle high traffic volumes and open up new opportunities for your clients.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;