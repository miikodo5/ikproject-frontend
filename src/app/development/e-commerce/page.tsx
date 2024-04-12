import React from 'react';
import PortfolioHeader from "@/app/(portfolios)/_components/header";
import PortfolioStrategy from "@/app/(portfolios)/_components/strategy";
import PortfolioCards from "@/app/(portfolios)/_components/portfolio";
import HomeContact from "@/app/(home)/_components/contact";
import HomeFooter from "@/app/(home)/_components/footer";
import Portfolio2Hero from "@/app/(portfolios)/portfolio2/_components/hero";
import portfolioPhoto_1 from "@images/portfolio-1.png";
import portfolioPhoto_2 from "@images/portfolio-2.png";
import portfolioPhoto_3 from "@images/portfolio-3.png";
import portfolioPhoto_4 from "@images/portfolio-4.png";
import portfolioPhoto_5 from "@images/portfolio-5.png";

const PortfolioPage = () => {
    const header = 'E-Commerce';
    const paragraph = 'With our E-Commerce services, powered by Shopify and WordPress expertise, we craft revenue-focused solutions for B2B and consumer brands. From custom payment portals to subscription platforms, we balance innovation with practicality to boost sales and enhance user experience. Trust us for extraordinary outcomes, deep technical expertise, and flexible solutions tailored to your needs. Let\'s transform your digital commerce brand together!';
    const strategy = [
        {
            title: 'Understanding Your Brand Needs',
            text: 'Our team conducts a thorough analysis of your business requirements and goals to understand how to tailor our services to meet your specific needs.'
        },
        {
            title: 'Crafting a Customized E-Commerce Strategy',
            text: 'We work closely with you to develop a personalized e-commerce strategy that aligns with your brand identity and business objectives, ensuring optimal results and growth.'
        },
        {
            title: 'Cutting-Edge Solutions',
            text: 'With our deep technical expertise, we implement innovative e-commerce solutions that enhance user experience, drive sales, and foster customer loyalty.'
        },
        {
            title: 'Integration Across Platforms',
            text: 'We seamlessly integrate your e-commerce solution with tools like CRM, ERP, and marketing automation systems to enhance efficiency.'
        },
        {
            title: 'Continuous Optimization and Support',
            text: 'We offer continuous support, updates, and optimization services to keep your e-commerce platform competitive and delivering exceptional results beyond implementation.'
        }
    ];
    const portfolios = [
        {
            title: 'E-commerce Site Development',
            text: 'Our team specializes in creating captivating e-commerce front-ends that not only drive sales but also leave a lasting impression on your customers, ensuring they keep coming back for more.',
            img: portfolioPhoto_1
        },
        {
            title: 'Payment-Driven Applications',
            text:'We offer solutions that seamlessly embed payments into your product, optimizing accounting functions, accelerating payment collections, and improving overall user experience.',
            img: portfolioPhoto_2
        },
        {
            title: 'Subscription Platforms',
            text: 'Whether off-the-shelf or custom-built, we have the expertise to guide you through subscription platform implementation, ensuring smooth integrations and data integrity for sustained success.',
            img: portfolioPhoto_3
        },
        {
            title: 'E-commerce Replatforming',
            text: 'Rely on our team to handle the intricate process of replatforming your e-commerce site — from data migrations to minimizing revenue disruptions, we\'ve got you covered.',
            img: portfolioPhoto_4
        },
        {
            title: 'Service Integration',
            text: 'We specialize in integrating your e-commerce solution with essential business systems like CRM, ERP, marketing automation tools, and 3PL services to optimize operations and streamline order processing.',
            img: portfolioPhoto_5
        },
    ]
    return (
        <div>
            <PortfolioHeader color={'black'}/>
            <Portfolio2Hero header={header} paragraph={paragraph}/>
            <PortfolioStrategy strategy={strategy}/>
            <PortfolioCards portfolios={portfolios}/>
            <HomeContact/>
            <HomeFooter/>
            
        </div>
    );
};

export default PortfolioPage;