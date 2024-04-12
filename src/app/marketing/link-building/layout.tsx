import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Link Building',
    description: 'We will help you increase your website\'s link mass and set up external SEO optimization'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;