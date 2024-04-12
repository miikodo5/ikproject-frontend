'use client';
import React from 'react';
import Wrapper from "@/app/_components/wrapper";
import {motion} from "framer-motion";
import TitleBlock from "@/app/_components/title-block";

const ABOUT_US = [
    {
        number: '01',
        title: 'Result guarantee.',
        text: 'If the result doesn’t correspond to what was agreed – the job is redone to match your expectations. And we hate redoing the job. That’s why we deliver perfection from the first attempt.'
    },
    {
        number: '02',
        title: 'No late submissions.',
        text: 'Do you hate running behind the schedule? IK Project adapted the Just-In-Time system to work for us and you. Despite it was originally made for inventory management.'
    },
    {
        number: '03',
        title: 'Consistent quality.',
        text: 'Our consistency is your competitive advantage. By steadily delivering top-notch quality service we help you grow surely in a highly competitive market. Stay confident that your message remains strong and your brand remains memorable, setting you apart and driving lasting success.'
    },
    {
        number: '04',
        title: 'Revisions system.',
        text: 'We do want to hear from you. To avoid the chaos and confusion that often come with revisions we systematized this aspect to squeeze the maximum out of it'
    },
    {
        number: '05',
        title: 'Reliable partnership.',
        text: 'Once we start working together your challenges become our challenges too. Almost 70% of all our customers chose to keep and develop our partnership rather than shake hands after one completed project. '
    },
]
const HomeAbout = () => {
    return (
        <Wrapper>
            <section id='about' className={'my-20'}>
                <TitleBlock text={'Why ik PROJECT?'} type={2}/>
                <div className={'mt-12 flex flex-col gap-8 relative z-40'}>
                    {ABOUT_US.map((el, index)=>(
                        <motion.div
                            key={index}
                            className={`backdrop-blur-[22px] backdrop-grayscale backdrop-saturate-200 w-full flex items-center gap-12 max-phone:gap-0  ${index % 2 ? 'flex-row-reverse justify-end' : 'flex-row justify-end'} max-phone:flex-col max-phone:text-justify`}>
                            <h1 className={`text-h1 max-phone:text-1xl text-main font-semibold ${index % 2 ? 'max-phone:self-end' : 'max-phone:self-start'}`}>{el.number}</h1>
                            <motion.span
                                initial={{width:'44%', opacity: 0}}
                                whileInView={{width:'100%', opacity: 1}}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 2
                                }}
                                className={'text-sm text-grey font-normal w-[44%]'}
                            >
                                <span className={'text-mainbg font-semibold'}>{el.title} </span>
                                {el.text}
                            </motion.span>
                        </motion.div>
                    ))}
                </div>

            </section>
        </Wrapper>
    );
};

export default HomeAbout;