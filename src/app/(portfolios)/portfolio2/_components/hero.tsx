import React from 'react';
import Image from "next/image";
import Wrapper from "@/app/_components/wrapper";
import AppButton from "@/app/_components/app-button";

import heroImg1 from '@images/hero-4-1.png';
import heroImg2 from '@images/hero-4-2.png';
import heroImg3 from '@images/hero-4-3.png';

const Portfolio2Hero = ({header, paragraph}: {header: string, paragraph: string}) => {
    return (
        <>
            <div className={'w-full z-[60] h-[705px] max-laptop:flex flex-col-reverse max-laptop:h-max'}>
                <Wrapper>
                    <div className={'w-full relative max-laptop:h-[564px] max-phone:h-[420px] max-laptop:-mt-[60px]'}>
                        <Image src={heroImg1} alt={'heroImg'}
                               priority
                               className={'absolute top-[30px] right-[118px] max-laptop:right-[180px] max-phone:right-[180px]  max-w-[458px] max-h-[209px] object-cover max-laptop:max-w-[343px] max-laptop:max-h-[157px] max-phone:max-w-[125px] max-phone:max-h-[85px]'}/>
                        <Image src={heroImg3} alt={'heroImg'}
                               priority
                               className={'absolute top-[275px] right-[26%] max-laptop:right-[40%] max-phone:top-[305px] max-phone:right-[180px] max-w-[326px] max-h-[192px] object-cover max-laptop:max-w-[245px] max-laptop:max-h-[144px] max-phone:max-w-[148px] max-phone:max-h-[82px]'}/>
                        <Image src={heroImg2} alt={'heroImg'}
                               priority
                               className={'absolute top-[148px]  max-phone:top-[85px] right-0 max-laptop:right-[100px] max-phone:right-[30px]  max-w-[464px] max-h-[474px] object-cover max-laptop:max-w-[381px] max-laptop:max-h-[476px]  max-phone:max-w-[206px] max-phone:max-h-[257px]'}/>
                    </div>
                </Wrapper>
                    <div style={{
                        background: 'radial-gradient(circle, rgba(151,1,1,1) -40%, rgba(151,1,1,0) 68%)'
                    }} className={'-z-20 absolute right-0 mr-[20px] top-[300px] w-[480px] h-[480px] blur-[100px] overflow-visible'}/>
                    <div style={{
                        background: 'radial-gradient(circle, rgba(151,1,1,1) -40%, rgba(151,1,1,0) 68%)'
                    }} className={'absolute -ml-[254px] top-0 w-[480px] h-[480px] blur-[100px] overflow-visible'}/>
                <Wrapper>
                    <div className={'max-w-[488px] pt-[40px] flex flex-col gap-6 max-laptop:max-w-full max-laptop:pt-[48px]'}>
                        <div className={'flex flex-col gap-2'}>
                            <h1 className={'text-h1 font-stick font-semibold'}>{header.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {return word.toUpperCase();})}</h1>
                            <p className={'text-base opacity-50 max-laptop:text-justify'}>
                                {paragraph}
                            </p>
                        </div>
                        <div className={'flex w-full justify-center max-laptop:justify-end'}>
                            <AppButton text={'Contact Us'}/>
                        </div>
                    </div>
                    <div
                        className={' absolute z-40 justify-self-center bottom-0 left-1/2 -translate-x-1/2 max-laptop:hidden flex flex-col gap-[13px] items-center justify-center'}>
                        <div className={'h-[78px] w-[2px] bg-black animate-bounce'}/>
                        <span className={'text-sm text-black'}>Scroll for more</span>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default Portfolio2Hero;