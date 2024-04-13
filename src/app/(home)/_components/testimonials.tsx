'use client';
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {Mousewheel, Autoplay, Keyboard} from "swiper/modules";

import Wrapper from "@/app/_components/wrapper";

import "swiper/css";

import slide_img_1 from '@images/slide-img-1.jpg';
import slide_img_2 from '@images/slide-img-2.jpg';
import slide_img_3 from '@images/slide-img-3.jpg';
import slide_img_4 from '@images/slide-img-4.jpg';
import slide_img_5 from '@images/slide-img-5.jpg';
import quotes from '@icons/quotes.svg';
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import {SCREENS} from "@/shared/constants";
import TitleBlock from "@/app/_components/title-block";

const SLIDES = [
    {
        src:slide_img_1,
        text:'They\'re quick to jump into action, addressing our requests promptly and implementing changes seamlessly, all while keeping our sales momentum going strong. ',
        author:'CEO'
    },
    {
        src:slide_img_2,
        text:'Our website has been buzzing with more visitors, interaction, and leads thanks to the marketing push. The team\'s always on point with deadlines and quick to cater to client requests. On top of that, we\'ve noted their agility for crafting customized marketing plans is top-notch. ',
        author:'Business Analyst '
    },
    {
        src:slide_img_3,
        text:'IK Project’s efforts have really paid off for us, we’ve been enjoying a nice uptick in website traffic, click-through rates, and conversions. Their team is always on the ball with project management, getting things done fast when needed. Their unique strategies and focus on data are what keep our partnership thriving.',
        author:'Personal Assistant'
    },
    {
        src:slide_img_4,
        text:'These guys stepped up, boosting organic traffic and lifting search rankings, enhancing my client\'s online presence. Their quick and effective methods ensured seamless collaboration, delivering on-point solutions right on schedule.',
        author:'Owner'
    },
    {
        src:slide_img_5,
        text:'IK Project has proven their expertise in Amazon advertising. As our trusted go-to team for all things Amazon advertising, they consistently deliver exceptional results that exceed expectations.',
        author:'Project Manager'
    },
]
const HomeTestimonials = () => {
    const {width, height} = useWindowDimensions()
    const [initialWidth, setInitialWidth] = useState<number>(0)

    useEffect(()=>{

        const handleResize =  ()=>{
            setInitialWidth(window.innerWidth);

            window.addEventListener('onload', handleResize);
            window.addEventListener('resize', handleResize);
        }
        if(typeof window !== 'undefined'){
            handleResize()
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('onload', handleResize);
                window.removeEventListener('resize', handleResize);
            }
        };
    })

    return (
        <section id={'testimonials'} className={'mt-40 pb-[286px] max-laptop:pb-[120px]'}>
            <Wrapper>
                <TitleBlock text={'What are they saying about us?'} type={1}/>
            </Wrapper>

            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                loopAddBlankSlides={true}
                spaceBetween={width < SCREENS.LAPTOP ? width < SCREENS.PHONE ? 10 : -45 : -90}
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}

                // keyboard={{
                //     enabled: true,
                // }}

                // mousewheel={{
                //     enabled: true,
                // }}
                modules={[Autoplay, Keyboard]}
                className={' !overflow-y-visible !overflow-x-clip mt-12'}
            >
                {SLIDES.map((el, index)=>(
                    <SwiperSlide key={index} className={'!w-max !relative !z-40'}>
                        {({isActive}) => (
                            <div className={`relative drop-shadow-[0_15px_180px_rgb(0_0_0_/_0.15)] transition-all duration-500 ${!isActive && 'scale-[.8]'} max-phone:flex max-phone:flex-col max-phone:w-[290px] max-phone:rounded-[20px] max-phone:bg-white`}>
                                <Image src={quotes} alt={'quotes'} className={'absolute top-[25px] left-[41.5px] opacity-[.12]'}/>
                                <div
                                    className={` flex py-12  px-16  flex-col justify-between  w-[1295px]  h-[500px] rounded-[20px] bg-white  max-laptop:w-[696px] max-phone:h-max max-phone:py-8 max-phone:px-6  max-phone:w-[290px] `}
                                >
                                    <p className={'max-w-[425px] text-lg max-phone:text-xs text-black font-normal max-laptop:max-w-[283px]'}>
                                        {el.text}
                                    </p>
                                    <span className={'max-w-[425px] text-xl max-phone:text-sm font-medium max-laptop:max-w-[283px]'}>
                                        {el.author}
                                    </span>
                                </div>
                                <div className={'absolute max-phone:static right-16 max-laptop:right-8 top-12 max-w-[440px] max-h-[662px] max-laptop:max-w-[316px] max-laptop:max-h-[479px]'}>
                                    <Image src={el.src} alt={`slide-img-${index}`} className={'rounded-[20px] max-phone:rounded-none max-phone:rounded-br-[20px] max-phone:rounded-bl-[20px]   max-phone:max-h-[340px] object-cover'}/>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HomeTestimonials;