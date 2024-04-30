'use client';
import React, {useContext, useState} from 'react';
import Wrapper from "@/app/_components/wrapper";
import Image from "next/image";

import next_1 from '@icons/next-1.svg';
import next_2 from '@icons/next-2.svg';
import next_3 from '@icons/next-3.svg';
import FormContact from "@/app/(home)/_components/contact/contact-form";
import AppSwitcher from "@/app/_components/switcher";
import TitleBlock from "@/app/_components/title-block";
import {ContactFromContext, From} from "@/shared/providers/ContactFromProvider";

const HomeContact = () => {
    const [isPartner, setIsPartner] = useState<boolean>(true);
    const {from, setFrom} = useContext(ContactFromContext)
    return (
        <Wrapper>
            <section id={'contact'} className={'my-20 max-phone:mt-0'}>
                <TitleBlock text={'CONTACT US'} type={3}/>
                <div>
                    <p className={'text-xl text-grey font-semibold max-phone:text-sm'}>
                        Got questions or ready to get started? Leave a brief message and we&apos;ll be happy to assist you!
                    </p>
                </div>
                <div className={'flex flex-col'}>
                    <div className={'self-center justify-self-center place-self-center py-[33px] select-none'}>

                        <AppSwitcher isPartner={from} setIsPartner={setFrom} text1={From.Partner.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {return word.toUpperCase();})} text2={From.Customer.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {return word.toUpperCase();})}/>
                    </div>
                    <div className={'flex flex-row max-phone:flex-col gap-8'}>
                        <div className={'w-1/2 max-phone:w-full'}>
                            <FormContact></FormContact>
                        </div>
                        <div className={'flex flex-col gap-8'}>
                            <h3 className={'text-1xl font-semibold max-phone:text-xl'}>What happens next?</h3>
                            <div className={'flex flex-col gap-[6px] text-sm font-normal max-phone:text-xs'}>
                                <div className={'flex flex-row gap-[10px] '}>
                                    <Image src={next_1} alt={'next-1'}/>
                                    <p className={'pt-2'}>You’ll hear from us as we’d need to get familiar with your business goals and objectives</p>
                                </div>
                                <div className={'flex flex-row gap-[10px]'}>
                                    <Image src={next_2} alt={'next-2'}/>
                                    <p className={'pt-2'}>Based on that we’ll come up with a presentation of possible solutions</p>
                                </div>
                                <div className={'flex flex-row gap-[10px]'}>
                                    <Image src={next_3} alt={'next-3'}/>
                                    <p className={'pt-2'}>to reach an agreement and get to work!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

export default HomeContact;