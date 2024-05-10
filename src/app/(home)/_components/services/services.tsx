'use client';

import React, {useEffect, useRef, useState} from 'react';
import {domAnimation, LazyMotion, motion, m, useInView,} from "framer-motion";

import {SCREENS} from "@/shared/constants";
import {AnimateChangeInHeight} from "@/app/_components/animation/change-in-height";
import Draggable from "@/app/(home)/_components/services/draggable";
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";

import Wrapper from "@/app/_components/wrapper";

const Services = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {width, height} = useWindowDimensions();
    const [circleWidth, setCircleWidth] = useState<number>(width <= SCREENS.LAPTOP ? 160 : 280);
    const [services, setServices] = useState<Array<{showed: boolean, name: string, number: string, initial: {left: string}, whileInView: {y: number, left: string}, services: {link: string, number: string, title: string, text: string}[]}>>([]);
    const [isAnyShowed, setIsAnyShowed] = useState<boolean>(false);


    const handleElClick = (index: number)=>{
        setIsAnyShowed(true);
        const nextList = [...services];

        const tempElShowed = nextList.find(el =>  el.showed);
        if(tempElShowed) tempElShowed.showed = !tempElShowed?.showed;

        const tempEl = nextList.find(el => nextList[index] === el);
        if(tempEl) tempEl.showed = !tempEl?.showed;

        setServices(nextList);

        if(width > SCREENS.LAPTOP)
            scrollTo(0,1700);
        else if(width < SCREENS.PHONE)
            scrollTo(0,1700);
        else if(width < SCREENS.LAPTOP)
            scrollTo(0,1300);
    }

    useEffect(()=>{
        if(typeof window !== 'undefined'){
            uploadServices();
        }
        setIsLoading(false);
    },[]);

    useEffect(()=>{
        uploadServices();
    }, [width])


    const uploadServices = ()=>{
        const tempCircleWidth = window.innerWidth <= SCREENS.LAPTOP ? 160 : 280;
        const tempSpaceBetween = (window.innerWidth <= SCREENS.LAPTOP? (window.innerWidth - 2*tempCircleWidth)/6 : (window.innerWidth - 4*tempCircleWidth)/13)

        const SERVICES = [
            {
                showed:false,
                name: 'Amazon Expertise',
                number: '01',
                initial:{
                    left: `${0}`
                },
                whileInView: {
                    y: tempCircleWidth / 2,
                    left: `calc(50% - ${tempCircleWidth}px)`,
                },
                services:[
                    {
                        link: 'amazon/account-management',
                        number: '01',
                        title: 'Amazon account management',
                        text: 'Strategic account management for Amazon Seller Central and Vendor'
                    },
                    {
                        link: 'amazon/consumer-insights-audit',
                        number: '02',
                        title: 'Amazon consumer insights audit',
                        text: 'Market intelligence & research reports for data-driven business decisions on Amazon'
                    },
                    {
                        link: 'amazon/product-launch',
                        number: '03',
                        title: 'Amazon product launch',
                        text: 'Launch strategies for products on Amazon – packed with SEO, PPC and UX strategy for success'
                    },
                    {
                        link: 'amazon/promotions-strategy',
                        number: '04',
                        title: 'Amazon promotions strategy',
                        text: 'Promotions that grab attention and win sales on Amazon'
                    },
                    {
                        link: 'amazon/advertising',
                        number: '05',
                        title: 'Amazon advertising',
                        text: 'Drive increased visibility and conversions with fully-managed Amazon AMS advertising'
                    },
                    {
                        link: 'amazon/demand-side-platform',
                        number: '06',
                        title: 'Amazon demand-side platform',
                        text: 'Extend the reach of your advertising beyond Amazon to audiences across the web'
                    },
                    {
                        link: 'amazon/listing-optimisation',
                        number: '07',
                        title: 'Amazon Listing Optimisation',
                        text: 'Boost your products’ rank in search results with Amazon-focused SEO & increase conversions with enhanced content'
                    },
                    {
                        link: 'amazon/a-plus-content',
                        number: '08',
                        title: 'Amazon A+ Content',
                        text: 'Enhanced content that drives an increase in conversion rates'
                    },
                    {
                        link: 'amazon/premium-a-plus-content',
                        number: '09',
                        title: 'Premium A+ Content',
                        text: 'The premium shopping experience that boosts sales by up to 15%'
                    },
                    {
                        link: 'amazon/stores',
                        number: '10',
                        title: 'Amazon Stores',
                        text: 'Inspire, educate & sell with UX-considered Amazon stores'
                    },
                    {
                        link: 'amazon/product-image',
                        number: '11',
                        title: 'Amazon Product Image',
                        text: 'Inform & convert with high-performing product content'
                    },
                    {
                        link: 'amazon/copywriting',
                        number: '12',
                        title: 'Amazon Copywriting',
                        text: 'Creating copy to help you sell products on Amazon is reliant on the way your products are described'
                    },
                ]
            },
            {
                showed:false,
                name: 'Digital Marketing',
                number: '02',
                initial:{
                    left: `${tempCircleWidth+tempSpaceBetween}`
                },
                whileInView: {
                    y: 0,
                    left: `calc(50% - ${tempCircleWidth/2}px)`
                },
                services:[
                    {
                        link: 'marketing/seo',
                        number: '01',
                        title: 'SEO (Search Engine Optimization)',
                        text: 'Grow your businesses, not just to improve your overall search rankings.'
                    },
                    {
                        link: 'marketing/serm',
                        number: '02',
                        title: 'Search engine reputation management',
                        text: 'SERM refers to the influencing and management of the online reputation of a brand or an individual.'
                    },
                    {
                        link: 'marketing/smm',
                        number: '03',
                        title: 'Social media marketing',
                        text: 'Effective brand promotion using social media, targeted advertising and influencer marketing.'
                    },
                    {
                        link: 'marketing/email-agency',
                        number: '04',
                        title: 'Email Marketing Agency',
                        text: 'Email marketing on a turnkey basis for online stores, mobile applications, online services and commercial sites.'
                    },
                    {
                        link: 'marketing/chatbot',
                        number: '05',
                        title: 'Chatbot Development',
                        text: 'Customize the collection of your subscriber base. Develop triggers and sales funnels for your chatbot. Customize a chatbot for your business.'
                    },
                    {
                        link: 'marketing/ad-monetization',
                        number: '06',
                        title: 'Ad Monetization',
                        text: 'Optimize ad placements, analyze performance metrics, and refine strategies to maximize revenue.'
                    },
                    {
                        link: 'marketing/web-analytics',
                        number: '07',
                        title: 'Web Analytics',
                        text: 'Web analytics forms the backbone of the data-driven approach in digital marketing.'
                    },
                    {
                        link: 'marketing/mobile-analytics',
                        number: '08',
                        title: 'Mobile Analytics',
                        text: 'Customize the actions you want to track. Set up metrics and reporting.'
                    },
                    {
                        link: 'marketing/analytics',
                        number: '09',
                        title: 'Marketing Analytics Services',
                        text: 'Create a system that will help you identify the best channels for attracting clients and make effective budget allocation decisions.'
                    },
                    {
                        link: 'marketing/google-analytics-4',
                        number: '10',
                        title: 'Setting up Google Analytics 4',
                        text: 'Organize migration from the previous version.'
                    },
                    {
                        link: 'marketing/ppc',
                        number: '11',
                        title: 'PPC',
                        text: 'Сomplex strategies for Pay Per Click and targeted advertising.'
                    },
                    {
                        link: 'marketing/link-building',
                        number: '12',
                        title: 'Link Building',
                        text: 'We will help you increase your website\'s link mass and set up external SEO optimization'
                    },
                    {
                        link: 'marketing/lead-generation',
                        number: '13',
                        title: 'B2B Lead Generation',
                        text: 'Are you looking to create a steady stream of leads for your business that will help you enter or scale in new markets?'
                    },
                    {
                        link: 'marketing/store-optimization',
                        number: '14',
                        title: 'App Store Optimization',
                        text: 'Put simply, you only pay for the increased number of installs of your application.'
                    },
                    {
                        link: 'marketing/conversion-rate-optimization',
                        number: '15',
                        title: 'Conversion Rate Optimization',
                        text: 'Perform an audit of your analytics system. Examine user behavior on the site.'
                    },
                ]
            },
            {
                showed:false,
                name: 'Software Development',
                number: '03',
                initial:{
                    left: `${2*(tempCircleWidth+tempSpaceBetween)}`
                },
                whileInView: {
                    y: tempCircleWidth,
                    left: `calc(50% - ${tempCircleWidth/2}px)`
                },
                services: [
                    {
                        link: 'development/web',
                        number:'01',
                        title: 'Web Development',
                        text:'We develop complex websites and web applications that can handle high traffic volumes and open up new opportunities for your clients.'
                    },
                    {
                        link: 'development/mobile',
                        number:'02',
                        title: 'Mobile Development',
                        text:'Step into the realm of mobile app innovation, where creativity knows no bounds. We\'re your partner in turning imaginative concepts into tangible mobile solutions.'
                    },
                    {
                        link: 'development/e-commerce',
                        number:'03',
                        title: 'E-Commerce',
                        text:'With our E-Commerce services, powered by Shopify and WordPress expertise, we craft revenue-focused solutions for B2B and consumer brands.'
                    },
                    {
                        link: 'development/ui-ux-design',
                        number:'04',
                        title: 'UI & UX Design',
                        text:'Drive user engagement, elevate customer satisfaction, and increase revenue with our UX design and development services.'
                    },
                    {
                        link: 'development/integration',
                        number:'05',
                        title: 'Integration of sites and programs',
                        text:'Automating tasks across Discord, Telegram, web-scraping, parsing, and browser processes, saving you time and resources.'
                    }
                ]
            },
            {
                showed:false,
                name: 'TQM Audit',
                number: '04',
                initial:{
                    left: `${3*(tempCircleWidth+tempSpaceBetween)}`
                },
                whileInView: {
                    y: tempCircleWidth / 2,
                    left: `calc(50%)`
                },
                services: [
                    {
                        link: 'tqm/tqm',
                        number:'01',
                        title: 'Total Quality Management',
                        text:'TQM is considered a customer-focused process that focuses on consistently improving business operations management.'
                    },
                    {
                        link: 'tqm/lean-principles',
                        number:'02',
                        title: 'Lean principles',
                        text:'Lean principles are designed specifically for agile projects. The main principle of lean projects is cost minimization.'
                    },
                    {
                        link: 'tqm/kaizen-planning',
                        number:'03',
                        title: 'Kaizen planning',
                        text:'A practice that relies on continuous improvement of the processes around you.'
                    },]
            },
        ]
        setServices(SERVICES);
    }

    const transition = {
        type: 'tween',
        delay:.5,
        duration: 1
    };
    const variants = {
        'showed': {
            backgroundColor: 'rgb(151 1 1 / 1)',
            borderColor: 'rgb(151 1 1 / 1)',
            transition: {
                type: 'tween',
                duration: 0
            },
            color: 'white',
            zIndex: 9999,
            padding: 0,
            translateZ: 0
        },
        'hide': {
            backgroundColor: 'rgb(151 1 1 / 0)',
            borderColor: 'black',
            transition: {
                type: 'tween',
                duration: 0
            },
            translateZ: 0
            // ...paddingWhileInView
        },
        'ping':(index: number)=>({
            scale: [1, 0.9, 1],
            transition: {
                type: 'tween',
                repeat: Infinity,
                duration: 1,
                repeatDelay: 7,
                delay: index * 2
            },
            translateZ: 0
        })
    }
    // @ts-ignore
    if(isLoading)
        return(<div className={'w-full  h-[600px]'}/>)

    return (
        <>
            <Wrapper>
                <LazyMotion features={domAnimation}>

                    <div
                        // viewport={{once: true}}
                        // transition={transition}
                        style={{
                            height: width < SCREENS.LAPTOP ? 400 : 640
                        }}
                        className={`my-7 mx-auto pt-2 relative flex-wrap flex flex-row justify-between h-[640px] overflow-visible`}>

                        {services.map((el, index) => {
                            const tempInitial = {
                                left: 0,
                                y: 0
                            };
                            const tempCircleWidth = width <= SCREENS.LAPTOP ? 160 : 280;
                            const tempSpaceBetween = (width <= SCREENS.LAPTOP? (width - 2*circleWidth)/6 : (width - 6*circleWidth)/13)

                            tempInitial.left = index * (tempCircleWidth + tempSpaceBetween)

                            let isLaptop = false;
                            if (width < SCREENS.LAPTOP) isLaptop = true;
                            if ((index === 2 || index === 3) && isLaptop) {
                                tempInitial.y = tempCircleWidth + tempSpaceBetween;
                                tempInitial.left = (index - 2) * (tempCircleWidth + tempSpaceBetween)
                            }
                            //${index === 1 && 'pb-5' } ${index === 2 && 'pt-5' } ${index === 0 && 'pr-5' } ${index === 3 && 'pl-5' }
                            let paddingStr = '';
                            let paddingValue  = '32px';
                            if(index === 1){
                                paddingStr = 'paddingBottom';
                            }
                            if(index === 2 ){
                                paddingStr = 'paddingTop';
                            }
                            if(index === 0 ){
                                paddingStr = 'paddingRight';
                            }
                            if(index === 3 ){
                                paddingStr = 'paddingLeft';
                            }
                            const paddingWhileInView = {
                                [paddingStr]: paddingValue
                            }
                            return (
                                <m.div
                                    custom={index}
                                    key={index}
                                    variants={{
                                        'pos': {...el.whileInView, transition: transition, },
                                        ...variants
                                    }}

                                    initial={width <= SCREENS.LAPTOP ? 'pos' : tempInitial}
                                    whileInView={['pos', (!isAnyShowed ? 'ping' : '')]}
                                    animate={[(el.showed ? 'showed' : 'hide')]}
                                    onClick={() => {
                                        handleElClick(index);
                                    }}
                                    viewport={{once: true}}
                                    className={`select-none absolute flex items-center  rounded-full justify-center ${width <= SCREENS.LAPTOP ? 'h-[160px] min-w-[160px] max-w-[160px]' : 'h-[280px] min-w-[280px] max-w-[280px]'} `}>

                                    <m.div
                                        variants={
                                        {
                                            'pos': {transition: transition, ...paddingWhileInView},
                                            ...variants,
                                        }}
                                        initial={'pos'}
                                        whileHover={{scale: 1.05}}
                                        onHoverStart={()=>setIsAnyShowed(true)}

                                        animate={[(el.showed ? 'showed' : 'hide')]}
                                        className={`w-full h-full flex items-center justify-center rounded-full border-[8px] max-laptop:border-[6px] border-black transform-gpu 
                                            ${width <= SCREENS.LAPTOP ? 'h-[160px] min-w-[160px] max-w-[160px]' : 'h-[280px] min-w-[280px] max-w-[280px]'} ${el.number === '04' ? 'cursor-default' : 'cursor-pointer'} `}
                                    >

                                        <span
                                            className={`text-xl max-w-[160px] font-[900] max-laptop:text-sm max-laptop:max-w-[140px] text-center ${index === 0 && 'max-w-[140px] max-laptop:max-w-[90px]'}`}>{el.name}</span>
                                    </m.div>
                                </m.div>
                            )
                        })}
                    </div>
                </LazyMotion>
            </Wrapper>
            <AnimateChangeInHeight className={'mb-[86px]'}>
                <Draggable rootClass={' no-scrollbar'}>
                    <motion.div
                        transition={{
                            duration: 2
                        }}
                        className={'flex flex-row gap-8 touch-auto overflow-x-scroll overflow-y-hidden no-scrollbar relative '}>

                        {services.map((el, index) => {

                            if (el.showed) return (
                                <>
                                    {el.services?.map((el,index)=>(
                                        <a href={`/${el.link}`} key={index} className={'cursor-pointer'}>
                                            <motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{
                                                    duration: 1
                                                }}
                                                key={index}
                                                // max-phone:min-h-[195px]
                                                className={'flex flex-col justify-between max-w-[384px] min-w-[384px] min-h-[380px] max-phone:min-w-[284px] max-phone:max-w-[284px]  py-6 px-8 border border-black rounded-[20px]'}>
                                                <div className={'flex flex-row justify-between items-center align-middle gap-6'}>
                                                    <span
                                                        className={'text-2xl font-stick font-semibold text-main max-phone:text-1xl  '}>
                                                        {el.title.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {return word.toUpperCase();})}
                                                    </span>
                                                    <span
                                                        className={'text-xl font-medium self-start pt-4  max-phone:text-lg'}>{el.number}</span>
                                                </div>
                                                <p className={'w-full text-xl font-normal text-grey max-phone:text-sm'}>{el.text}</p>
                                            </motion.div>
                                        </a>
                                        ))}
                                </>
                            )
                        })}

                    </motion.div>
                </Draggable>
            </AnimateChangeInHeight>
        </>
    );
};

export default Services;