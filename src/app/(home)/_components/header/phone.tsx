'use client'
import React, {FC, useState} from 'react';
// @ts-ignore
import crossIcon from "@icons/cross.svg";
import AppNavbarLinks from "./links";
import Image from "next/image";
import projectIcon from "@icons/project-icon-white.svg";
import projectIconText from "@icons/project-icon-text-white.svg";
import Link from "next/link";
import Wrapper from "@/app/_components/wrapper";

type IPhoneSection = {
    colored?: boolean
}
const PhoneSection: FC<IPhoneSection> = ({colored}) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    return (
        <div>
            <section className='hidden float-right pt-[6px] max-laptop:flex'>
                <div className={`${!isNavOpen && 'z-20'} space-y-[4px] cursor-pointer`} onClick={() => {
                setIsNavOpen(!isNavOpen)
            }}>
                    <span className={colored ?
                        'bg-white block h-[1.5px] w-[17px]' :
                        'bg-black block h-[1.5px] w-[17px]'
                    }></span>
                    <span className={colored ?
                        'bg-white block h-[1.5px] w-[17px]' :
                        'bg-black block h-[1.5px] w-[17px]'
                    }></span>
                    <span className={colored ?
                        'bg-white block h-[1.5px] w-[17px]' :
                        'bg-black block h-[1.5px] w-[17px]'
                    }></span>
                </div>
                <div className={`${isNavOpen ? 'opacity-100 z-50 ' : 'opacity-0 -z-50'} flex flex-col w-full h-screen top-0 left-0 bg-mainbg overflow-hidden fixed transition-opacity ease-in-out delay-150 duration-300 overflow-hidden`}>
                    {/*<a href='/#hero'>*/}
                    <Wrapper>
                        <div className='mt-6 h-max flex flex-row justify-between items-center content-end' onClick={() => {
                            setIsNavOpen(false)
                        }}>
                            <Link href={'/'} className={'flex flex-row gap-[6px]' }>
                                <Image src={projectIcon} alt={'ikproject'}/>
                                <Image src={projectIconText} alt={'ikprojecttext'}/>
                            </Link>
                            <Image src={crossIcon} alt='close' className='w-[17px] h-4'/>
                        </div>
                    </Wrapper>
                    {/*</a>*/}
                    {/*<ul className='m-[88px] flex flex-col flex-wrap content-center space-y-6'>*/}
                    <AppNavbarLinks className='m-[88px] flex flex-col flex-wrap content-center space-y-6' textClassName={'text-xl text-white font-normal uppercase'} onClick={()=>setIsNavOpen(false)}/>
                    {/*</ul>*/}
                </div>
            </section>
        </div>
);
};

export default PhoneSection;