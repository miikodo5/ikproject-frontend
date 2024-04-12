import React from 'react';
import Image from "next/image";
import Link from "next/link";

import projectIcon from '@icons/project-icon.svg';
import projectIconText from '@icons/project-icon-text.svg';
import Wrapper from "@/app/_components/wrapper";
import AppNavbarLinks from "@/app/(home)/_components/header/links";
import PhoneSection from "@/app/(home)/_components/header/phone";

const HomeHeader = () => {
    return (
        <Wrapper>
            <header className='w-full pt-6 flex justify-between items-center'>
                <Link href={'/'} className={'flex flex-row gap-[6px]'}>
                    <Image src={projectIcon} alt={'ikproject'}/>
                    <Image src={projectIconText} alt={'ikprojecttext'}/>
                </Link>
                <nav>
                    <AppNavbarLinks className={'flex flex-row gap-8 text-lg max-laptop:hidden'}/>
                    <PhoneSection/>
                </nav>
            </header>
        </Wrapper>
    );
};

export default HomeHeader;