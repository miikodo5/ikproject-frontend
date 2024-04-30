'use client';
import React, {useContext} from 'react';
import Wrapper from "@/app/_components/wrapper";
import ButtonApp from "@/app/_components/app-button";
import {ContactFromContext, From} from "@/shared/providers/ContactFromProvider";
import Link from "next/link";

const HomeCta = () => {
    const {from, setFrom} = useContext(ContactFromContext);
    return (
        <div className={'bg-grey-3'}>
            <Wrapper>
                <div className={'py-[37.5px]  flex flex-row max-phone:flex-col gap-4 items-center justify-center'}>
                    <p className={'text-xl font-semibold text-grey'}>
                        Join us as a{' '}
                        <Link href={'#contact'} onClick={()=>{setFrom(From.Partner)}} className={'text-main cursor-pointer'}>
                            partner
                        </Link> or{' '}
                        <Link href={'#contact'} onClick={()=>{setFrom(From.Customer)}}  className={'text-main cursor-pointer'}>
                            customer
                        </Link>
                    </p>
                    <ButtonApp text={'Contact Us'}/>
                </div>
            </Wrapper>
        </div>
    );
};

export default HomeCta;