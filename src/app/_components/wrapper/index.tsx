
import React from 'react';

const Wrapper = ({children}:{children: React.ReactNode}) => {
    return (
        <div className={`w-[1440px] max-w-[calc(100%-224px)] mx-auto max-laptop:max-w-[calc(100%-72px)] max-phone:max-w-[calc(100%-48px)] `}>
             {children}
        </div>
    );
};

export default Wrapper;