'use client'
import React, {useState, useRef} from 'react';
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import Image from "next/image";

import fishPhoto from '@images/hero-fish.png';
import Wrapper from "@/app/_components/wrapper";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;
const HomeHero = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const x =  useMotionValue(0);
    const y =  useMotionValue(0);

    // const [rotateX, setRotateX] = useState(0);
    // const [rotateY, setRotateY] = useState(0);

    const xSp = useSpring(x);
    const ySp = useSpring(y);

    const time =  useMotionValue(100);


    const rotateX = useTransform(
        y,
        [-0.5, 0.5],
        ['17.5deg','-17.5deg']
    );

    const rotateY = useTransform(
        x,
        [-0.5, 0.5],
        ['-27.5deg','27.5deg']
    );

    const textX = useTransform(
        y,
        [-0.5, 0.5],
        ['2.5deg','-2.5deg']
    );

    const textY = useTransform(
        x,
        [-0.5, 0.5],
        ['0deg','27.5deg']
    );



    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        const rect = event.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const xRect = mouseX/width - 0.5;
        const yRect = mouseY/height - 0.5;

        // if (!ref.current) return;
        //
        // const rect = ref.current.getBoundingClientRect();
        //
        // const width = rect.width;
        // const height = rect.height;
        //
        // const mouseX = (event.clientX - rect.left) * ROTATION_RANGE * 2;
        // const mouseY = (event.clientY - rect.top) * ROTATION_RANGE;
        //
        // const rY = mouseX / width - HALF_ROTATION_RANGE * 2;
        // const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

        // setRotateX(rX);
        // setRotateY(rY);
        x.set(xRect);
        y.set(yRect);

    }
    const handleMouseLeave = ()=>{
        x.set(0);
        y.set(0);
    }


    return (
        <Wrapper>
            <div className='relative h-[736px]'>
                <div className={'w-full h-max absolute'} onMouseMove={handleMouseMove}
                     onMouseLeave={handleMouseLeave}>
                    <div className={'w-full h-max relative'}>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}

                            style={{
                                rotateX,
                                rotateY,
                                transition: 'all 0.5s cubic-bezier(0.21, 0.86, 0, -0.09) 0s'
                            }}

                            className='w-max  mx-auto '>
                            <Image src={fishPhoto} alt={'fish'} className={'bg-transparent '}/>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            style={{
                                rotateX: textX,
                                rotateY: textY,
                                transformStyle: 'preserve-3d',
                                transition: 'all 0.5s cubic-bezier(0.21, 0.86, 0, -0.09) 0s'
                            }} className={'w-full h-full absolute top-0 right-0'}>
                            <h2 className={'mt-[362px] mr-[147px] float-right tracking-[24px] font-bold text-1xl [writing-mode:vertical-lr]'}>
                                効果的にする
                            </h2>
                            <h2 className={'mt-[62px] mr-[19px] float-right tracking-[24px] font-bold text-1xl [writing-mode:vertical-lr]'}>
                                ビジネスを
                            </h2>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{x: -2000}}
                        animate={{x: 0}}
                        transition={{
                            delay: 0.5,
                            duration: 1

                        }}
                        className={'w-full absolute top-[310px] bg-main h-32 mix-blend-multiply'}/>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}

                        transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        style={{
                            rotateX: textX,
                            rotateY: textY,
                            transformStyle: 'preserve-3d',
                            transition: 'all 0.5s cubic-bezier(0.21, 0.86, 0, -0.09) 0s'
                        }}
                        className={'absolute top-0 w-full h-max'}
                    >
                        {/*mix-blend-difference text-white*/}
                        <h1 className={'absolute top-16 left-[107px] font-stick text-4xl font-semibold'}>
                            LOREM IPSUM
                        </h1>
                        <p className={'absolute top-[200px] font-medium text-lg max-w-[488px]'}>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum
                        </p>
                    </motion.div>
                </div>
            </div>
        </Wrapper>
    );
};

export default HomeHero;