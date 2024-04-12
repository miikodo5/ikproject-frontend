import React, {Dispatch, FC, SetStateAction} from 'react';
import {motion} from "framer-motion";

interface IAppSwitcher {
    isPartner: boolean,
    setIsPartner: Dispatch<SetStateAction<boolean>>,
    text1: string,
    text2: string
}
const AppSwitcher: FC<IAppSwitcher> = ({isPartner, setIsPartner, text1, text2}) => {
    return (
        <div className={'relative w-max h-max cursor-pointer rounded-[10px] border border-[#DFDFDF]'}
             onClick={() => setIsPartner(!isPartner)}>
            <div className={'relative z-10 flex flex-row text-sm font-bold'}>
                <div className={'w-[120px] py-[10px] text-center rounded-[10px]'}>
                    <span className={`${isPartner && 'text-white'}`}>{text1}</span>
                </div>
                <div className={'w-[120px] py-[10px] text-center rounded-[10px]'}>
                    <span className={`${!isPartner && 'text-white'}`}>{text2}</span>
                </div>
            </div>
            {isPartner}
            <motion.div
                initial={{
                    left: 0
                }}
                animate={
                    isPartner ? {
                            left: 0,
                            right: 'auto'
                        }
                        : {
                            right: 0,
                            left: 'auto'
                        }}

                className={'absolute bg-main top-0 h-full w-[120px] rounded-[10px]'}/>
        </div>
    );
};

export default AppSwitcher;