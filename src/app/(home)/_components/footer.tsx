import React from 'react';
import Wrapper from "@/app/_components/wrapper";
import Image from "next/image";

import logoSvg from '@icons/logo.svg';
import Link from "next/link";
const FOOTER_LINKS = [
    {
        title: 'About',
        links: [
            {
                name: 'Company',
                link: ''
            },{
                name: 'Careers',
                link: ''
            },{
                name: 'Legal',
                link: ''
            },{
                name: 'Help',
                link: ''
            },
        ]
    },{
        title: 'About',
        links: [
            {
                name: 'Company',
                link: ''
            },{
                name: 'Careers',
                link: ''
            },{
                name: 'Legal',
                link: ''
            },{
                name: 'Help',
                link: ''
            },
        ]
    },{
        title: 'About',
        links: [
            {
                name: 'Company',
                link: ''
            },{
                name: 'Careers',
                link: ''
            },{
                name: 'Legal',
                link: ''
            },{
                name: 'Help',
                link: ''
            },
        ]
    },{
        title: 'About',
        links: [
            {
                name: 'Company',
                link: ''
            },{
                name: 'Careers',
                link: ''
            },{
                name: 'Legal',
                link: ''
            },{
                name: 'Help',
                link: ''
            },
        ]
    },
]


const SERVICES = [
    {
        name: 'Amazon Expertise',
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
        name: 'Digital Marketing',
        number: '02',
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
        name: 'Software Development',
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
        name: 'TQM Audit',
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
const HomeFooter = () => {
    return (
        <Wrapper>
            <div className={'mt-20 pb-6 flex flex-col gap-8'}>
                <div className={'flex flex-row gap-12 max-phone:flex-col max-phone:gap-6 justify-between'}>
                    <div className={'flex flex-col gap-8 max-w-[488px]'}>
                        <Image src={logoSvg} alt={'logo'}/>
                        <p className={'text-xs max-phone:text-xs text-grey '}>
                            Optimize your product’s visibility and sales!
                        </p>
                    </div>
                    <div className={'flex flex-1 flex-row justify-around gap-12 max-phone:justify-between flex-wrap' }>
                        {SERVICES.map((el, index)=>(
                            <div key={index}  className={'flex flex-col gap-8 min-w-[62px]'}>
                                <span className={'text-sm font-bold'}>{el.name}</span>
                                <div className={'flex flex-col gap-3'}>
                                    {el.services.map((el, index)=>(
                                        <Link href={'/'+el.link} replace={true} key={el.title} className={'text-xxs font-normal'}>{el.title.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {return word.toUpperCase();})}</Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'h-[1px] w-full bg-grey-stroke'}  />
                <div className={'flex justify-center'}>
                    <span className={'text-center text-sm'}>© 2024 IK Project. All rights reserved. </span>
                </div>
            </div>
        </Wrapper>
    );
};

export default HomeFooter;