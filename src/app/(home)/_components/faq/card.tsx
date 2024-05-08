import React, {FC, useState} from 'react';
import {AnimatePresence, m} from "framer-motion";

interface IFAQCard {
    index: number,
    setOpen: (index:number)=>void,
    isOpen: boolean,
    open: number,
    el:{
        title: string,
        text: string
    }
}
const FAQCard: FC<IFAQCard> = ({index, setOpen, isOpen, open, el}) => {
    const [rotate, setRotate] = useState<number>(0);
    return (
        <m.div
            key={index}
            onClick={() => {
                if(open === index) setOpen(-1);
                else setOpen(index);
                setRotate(rotate+180);
            }}
            transition={{
                type: 'tween'
            }}
            whileHover={{
                scale: 1.02,
            }}
            // w-[calc(50%-32px)]
            className={'cursor-pointer w-full flex flex-col gap-[14px] py-11 px-9 bg-white/70 backdrop-blur-[6px] shadow-[0_5px_16px_0_rgba(8,15,52,0.06)] rounded-2xl'}>
            <div className={'flex flex-row  justify-between items-center'}>
                <span className={'text-xl max-phone:text-base max-laptop:text-base font-medium'}>{el.title}</span>
                <div
                    className={`min-w-10 min-h-10 ${isOpen && 'bg-main'} rounded-[10px] flex justify-center items-center`}>
                    {isOpen ? (
                        <m.svg
                            animate={{
                                rotate
                            }}
                            transition={{
                                type: 'tween'
                            }}
                            width="13" height="13" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <m.path
                                d={'M0 2.24995V0.75H13V2.24995H0Z'}
                                fill={'white'}
                            />
                        </m.svg>

                    ): (
                        <m.svg
                            animate={{
                                rotate
                            }}
                            transition={{
                                type: 'tween'
                            }}
                            width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d={'M5.75 7.24995H0V5.75H5.75V0H7.24995V5.75H13V7.24995H7.24995V13H5.75V7.24995Z'}
                                fill={'black'}
                            />
                        </m.svg>
                    )}

                </div>
            </div>
            <AnimatePresence>
                {isOpen &&
                    <m.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: {opacity: 1, height: "auto"},
                            collapsed: {opacity: 0, height: 0, transition: {duration: 0}}
                        }}

                        transition={{duration: 0.5, type: 'tween', ease: [0.04, 0.62, 0.23, 0.98], opacity: {duration: 0.5}}}
                    >
                        <p className={'text-wrap h-full w-full text-base max-laptop:text-sm font-normal text-grey '}>
                            {el.text}
                        </p>
                    </m.div>
                }
            </AnimatePresence>
        </m.div>

    );
};

export default FAQCard;