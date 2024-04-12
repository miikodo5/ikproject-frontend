import React, {useState} from 'react';
import Image from "next/image";
import {motion} from "framer-motion";


import heroPhoto1 from '@images/hero-11.png';
import heroPhoto2 from '@images/hero-22.png';
import heroPhoto3 from '@images/hero-33.png';
import heroPhoto4 from '@images/hero-44.png';
import heroPhoto21 from '@images/hero-211.png';
import heroPhoto22 from '@images/hero-222.png';
import heroPhoto23 from '@images/hero-233.png';
import heroPhoto24 from '@images/hero-244.png';
import heroPhoto31 from '@images/hero-311.png';
import heroPhoto32 from '@images/hero-322.png';
import heroPhoto33 from '@images/hero-333.png';
import heroPhoto34 from '@images/hero-344.png';
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";

const PHOTOBOX_1 = [heroPhoto1,heroPhoto21,heroPhoto31];
const PHOTOBOX_2 = [heroPhoto2,heroPhoto22,heroPhoto32];
const PHOTOBOX_3 = [heroPhoto3,heroPhoto23,heroPhoto33];
const PHOTOBOX_4 = [heroPhoto4,heroPhoto24,heroPhoto34];

const PHOTOSBOXES = [PHOTOBOX_1,PHOTOBOX_2,PHOTOBOX_3,PHOTOBOX_4];

const HeroPhoto = ({photoIndex, photoNumber}:{photoIndex: number,photoNumber: number}) => {
    const { height, width } = useWindowDimensions();
    const classNameImg = `transition-all duration-[3000ms] w-240px max-laptop:w-[148px] ${photoNumber === 2 || photoNumber === 3 ? 'h-240px max-laptop:h-[145px] min-laptop:h-[145px]' : 'h-509px max-laptop:h-[307px] min-laptop:h-[307px]'}`;
    const imageWidth = width < 1290 ? '148px' : '240px';
    const styleWidth = 'w-'+imageWidth;
    const isSmall = photoNumber === 2 || photoNumber === 3
    const imageHeight = width < 1290 ? (isSmall ? '145px' : '307px') : (isSmall ? '240px' : '509px');
    const styleHeight = 'h-'+imageHeight;
    return (
        <motion.div
            initial={{
                opacity:0,
                width: imageWidth,
                height: 0
            }}
            animate={{
                opacity:1,
                width: imageWidth,
                height: imageHeight,
                transition: {
                    delay: .5
                }
            }} className={`relative ${styleWidth} h-max`}>
            <div
                className={classNameImg + ` ${photoIndex === 0 ? 'opacity-100 ' : 'opacity-0'}`}>
                <Image src={PHOTOSBOXES[photoNumber-1][0]} alt={'hero4'}
                       className={'absolute top-0 rounded-[90px] max-laptop:rounded-[45px]'}/>
            </div>

            <div
                className={classNameImg + ` ${photoIndex === 1 ? 'opacity-100 ' : 'opacity-0'}`}>
                <Image src={PHOTOSBOXES[photoNumber-1][1]} alt={'hero4'}
                       className={'absolute top-0 rounded-[90px] max-laptop:rounded-[45px]'}/>
            </div>

            <div
                className={classNameImg + ` ${photoIndex === 2 ? 'opacity-100 ' : 'opacity-0'}`}>
                <Image src={PHOTOSBOXES[photoNumber-1][2]} alt={'hero4'}
                       className={'absolute top-0 rounded-[90px] max-laptop:rounded-[45px]'}/>
            </div>
        </motion.div>
    );
};

export default HeroPhoto;