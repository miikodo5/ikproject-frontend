'use client';
import React from 'react';
import {motion} from "framer-motion";
import Wrapper from "@/app/_components/wrapper";
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import {SCREENS} from "@/shared/constants";
import TitleBlock from "@/app/_components/title-block";

const PortfolioStrategy = ({strategy}:{strategy: {title: string, text: string}[]}) => {
    const duration = 2;

    const {width, height}= useWindowDimensions();

    return (
        <Wrapper>
            <div className={'my-20'}>
                <TitleBlock text={'STRATEGY WORK'} type={2}/>
                <div className={'flex items-center justify-center max-laptop:items-start'}>
                    {/*left*/}
                    <div className={'pt-12 flex-1 self-start flex-col hidden h-full max-laptop:flex'}>
                        {strategy.map((el, index) => (
                            <div key={index} className={'flex flex-col gap-[2px] items-end min-h-[180px]'}>
                                {index % 2 !== 0 ?
                                    <>
                                        <motion.span
                                            initial={{
                                                width: 0
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            
                                            animate={{
                                                width: 'auto',
                                                transition: {
                                                    delay: index * duration
                                                }
                                            }}
                                            className={'max-w-[208px] text-sm text-grey font-semibold text-clip overflow-hidden w-full text-center max-laptop:text-right'}>{el.title}</motion.span>
                                        <motion.p
                                            initial={{
                                                height: 0
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            animate={{
                                                height: 'auto',
                                                transition: {
                                                    delay: index * duration
                                                }
                                            }}
                                            className={'max-w-[208px] text-xs text-grey-1 font-normal text-clip overflow-hidden  text-right'}>{el.text}</motion.p>
                                    </> :<></>
                                }
                            </div>
                        ))}
                    </div>
                    {/*center*/}
                    <div className={'flex flex-col items-start justify-start  gap-5 px-2 pt-12 min-w-[1216px] max-laptop:min-w-max  max-laptop:justify-center max-laptop:flex-wrap max-laptop:content-center'}>
                        <div className={'flex flex-row gap-4 px-[96px] max-laptop:px-4 max-laptop:flex-col'}>
                            {[1, 2, 3, 4, 5].map((el, index) => (
                                <div key={index} className={'flex flex-row items-center gap-4 max-laptop:flex-col'}>
                                    {index ?
                                        <motion.div
                                            initial={{
                                                height: width < SCREENS.LAPTOP ? 0 : 2,
                                                width: width < SCREENS.LAPTOP ? 2 : 0,
                                            }}
                                            animate={{
                                                height: width < SCREENS.LAPTOP ? 100 : 2,
                                                width: width < SCREENS.LAPTOP ? 2 : 160,
                                                transition: {
                                                    duration: duration,
                                                    delay: (index - 1) * duration
                                                }
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            className={'bg-grey-2 w-40 h-[2px] max-laptop:h-[100px] max-laptop:w-[2px]'}
                                        /> : <></>}
                                    <motion.div
                                        initial={{
                                            opacity: 0
                                        }}
                                        animate={{
                                            opacity: 1,
                                            transition: {
                                                delay: index * duration
                                            }
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        className={'h-12 w-12 rounded-full bg-main text-white text-base font-semibold items-center justify-center flex'}>
                                        {el}
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                        <div className={'flex flex-row max-laptop:hidden'}>
                            {strategy.map((el, index) => (
                                <div key={index} className={'flex flex-col gap-[2px] items-center px-4 text-center max-laptop:text-left'}>
                                    <motion.span
                                        initial={{
                                            width: 0
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        animate={{
                                            width: 'auto',
                                            transition: {
                                                delay: index * duration
                                            }
                                        }}
                                        className={'max-w-[208px] text-sm text-grey font-semibold text-clip overflow-hidden'}>{el.title}</motion.span>
                                    <motion.p
                                        initial={{
                                            height: 0
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        animate={{
                                            height: 'auto',
                                            transition: {
                                                delay: index * duration
                                            }
                                        }}
                                        className={'max-w-[208px] text-xs text-grey-1 font-normal text-center text-clip overflow-hidden'}>{el.text}</motion.p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*right*/}
                    <div className={'pt-12 flex-1 self-start flex-col hidden h-full max-laptop:flex'}>
                        {strategy.map((el, index) => (
                            <div key={index} className={'flex flex-col gap-[2px] items-start min-h-[180px] w-full'}>
                                {index % 2 === 0 ?
                                    <>
                                        <motion.span
                                            initial={{
                                                width: 0
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            animate={{
                                                width: 'auto',
                                                transition: {
                                                    delay: index * duration
                                                }
                                            }}
                                            className={'max-w-[208px] text-sm text-grey font-semibold text-clip overflow-hidden w-full text-left text-center max-laptop:text-left'}>{el.title}</motion.span>
                                        <motion.p
                                            initial={{
                                                height: 0
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            animate={{
                                                height: 'auto',
                                                transition: {
                                                    delay: index * duration
                                                }
                                            }}
                                            className={'max-w-[208px] text-xs text-grey-1 font-normal text-clip overflow-hidden  text-left'}>{el.text}</motion.p>
                                    </> :<></>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default PortfolioStrategy;