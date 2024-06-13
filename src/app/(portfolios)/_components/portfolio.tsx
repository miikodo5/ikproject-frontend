'use client';
import React, {useState} from 'react';
import Wrapper from "@/app/_components/wrapper";
import {motion} from "framer-motion";

import portfolioPhoto_1 from '@images/portfolio-1.png';
import portfolioPhoto_2 from '@images/portfolio-2.png';
import portfolioPhoto_3 from '@images/portfolio-3.png';
import portfolioPhoto_4 from '@images/portfolio-4.png';
import portfolioPhoto_5 from '@images/portfolio-5.png';
import Image, {StaticImageData} from "next/image";
import Draggable from "@/app/(home)/_components/services/draggable";
import TitleBlock from "@/app/_components/title-block";

const PortfolioCards = ({portfolios}:{portfolios: { title: string, text: string, img: StaticImageData }[]}) => {

    return (
        <Wrapper>
            <div className={'mb-20'}>
                <TitleBlock text={'PORTFOLIO'} type={1}/>

                <Draggable rootClass={'no-scrollbar'}>
                    <section className={'grid grid-cols-5 gap-8 max-phone:flex max-phone:flex-row max-phone:gap-3 max-phone:pt-6 '}>
                        {portfolios.map((el, index)=>(
                            // w-2/5 w-3/5
                            <div key={index}
                                 className={`flex flex-col gap-3 w-full 
                                 ${(index === 1 || index === 4) ? 'col-span-3' : 'w-full col-span-2'} 
                                 ${index === 0 && 'col-span-5'} max-phone:min-w-[312px]`
                            }>

                                <div className={'w-full h-[312px] max-phone:h-[200px]'}>
                                    <Image src={el.img} alt={el.title} className={'w-full h-full rounded-[10px] object-cover'}/>
                                </div>
                                <div>
                                    <span className={'text-xl font-semibold max-laptop:text-lg'}>{el.title}</span>
                                    <p className={'text-base text-grey font-normal  max-laptop:text-xs'}>{el.text}</p>
                                </div>
                            </div>
                        ))}
                        <div>

                        </div>
                    </section>
                </Draggable>

            </div>

        </Wrapper>
    );
};

export default PortfolioCards;