import React from 'react';
import Image, {StaticImageData} from "next/image";
import Wrapper from "@/app/_components/wrapper";

import AppButton from "@/app/_components/app-button";

const AmazonHero = ({header, paragraph, stats, img1, img2}:{header: string, paragraph: string, stats: {number:string,text: string}[], img1: StaticImageData, img2: StaticImageData}) => {
    return (
        <>
            {/*h-[560px] max-laptop:h-[768px]*/}
            <div className={'w-full z-[60] h-max max-phone:h-max'}>
                <div
                    className={'absolute -z-50 top-0 right-0 bg-mainbg w-[530px] h-[calc(100%+46px)] max-h-[790px] max-laptop:hidden'}/>
                {/*<div*/}
                {/*    className={'absolute -z-50 left-[156px] top-[422px] w-[230px] h-[41px] bg-mainbg/25 max-laptop:hidden'}/>*/}
                {/*<div*/}
                {/*    className={'absolute -z-50 left-[700px] top-[534px] w-[303px] h-[77px] bg-mainbg/25 max-laptop:hidden'}/>*/}

                <div
                    className={'hidden absolute -z-50 top-[156px] left-0 bg-mainbg w-full h-[257px] max-laptop:block'}/>
                {/*<div*/}
                {/*    className={'hidden absolute -z-50 left-[461px] top-[561px] w-[178px] h-[41px] bg-mainbg/25 max-laptop:block max-phone:hidden'}/>*/}

                {/*<div*/}
                {/*    className={'hidden absolute -z-50 left-[35px] top-[587px] w-[250px] h-[41px] bg-mainbg/25 max-phone:block'}/>*/}

                <div
                    className={'max-laptop:flex max-laptop:flex-row max-laptop:gap-9 max-laptop:w-full justify-center max-laptop:mt-6 overflow-hidden max-phone:relative max-phone:h-[302px]'}>
                    <Image src={img1} alt={'heroImg1'}
                           priority
                           placeholder={'blur'}
                           className={'absolute right-[322px] top-[94px] w-[352px] h-[530px] object-cover max-laptop:w-[333px] max-laptop:h-[302px] max-laptop:static max-phone:w-[207px] max-phone:h-[302px] max-phone:absolute max-phone:right-[137px] max-phone:top-0'}/>
                    <Image src={img2} alt={'heroImg2'}
                           priority
                           placeholder={'blur'}
                           className={'absolute right-0 top-[94px] h-[530px] w-[280px] object-cover max-laptop:w-[333px] max-laptop:h-[302px] max-laptop:static max-phone:w-[207px] max-phone:h-[302px] max-phone:absolute max-phone:right-[-100px] max-phone:top-0'}/>

                </div>

                <Wrapper>
                    <div className={'h-max flex flex-col justify-between gap-16'}>

                        <div
                            className={'max-w-[488px] mt-[90px] flex flex-col gap-6 max-laptop:max-w-full max-laptop:items-center max-laptop:mt-[49px] max-phone:mt-[40px]'}>
                            <div className={'flex flex-col gap-2 text-center'}>
                                <h1 className={'text-h1 font-semibold max-phone:text-1xl max-phone:text-left'}>{header.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {return word.toUpperCase();})}</h1>
                                <p className={'text-xl opacity-50 max-phone:text-lg max-phone:text-left'}>
                                    {paragraph}
                                </p>
                            </div>
                            <div
                                className={'hidden mt-8 flex-row gap-3 flex-wrap max-laptop:flex max-phone:min-w-[312px] max-phone:gap-4 max-phone:justify-between'}>
                                {stats.map((el, index) => (
                                    <div key={index}
                                         className={'flex flex-col gap-2 w-[132px] max-laptop:max-w-[164px] max-laptop:w-[164px] max-phone:w-[148px]'}>
                                        <span
                                            className={'text-1xl text-black font-semibold text-center max-laptop:text-h1 max-phone:text-xl'}>{el.number}</span>
                                        <span
                                            className={'text-sm font-normal text-grey text-center max-laptop:text-base max-phone:text-sm'}>{el.text}</span>
                                    </div>
                                ))}
                            </div>
                            {/*<div className={'flex flex-row justify-between w-full'}>*/}
                                <AppButton text={'Contact Us'}/>

                            {/*    <div className={'w-max -mt-[67px] -mr-[200px] max-laptop:hidden flex flex-col gap-[13px] items-center justify-center'}>*/}
                            {/*        <div className={'h-[78px] w-[2px] bg-black animate-bounce'}/>*/}
                            {/*        <span className={'text-sm text-black'}>Scroll for more</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className={'ml-[12px] flex flex-row gap-8 max-laptop:hidden'}>
                            {stats.map((el, index) => (
                                <div key={index} className={'flex flex-col gap-2 w-[132px]'}>
                                    <span className={'text-1xl text-black font-semibold text-center'}>{el.number}</span>
                                    <span className={'text-sm font-normal text-grey text-center'}>{el.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default AmazonHero;