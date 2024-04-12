'use client';
import React, {useEffect, useState} from 'react';
import {motion, useMotionTemplate, useMotionValue, useTransform} from "framer-motion";
import Wrapper from "@/app/_components/wrapper";
import Image from "next/image";

import strategy1 from '@icons/strategy1.svg';
import strategy2 from '@icons/strategy2.svg';
import strategy3 from '@icons/strategy3.svg';
import strategy4 from '@icons/strategy4.svg';
import strategy5 from '@icons/strategy5.svg';

import treeImg from '@images/tree.png';
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import {SCREENS} from "@/shared/constants";
import {AnimateChangeInHeight} from "@/app/_components/animation/change-in-height";
import TitleBlock from "@/app/_components/title-block";
//172.5

const HomeStrategy = () => {

    const {width, height} = useWindowDimensions();
    const [cardWidth, setCardWidth] = useState<number>(223)
    useEffect(()=>{
        if(width < SCREENS.LAPTOP){
            setCardWidth(223);
        }else{
            setCardWidth(345);
        }
    },[width])

    const STRATEGIES = [
        {
            img: strategy1,
            title: 'Initial Consultation and Assessment',
            text: 'Getting to understand your goals, objectives, and current situation to pinpoint your areas of growth.',
            whileinview: {
                left:'8%',
                top: '0%',
                opacity: 1
            },
            delay: 0.5
        },{
            img: strategy2,
            title: 'Tailored Strategy Development',
            text: 'A strategy based on your business goals, covering product optimization, advertising, brand protection, and many more.',
            whileinview: {
                left: `calc(92% - ${cardWidth}px)`,
                top: '0%',
                opacity: 1
            },
            delay: 1
        },{
            img: strategy3,
            title: 'Onboarding and Account Setup',
            text: 'Building the necessary setup from scratch or optimizing the existing one.',
            whileinview: {
                left: 'calc(0%)',
                top: '35%',
                opacity: 1
            },
            delay: 1.5
        },{
            img: strategy4,
            title: 'Implementation and Execution',
            text: 'Executing the strategy across all relevant areas: keyword optimization, ad campaigns’ A/B testing, prompt issue resolution, etc.',
            whileinview: {
                left: `calc(100% - ${cardWidth}px)`,
                top: '35%',
                opacity: 1
            },
            delay: 2
        },{
            img: strategy5,
            title: 'Regular Reporting and Communication',
            text: 'Tracking vital metrics and providing regular, detailed reports with actionable insights and recommendations.',
            whileinview: {
                left: `calc(50% - ${cardWidth/2}px)`,
                top: '66%',
                opacity: 1
            },
            delay: 2.5
        },
    ]



    return (
        <div className={'py-20 bg-mainbg'}>
            <section id='strategy'>
                <Wrapper>
                    <TitleBlock text={'STRATEGY WORK'} type={1} isWhite={true}/>
                    <p className={'font-semibold text-xl max-phone:text-sm max-phone:text-justify text-grey-stroke'}>
                        Steps we take to help you reach desired results:
                    </p>
                </Wrapper>
                <motion.div style={{
                    transition: 'all 0.5s cubic-bezier(0.21, 0.86, 0, -0.09) 0s',
                    perspectiveOrigin: 'center'
                }} className={'max-phone:block hidden relative mt-4  h-max w-max  max-phone:w-full'}
                >
                    <motion.div
                        animate={{
                            background: [
                                useMotionTemplate`radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 55%)`.get(),
                                useMotionTemplate`radial-gradient(circle, rgba(255,255,255,1) 51%, rgba(255,255,255,0) 55%)`.get(),
                                useMotionTemplate`radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 55%)`.get(),
                            ],

                            transition: {
                                repeat: Infinity,
                                duration: 10
                            }
                        }}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                        className={'w-full h-full absolute top-0 blur-3xl rounded-full'}
                    />
                    <motion.div

                        style={{
                            transformStyle: "preserve-3d",
                        }}
                        className={'mx-auto w-max h-max z-50 max-phone:w-[80%]'}>
                        <Image src={treeImg} alt={'tree'} className={'drop-shadow-lg'}/>
                    </motion.div>
                </motion.div>
                <Wrapper>
                    <AnimateChangeInHeight
                        className={'mt-24 max-phone:mt-2 w-full relative !overflow-y-visible !overflow-x-clip min-h-[700px]'}>
                        <motion.div style={{
                            transition: 'all 0.5s cubic-bezier(0.21, 0.86, 0, -0.09) 0s',
                            perspectiveOrigin: 'center'
                        }}
                                    className={'max-phone:hidden relative mt-4 left-1/2 ml-[-250px] max-phone:ml-[-208px] h-max w-max max-phone:w-full '}
                        >
                            <motion.div
                                animate={{
                                    background: [
                                        useMotionTemplate`radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 55%)`.get(),
                                        useMotionTemplate`radial-gradient(circle, rgba(255,255,255,1) 51%, rgba(255,255,255,0) 55%)`.get(),
                                        useMotionTemplate`radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 55%)`.get(),
                                    ],

                                    transition: {
                                        repeat: Infinity,
                                        duration: 10
                                    }
                                }}
                                style={{
                                    transform: "translateZ(50px)",
                                    transformStyle: "preserve-3d",
                                }}
                                className={'max-phone:ml-[-40px] w-full h-full absolute top-0 blur-3xl rounded-full'}
                            />
                            <motion.div

                                style={{
                                    transform: "translateZ(100px)",
                                    transformStyle: "preserve-3d",
                                }}
                                className={'w-max h-max z-50 max-phone:w-[80%]'}>
                                <Image src={treeImg} alt={'tree'} className={'drop-shadow-lg'}/>
                            </motion.div>
                        </motion.div>

                        <div className={'max-[920px]:flex max-[920px]:flex-col gap-8 items-center'}>
                            {STRATEGIES.map((el, index) => (
                                <motion.div
                                    key={index}
                                    whileInView={el.whileinview}
                                    // whileInView={{
                                    //     left: 'calc(8%)',
                                    //     top: '0%'
                                    // }}
                                    initial={{
                                        // height: width < SCREENS.LAPTOP ? '200px': 'max-content',
                                        height: 'max-content',
                                        opacity: 0,
                                        left: 'calc(50% - 172.5px)',
                                        top: '25%'
                                    }}
                                    viewport={{once: true}}
                                    // whileHover={{
                                    //     height: '215px',
                                    // }}
                                    // viewport={{ once: true }}
                                    transition={{
                                        type: 'spring',
                                        delay: el.delay,
                                        duration: 1,
                                        scale: {
                                            duration: 0
                                        },
                                        height: {
                                            duration: 0.3
                                        }
                                    }}
                                    //hover:backdrop-blur-[60px]
                                    // left-[325px] top-[250px]
                                    //left-[calc(50%_-_172.5px)]
                                    //top-1/4
                                    className={'cursor-pointer absolute max-[920px]:static flex flex-col w-[345px] max-laptop:w-[223px] max-[920px]:w-[345px] items-center group opacity-0 rounded-2xl max-w-[1000px]:scale-[0.50]'}
                                >
                                    <Image src={el.img} alt={'strategy'}/>
                                    <span
                                        className={'text-lg font-semibold text-white text-center max-laptop:text-base mt-4'}>{el.title}</span>
                                    <motion.p
                                        // line-clamp-2 line-clamp-none
                                        //line-clamp-2 group-hover:line-clamp-[100]
                                        className={' w-full  max-[920px]:line-clamp-[100] text-sm max-laptop:text-xs font-normal text-white/70 text-center overflow-hidden'}>
                                        {el.text}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </div>
                    </AnimateChangeInHeight>
                </Wrapper>
            </section>

        </div>
    );
};

export default HomeStrategy;