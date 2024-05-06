import React from 'react';
import {motion} from "framer-motion";
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import {SCREENS} from "@/shared/constants";
const TitleBlock = ({type, text, isWhite}: {
    type: number,//1 -- left, 2 - right, 3 -- middle
    text: string,
    isWhite?: boolean
}) => {
    const {width, height} = useWindowDimensions();
    return (
        width < SCREENS.PHONE ? <div className={'flex flex-row items-center gap-[10px] w-full'}>
                {[3].includes(type) && (
                    <div className={`h-[2px] w-1/4 bg-main ${isWhite && 'bg-white'}`}/>
                )}
                {[2].includes(type) && (
                    <div className={`h-[2px] flex-[1_1_0%] bg-main ${isWhite && 'bg-white'}`}/>
                )}
                <h3 className={`font-stick font-semibold text-3xl max-phone:text-2xl ${isWhite && 'text-white'}`}>{text.toUpperCase()}</h3>
                {[1, 3].includes(type) && (
                    <div className={`h-[2px] flex-[1_1_0%] bg-main ${isWhite && 'bg-white'}`}/>
                )}
            </div> :
            <div className={'flex flex-row items-center gap-[10px] w-full'}>
                {[3].includes(type) && (
                    <motion.div
                        whileInView={{
                            width: '25%'
                        }}

                        viewport={{once: true}}
                        transition={{
                            duration: 1.5
                        }} className={`h-[2px] w-0 bg-main ${isWhite && 'bg-white'}`}/>
                )}
                {[2].includes(type) && (
                    <motion.div
                        whileInView={{
                            flex: '1 1 0%'
                        }}
                        viewport={{once: true}}
                        transition={{
                            duration: 1.5,
                            type: 'tween'
                        }} className={`h-[2px] flex-[0_0_0%] bg-main ${isWhite && 'bg-white'}`}/>
                )}
                <h3 className={`font-stick font-semibold text-3xl max-phone:text-2xl ${isWhite && 'text-white'}`}>{text.toUpperCase()}</h3>
                {[1, 3].includes(type) && (
                    <motion.div
                        whileInView={{
                            flex: '1 1 0%'
                        }}
                        viewport={{once: true}}
                        transition={{
                            duration: 1.5,
                            type: 'tween'
                        }} className={`h-[2px] flex-[0_0_0%] bg-main ${isWhite && 'bg-white'}`}/>
                )}
            </div>
    );
};

export default TitleBlock;