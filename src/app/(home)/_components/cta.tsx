import React from 'react';
import Wrapper from "@/app/_components/wrapper";
import ButtonApp from "@/app/_components/app-button";

const HomeCta = () => {
    return (
        <div className={'bg-grey-3'}>
            <Wrapper>
                <div className={'py-[37.5px]  flex flex-row max-phone:flex-col gap-4 items-center justify-center'}>
                    <p className={'text-xl font-semibold text-grey'}>
                        Join us as a <span className={'text-main'}>partner</span> or <span className={'text-main'}>customer</span>
                    </p>
                    <ButtonApp text={'Contact Us'}/>
                </div>
            </Wrapper>
        </div>
    );
};

export default HomeCta;