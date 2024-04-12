import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Social media marketing',
    description: 'Effective brand promotion using social media, targeted advertising and influencer marketing.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;