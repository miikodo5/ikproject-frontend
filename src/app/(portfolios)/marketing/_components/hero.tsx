import React from 'react';
import Image from "next/image";
import Wrapper from "@/app/_components/wrapper";

import heroImg from '@images/hero-2.png';

const MarketingHero = ({header, paragraph}: {header: string, paragraph: string}) => {
    const newHeader = header.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {return word.toUpperCase();});
    return (
        <>
            <div className={'w-full z-[900] min-h-[632px] max-[930px]:min-h-[750px]'}>
                <Image src={heroImg} priority alt={'heroImg'} className={'absolute top-0 right-0 -z-20 max-w-[720px] max-h-[820px] object-cover max-laptop:left-0 max-laptop:right-auto max-laptop:max-h-[419px] max-laptop:max-w-full max-[930px]:max-h-[305px]'}/>
                <Wrapper>
                    <div className={'w-full h-max'}>
                        <div
                            className={'h-[330px] mt-[110px] w-full flex flex-col justify-center max-laptop:h-[243px] max-[930px]:flex-col max-[930px]:h-[191px] max-[930px]:mt-[128px] '}>
                            <span
                                className={'min-w-1/3  text-right  self-start text-h80 max-laptop:text-h1 max-[930px]:text-1xl'}>{newHeader.split(' ')[0]}</span>
                            <span
                                className={'self-center -my-[72px] text-h198 font-stick max-laptop:text-4xl max-laptop:-my-[18px] max-[930px]:text-4xl '}>{newHeader.split(' ')[1]}</span>
                            <span
                                className={'min-w-1/3  text-left  self-end text-h80 min-h-[128px] max-laptop:min-h-[102px] max-[930px]:min-h-[57px]  max-laptop:text-h1 max-[930px]:text-1xl '}>{newHeader.split(' ')[2] ? newHeader.split(' ')[2] : ' '}</span>
                        </div>
                    </div>
                    <div className={'flex flex-row w-[57%] max-[930px]:w-full justify-between -mt-[50px]'}>
                        <p className={'max-w-[488px] max-laptop:text-base max-laptop:max-w-[696px] max-[930px] max-laptop:text-justify max-laptop:mx-auto max-[930px]:mt-[53px]'}>
                            {paragraph}
                        </p>
                        {/*<div*/}
                        {/*    className={'self-end max-laptop:hidden pt-5 justify-self-center -mt-[140px] flex flex-col gap-[13px] items-center justify-center max-laptop:mt-[120px] max-phone:mt-0'}>*/}
                        {/*    <div className={'h-[78px] w-[2px] bg-black animate-bounce'}/>*/}
                        {/*    <span className={'text-sm text-black'}>Scroll for more</span>*/}
                        {/*</div>*/}
                    </div>
                    <div
                        className={'absolute top-[624px] left-1/2 -translate-x-1/2 flex pt-5 justify-self-center flex-col gap-[13px] items-center justify-center max-laptop:top-[667px] max-[930px]:top-[862px] max-[930px]:mt-0'}>
                        <div className={'h-[78px] w-[2px] bg-black animate-bounce'}/>
                        <span className={'text-sm text-black'}>Scroll for more</span>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default MarketingHero;