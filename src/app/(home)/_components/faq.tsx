'use client';
import React, {useState} from 'react';
import {motion, AnimatePresence, domAnimation, LazyMotion} from "framer-motion";
import Wrapper from "@/app/_components/wrapper";
import FAQCard from "@/app/(home)/_components/faq/card";
import Image from "next/image";

import fishSvg from '@icons/fish.svg';
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import {SCREENS} from "@/shared/constants";
import TitleBlock from "@/app/_components/title-block";
import FAQFish from "@/app/(home)/_components/faq/fish";

const FAQs = [
    {
        title: 'Will I boost my sales with you?',
        text: 'Absolutely! We\'ll optimize your campaigns to stretch your budget further and drive more sales. We\'ll also target proved high-converting keywords to boost your sales even more.'
    },
    {
        title: 'Do you guarantee results?',
        text: 'Yes. Once we’ve agreed on what we’d do to reach your targets we’re doing everything it takes to get the numbers aligned. If the result doesn’t correspond to what was agreed – the job is redone to match your expectations.'
    },
    {
        title: 'Do I get access to all of the accounts?',
        text: 'For sure! We operate within your own ad account, so you\'re always in the driver\'s seat. Whatever accounts need to be created we grant you full access, ensuring you have full control over your campaigns.'
    },
    {
        title: 'An existing software is not suitable for my product and niche. Can you assist?',
        text: '100%. We’ll build and help you implement a custom solution. Our developers’ team is ready to execute!'
    },
    {
        title: 'I need to start immediately, can you do that?',
        text: 'Book the call and let’s get rolling!'
    },
]
const HomeFaq = () => {
    const [open, setOpen] = useState<number>(-1);

    return (
        <Wrapper>
            <div className={'mt-20'}>

                <LazyMotion features={domAnimation}>
                    <section id={'faq'} className={'relative'}>
                        <TitleBlock text={'faq'} type={3}/>
                        <div className={'relative max-h-[448px] max-laptop:min-h-[660px] max-phone:min-h-[830px] mt-12 flex flex-row max-phone:flex-col place-items-start w-full gap-8 z-30'}>
                            <div className={'flex flex-col gap-8 w-full basis-1/2'}>
                                {FAQs.map((el, index) => {
                                        const isOpen = index === open;
                                        if (index % 2) return;
                                        return (
                                            <FAQCard key={index} index={index} isOpen={isOpen} setOpen={setOpen} open={open} el={el}/>
                                        )
                                    }
                                )}
                            </div>
                            <div className={'flex flex-col gap-8 w-full basis-1/2'}>
                                {FAQs.map((el, index) => {
                                        const isOpen = index === open;
                                        if (!(index % 2)) return;
                                        return (
                                            <FAQCard key={index} index={index} isOpen={isOpen} setOpen={setOpen} open={open} el={el}/>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                        <FAQFish/>
                    </section>
                </LazyMotion>
            </div>
        </Wrapper>
    );
};

export default HomeFaq;