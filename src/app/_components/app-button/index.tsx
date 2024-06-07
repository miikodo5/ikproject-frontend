import React, {FC, useState} from 'react';
import Link from "next/link";
import {motion, useAnimate} from "framer-motion"

type IButtonApp = {
    text: string,
    disabled?: boolean
}
const ButtonApp: FC<IButtonApp> = ({text, disabled}) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const onClickAnimation = ()=>{
        setIsClicked(true);
        console.log('clicked');
        setTimeout(()=>{
            setIsClicked(false);
        },1000)
    }
    if(text === 'Contact Us'){
        return (
            <Link href={'#contact'} type={"submit"} className={'w-max text-sm px-8 py-3 rounded-[10px] transition duration-500 active:bg-mainbg' +
                ' max-phone:text-sm ' + (disabled ? 'bg-grey-3 text-black cursor-default border border-grey-stroke' :  'text-white bg-main hover:shadow-[0_4px_16px_0_rgba(151,0,0,0.35)] cursor-pointer')}>
                {text}
            </Link>
        );
    }

    return (
        <motion.button
            animate={isClicked ? {
                scale: [0.9,1],
                transition: {
                    duration: 0.5
                }
            } : {}}
            whileHover={{
                boxShadow:'0 4px 16px 0 rgba(151,0,0,0.35)',
                backgroundColor:'#7B0202'
            }}
            onClick={()=> {
                onClickAnimation()
            }}
            disabled={disabled}
            type={"submit"}
            className={'w-max text-sm px-8 py-3 rounded-[10px] ' +
            ' max-phone:text-sm ' + (disabled ? 'bg-grey-3 text-black cursor-default border border-grey-stroke' :  'text-white bg-main cursor-pointer')}>
            {text}
        </motion.button>
    );
};

export default ButtonApp;