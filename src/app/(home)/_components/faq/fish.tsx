import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";
import fishSvg from "@icons/fish.svg";
import {SCREENS} from "@/shared/constants";
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";

const FAQFish = () => {
    const {width, height} = useWindowDimensions()
    return (
        <>
            <motion.div
                initial={{ offsetDistance: width < SCREENS.PHONE ? "30%" : "35%"}}
                whileInView={width <= SCREENS.PHONE ? {} : {offsetDistance: "30%"}}
                transition={{duration: 4}}
                className={'absolute top-0 z-[1] overflow-hidden overscroll-x-none overflow-x-hidden no-scrollbar max-phone:left-[-560px] max-phone:top-[146px] max-phone:scale-[0.7]'}

                viewport={{once: true}}
                style={{
                    offsetPath: 'path("m2096.809,1854.43811c-690.06921,0 -1249.02524,-677.17455 -1249.02524,-1513.19253c0,-836.01798 558.95603,-1513.19253 1249.02524,-1513.19253c690.06919,0 1249.02524,677.17455 1249.02524,1513.19253c0,836.01798 -558.95605,1513.19253 -1249.02524,1513.19253z")'
                }}
            >
                <Image src={fishSvg} alt={'fish'} className={'overflow-hidden no-scrollbar'}/>
            </motion.div>
            <motion.div
                initial={{offsetDistance: width <= SCREENS.PHONE ? '74%' :"80%"}}
                whileInView={width <= SCREENS.PHONE ? {} : {offsetDistance: "74%"}}
                transition={{duration: 2}}
                className={'absolute top-0 z-[1] overflow-hidden overscroll-x-none overflow-x-hidden max-phone:left-[-786px] max-phone:top-[352px] max-phone:scale-[0.7]'}
                viewport={{once: true}}
                style={{
                    offsetPath: 'path("m357.77856,1404.43692c-429.70987,0 -777.77485,-316.36622 -777.77485,-706.94181c0,-390.57559 348.06498,-706.94181 777.77485,-706.94181c429.70986,0 777.77485,316.36622 777.77485,706.94181c0,390.57559 -348.06499,706.94181 -777.77485,706.94181z")'
                }}
            >
                <Image src={fishSvg} alt={'fish'} className={'overflow-hidden no-scrollbar'}/>
            </motion.div>
            <motion.div
                initial={{offsetDistance: width <= SCREENS.PHONE ? '52%' : "70%"}}
                whileInView={width <= SCREENS.PHONE ? {} : {offsetDistance: "52%"}}
                transition={{duration: 2}}
                className={'absolute top-0 z-[1] overflow-hidden overscroll-x-none overflow-x-hidden max-phone:top-[260px]'}
                viewport={{once: true}}
                style={{
                    offsetPath: 'path("m56.11355,1676.10262c-429.70987,0 -777.77485,-316.36622 -777.77485,-706.94181c0,-390.57559 348.06498,-706.94181 777.77485,-706.94181c429.70986,0 777.77485,316.36622 777.77485,706.94181c0,390.57559 -348.06499,706.94181 -777.77485,706.94181z")'
                }}
            >
                <Image src={fishSvg} alt={'fish'} className={'overflow-hidden no-scrollbar'}/>
            </motion.div>
        </>
    );
};

export default FAQFish;