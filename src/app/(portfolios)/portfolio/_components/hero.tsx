import React from 'react';
import Wrapper from "@/app/_components/wrapper";

import heroImg from '@images/hero-1.png';
import Image from "next/image";

const PortfolioHero = ({header, paragraph, stats}:{header: string, paragraph: string, stats: {number:string,text: string}[]}) => {
    return (
        <>
            <div className={'min-h-[690px] z-[60] w-full'}>
                <Image src={heroImg} priority alt={'heroImg'} className={'w-full h-[768px] object-cover absolute top-0 -z-20 bg-black max-phone:h-[865px]'}/>

                <Wrapper>
                    <div className={'w-full flex flex-col items-center gap-6 pt-[20px] max-laptop:pt-[1px] max-phone:pt-[0px]'}>
                        <div>
                            <h1 className={'text-4xl text-center text-white font-stick font-semibold max-laptop:text-3xl max-phone:text-3xl max-laptop:text-center'}>
                                {header.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {return word.toUpperCase();})}
                            </h1>
                            <p className={'text-base text-white/[0.55] text-center font-medium max-w-[755px] max-phone:text-xs'}>
                                {paragraph}
                            </p>
                        </div>
                        <div className={'flex flex-row justify-center flex-wrap gap-8 max-phone:min-w-[312px] max-phone:gap-4'}>
                            {stats.map((el, index) => (
                                <div key={index} className={'flex flex-col gap-2 w-[132px] max-phone:w-[148px]'}>
                                    <span className={'text-1xl text-white/70 font-semibold text-center'}>{el.number}</span>
                                    <span className={'text-sm font-normal text-white text-center '}>{el.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={'w-full pt-5 flex flex-col gap-[13px] items-center justify-center max-laptop:pt-0 max-phone:pt-[38px]'}>
                        <div className={'h-[78px] w-[2px] bg-white animate-bounce'}/>
                        <span className={'text-sm text-white'}>Scroll for more</span>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default PortfolioHero;