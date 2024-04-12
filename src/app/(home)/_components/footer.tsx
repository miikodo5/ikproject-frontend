import React from 'react';
import Wrapper from "@/app/_components/wrapper";
import Image from "next/image";

import logoSvg from '@icons/logo.svg';
const FOOTER_LINKS = [
    {
        title: 'About',
        links: [
            {
                name: 'Company',
                link: ''
            },{
                name: 'Careers',
                link: ''
            },{
                name: 'Legal',
                link: ''
            },{
                name: 'Help',
                link: ''
            },
        ]
    },{
        title: 'About',
        links: [
            {
                name: 'Company',
                link: ''
            },{
                name: 'Careers',
                link: ''
            },{
                name: 'Legal',
                link: ''
            },{
                name: 'Help',
                link: ''
            },
        ]
    },{
        title: 'About',
        links: [
            {
                name: 'Company',
                link: ''
            },{
                name: 'Careers',
                link: ''
            },{
                name: 'Legal',
                link: ''
            },{
                name: 'Help',
                link: ''
            },
        ]
    },{
        title: 'About',
        links: [
            {
                name: 'Company',
                link: ''
            },{
                name: 'Careers',
                link: ''
            },{
                name: 'Legal',
                link: ''
            },{
                name: 'Help',
                link: ''
            },
        ]
    },
]
const HomeFooter = () => {
    return (
        <Wrapper>
            <div className={'mt-20 pb-6 flex flex-col gap-8'}>
                <div className={'flex flex-row justify-between max-phone:flex-col max-phone:gap-6 justify-between'}>
                    <div className={'flex flex-col gap-8 max-w-[488px]'}>
                        <Image src={logoSvg} alt={'logo'}/>
                        <p className={'text-xs max-phone:text-xs text-grey '}>
                            Optimize your product’s visibility and sales!
                        </p>
                    </div>
                    <div className={'flex flex-1 flex-row justify-around max-phone:justify-between flex-wrap' }>
                        {FOOTER_LINKS.map((el, index)=>(
                            <div key={index}  className={'flex flex-col gap-8 min-w-[62px]'}>
                                <span className={'text-base font-bold'}>{el.title}</span>
                                <div className={'flex flex-col gap-3'}>
                                    {el.links.map((el, index)=>(
                                        <span key={el.name} className={'text-xs font-normal'}>{el.name}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'h-[1px] w-full bg-grey-stroke'}  />
                <div className={'flex justify-center'}>
                    <span className={'text-center text-sm'}>© 2024 IK Project. All rights reserved. </span>
                </div>
            </div>
        </Wrapper>
    );
};

export default HomeFooter;