import React from 'react';
import Image from "next/image";
import Wrapper from "@/app/_components/wrapper";

import heroImg from '@images/hero-2.png';

const MarketingHero = ({header, paragraph}: {header: string, paragraph: string}) => {
    return (
        <>
            <div className={'w-full z-[900] min-h-[632px]'}>
                <Image src={heroImg} priority alt={'heroImg'} className={'absolute top-0 right-0 -z-50 max-w-[720px] max-h-[820px] object-cover max-laptop:left-0 max-laptop:right-auto max-laptop:max-h-[419px] max-laptop:max-w-full max-phone:max-h-[305px]'}/>
                <Wrapper>
                    <div className={'w-full h-max'}>
                        <div
                            className={'h-[330px] mt-[110px] w-full flex flex-col justify-center max-laptop:h-[243px] max-phone:flex-col max-phone:h-[191px] max-phone:mt-[128px] '}>
                            <span
                                className={'min-w-1/3  text-right  self-start text-h80 max-laptop:text-h1 max-phone:text-1xl'}>{header.split(' ')[0]}</span>
                            <span
                                className={'self-center -my-[72px] text-h198 font-stick max-laptop:text-4xl max-laptop:-my-[18px] max-phone:text-4xl '}>{header.split(' ')[1]}</span>
                            <span
                                className={'min-w-1/3  text-left  self-end text-h80 min-h-[128px] max-laptop:min-h-[102px] max-phone:min-h-[57px]  max-laptop:text-h1 max-phone:text-1xl '}>{header.split(' ')[2] ? header.split(' ')[2] : ' '}</span>
                        </div>
                    </div>
                    <div className={'flex flex-row w-[57%] max-phone:w-full justify-between'}>
                        <p className={'max-w-[488px] max-laptop:text-base max-laptop:max-w-[696px] max-phone:max-w-full max-laptop:text-justify max-laptop:mx-auto max-phone:mt-[53px]'}>
                            {paragraph}
                        </p>
                        <div
                            className={'max-laptop:hidden pt-5 justify-self-center -mt-[140px] flex flex-col gap-[13px] items-center justify-center max-laptop:mt-[120px] max-phone:mt-0'}>
                            <div className={'h-[78px] w-[2px] bg-black animate-bounce'}/>
                            <span className={'text-sm text-black'}>Scroll for more</span>
                        </div>
                    </div>
                    <div
                        className={'hidden max-laptop:flex pt-5 justify-self-center flex-col gap-[13px] items-center justify-center max-laptop:mt-[80px] max-phone:mt-0'}>
                        <div className={'h-[78px] w-[2px] bg-black animate-bounce'}/>
                        <span className={'text-sm text-black'}>Scroll for more</span>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default MarketingHero;