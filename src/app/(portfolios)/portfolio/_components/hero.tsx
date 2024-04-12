import React from 'react';
import Wrapper from "@/app/_components/wrapper";

import heroImg from '@images/hero-1.png';
import Image from "next/image";

const PortfolioHero = () => {
    return (
        <>
            <div className={'min-h-[690px] w-full'}>
                <Image src={heroImg} priority alt={'heroImg'} className={'w-full h-[768px] object-cover absolute top-0 -z-50 bg-black max-phone:h-[805px]'}/>

                <Wrapper>
                    <div className={'w-full flex flex-col items-center gap-6 pt-[137px] max-laptop:pt-[71px] max-phone:pt-[47px]'}>
                        <div>
                            <h1 className={'text-4xl text-white font-stick font-semibold max-phone:text-3xl max-laptop:text-center'}>
                                LOREM IPSUM LOREM
                            </h1>
                            <p className={'text-base text-white/[0.55] text-center font-medium max-w-[755px] max-phone:text-xs'}>
                                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                                lobortis.
                            </p>
                        </div>
                        <div className={'flex flex-row justify-center flex-wrap gap-8 max-phone:min-w-[312px] max-phone:gap-4'}>
                            {[
                                {number: '321', text: 'Projects Completed'},
                                {number: '25', text: 'Awards'},
                                {number: '31', text: `Experts`},
                                {number: '15', text: `Years Experience`}
                            ].map((el, index) => (
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