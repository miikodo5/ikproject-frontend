'use client'
import React from 'react';
import Wrapper from "@/app/_components/wrapper";
import TitleBlock from "@/app/_components/title-block";
import Services from "@/app/(home)/_components/services/services";

const HomeServices = () => {
    return (
        <section id='services' className={'mt-20'}>
            <Wrapper>
                <TitleBlock text={'SERVICES'} type={3}/>
                <p className={'text-grey font-semibold text-xl max-phone:text-sm max-phone:text-justify text-center '}>

                    Unlock your business potential with our comprehensive suite of services designed to drive growth and maximize success
                </p>
            </Wrapper>
            <Services/>
        </section>
    );
};

export default HomeServices;