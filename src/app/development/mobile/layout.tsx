import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Mobile Development',
    description:'Step into the realm of mobile app innovation, where creativity knows no bounds. We\'re your partner in turning imaginative concepts into tangible mobile solutions.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;