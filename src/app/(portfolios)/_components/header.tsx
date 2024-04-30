import React from 'react';
import Image from "next/image";
import Link from "next/link";

import projectIcon from '@icons/project-icon.svg';
import projectIconText from '@icons/project-icon-text.svg';
import projectIconWhite from '@icons/project-icon-white.svg';
import projectIconTextWhite from '@icons/project-icon-text-white.svg';
import Wrapper from "@/app/_components/wrapper";
import AppNavbarLinks from "@/app/(home)/_components/header/links";
import PhoneSection from "@/app/(home)/_components/header/phone";

const PortfolioHeader = ({color, laptopColor, phoneColor}: {color: string, laptopColor?:string,phoneColor?:string}) => {
    return (
        <Wrapper>
            <div className={'relative w-full'}>
                <header className='absolute w-full pt-6 flex justify-between items-center'>
                    <Link href={'/'} className={'flex flex-row gap-[6px] cursor-pointer z-50'}>
                        <Image src={color === 'black' ? projectIcon : projectIconWhite} alt={'ikproject'}/>
                        <Image src={color === 'black' ? projectIconText : projectIconTextWhite} alt={'ikprojecttext'}/>
                    </Link>
                    <nav>
                        <AppNavbarLinks className={`flex flex-row gap-8 text-lg ${color === 'white' && 'text-white'} max-laptop:hidden ${laptopColor === 'white' && 'max-laptop:text-white'} ${phoneColor === 'white' && 'max-phone:text-white'}`}/>
                        <PhoneSection/>
                    </nav>
                </header>
                <div className={'h-[78px]'}>
                </div>
            </div>
        </Wrapper>
    );
};

export default PortfolioHeader;