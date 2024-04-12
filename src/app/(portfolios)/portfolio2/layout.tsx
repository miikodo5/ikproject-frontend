import React, {FC} from 'react';

interface IPortfolioLayout {
    children: React.ReactNode;
}
const PortfolioLayout: FC<IPortfolioLayout> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default PortfolioLayout;