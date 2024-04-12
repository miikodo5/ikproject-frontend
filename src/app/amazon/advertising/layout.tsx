import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Amazon advertising',
    description: 'Drive increased visibility and conversions with fully-managed Amazon AMS advertising'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;