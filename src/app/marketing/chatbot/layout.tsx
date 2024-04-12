import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Chatbot Development',
    description: 'Customize the collection of your subscriber base. Develop triggers and sales funnels for your chatbot. Customize a chatbot for your business.'
};
const Layout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;