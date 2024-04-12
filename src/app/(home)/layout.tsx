import React, {FC} from 'react';

interface IHomeLayout {
    children: React.ReactNode;
}
const HomeLayout: FC<IHomeLayout> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default HomeLayout;