'use client';
import React, {useEffect, useState, useRef} from 'react';
import {motion} from "framer-motion";
import Wrapper from "@/app/_components/wrapper";
import AppButton from "@/app/_components/app-button";

import Image from "next/image";
import HeroPhoto from "@/app/(home)/_components/hero/photo";
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import {SCREENS} from "@/shared/constants";
import Counter from "@/app/_components/counter";

const HomeHero1 = () => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    const autoPlayRef = useRef()
    const {width, height} = useWindowDimensions();

    const STATS = [
        {number: 33, text:'Active business partners '},
        {number: 37,before:'+',after:'%', text:'Overall performance boost'},
        {number: 5, text:`Years in the business`}
    ];

    useEffect(() => {
     // @ts-ignore
        autoPlayRef.current = ()=>{
         if(photoIndex === 2){
             setPhotoIndex(0);
         }else{
             setPhotoIndex(photoIndex + 1);
         }
     }
    });

    useEffect(()=>{
        const play = ()=>{
            // @ts-ignore
            autoPlayRef.current();
        }
        const timeoutIndex = setInterval(play, 3000);
        return ()=>clearInterval(timeoutIndex);
    }, [])

    return (
        <Wrapper>
            <div className={'flex flex-row justify-between mt-4 max-phone:flex-col max-phone:items-center max-phone:gap-4 max-phone:min-h-[905px]'}>
                {/*left*/}
                <motion.div initial={{opacity: 0.1}} animate={{opacity:1, transition: { duration: 1}}} className={'flex flex-col max-w-[560px] max-laptop:max-w-[337px] py-[93px] max-laptop:py-[0px]'}>
                    <h1 className={'font-stick font-semibold text-4xl max-laptop:text-3xl max-phone:text-2xl max-phone:text-center'}>
                        OPTIMIZE YOUR PRODUCT’S
                    </h1>
                    <span className={'-mt-7 font-stick font-semibold text-h1 text-main3 max-laptop:text-3xl max-laptop:mt-0 max-phone:text-2xl max-phone:text-center'}> VISIBILITY AND SALES!</span>
                    <p className={'text-xl max-laptop:text-lg max-phone:text-sm font-normal max-phone:text-justify'}>
                        We help companies, brands, and products to make high returns on digital marketing investments consistently.
                    </p>
                    {width > SCREENS.PHONE && width ?
                        <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: { duration: 1, delay: .5}}} className={' flex flex-col max-laptop:mt-4 max-laptop:flex-col-reverse max-phone:items-center'}>
                            <div className={'mt-8 mb-12'}>
                                <AppButton text={'Contact Us'}/>
                            </div>
                            {/*//gap-[136.5px] max-laptop:gap-[59.5px] max-phone:gap-[47px]*/}
                            <div className={'flex flex-row justify-between'}>
                                {STATS.map((el,index)=>(
                                    <div key={index} className={'flex flex-col gap-2 max-w-[165px] items-center  max-laptop:max-w-[112px] '}>
                                        <span className={'text-h1 max-laptop:text-xl font-semibold text-center flex flex-row'}>
                                            {el.before}
                                            <Counter from={0} to={el.number} className={''}/>
                                            {el.after}
                                        </span>
                                        <span className={'text-base max-laptop:text-sm font-normal text-grey text-center'}>{el.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div> : <></>
                    }
                </motion.div>
                {/*right*/}
                <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: { duration: 1, delay: 1}}} className={'max-laptop:w-full flex max-laptop:justify-center'}>
                    <div className={'flex flex-row gap-[50px] max-laptop:gap-4'}>
                        <div className={'flex flex-col gap-[42px] max-phone:gap-[18px] pt-11 justify-center items-center align-middle'}>
                            <HeroPhoto photoIndex={photoIndex} photoNumber={1}/>
                            <HeroPhoto photoIndex={photoIndex} photoNumber={2}/>
                        </div>
                        <div className={'flex flex-col gap-[27px] max-phone:gap-[18px]'}>
                            <HeroPhoto photoIndex={photoIndex} photoNumber={3}/>
                            <HeroPhoto photoIndex={photoIndex} photoNumber={4}/>
                        </div>
                    </div>
                </motion.div>
                {width <= SCREENS.PHONE && width ?
                    <div className={'flex flex-col max-laptop:flex-col-reverse max-phone:items-center'}>
                        <div className={'mt-8 mb-12'}>
                            <AppButton text={'Contact Us'}/>
                        </div>
                        <div className={'flex flex-row gap-[136.5px] max-laptop:gap-[59.5px] max-phone:gap-[47px]'}>
                            {STATS.map((el,index)=>(
                                <div key={index} className={'flex flex-col gap-2 max-w-[120px]'}>
                                    <span className={'text-h1 max-laptop:text-xl font-semibold text-center'}>{el.number}</span>
                                    <span className={'text-base max-laptop:text-sm font-normal text-grey text-center'}>{el.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>  : <></>
                }
            </div>
        </Wrapper>
    );
};

export default HomeHero1;