import React from 'react';
import PortfolioHeader from "@/app/(portfolios)/_components/header";
import PortfolioStrategy from "@/app/(portfolios)/_components/strategy";
import PortfolioCards from "@/app/(portfolios)/_components/portfolio";
import HomeContact from "@/app/(home)/_components/contact";
import HomeFooter from "@/app/(home)/_components/footer";
import MarketingHero from "@/app/(portfolios)/marketing/_components/hero";
import portfolioPhoto_1 from "@images/portfolio-1.png";
import portfolioPhoto_2 from "@images/portfolio-2.png";
import portfolioPhoto_3 from "@images/portfolio-3.png";
import portfolioPhoto_4 from "@images/portfolio-4.png";
import portfolioPhoto_5 from "@images/portfolio-5.png";

const PortfolioPage = () => {
    const header = 'Chatbot Development';
    const paragraph = 'Are you looking to revolutionize your business\'s customer service and marketing strategy? IK Project\'s Chatbot Development service is here to streamline your communication, boost sales, and enhance user experience. With over 17 years of expertise in internet marketing, our team of 350+ experts has delivered over 4000 successful projects. Benefit from personalized chatbot solutions that engage customers, drive sales, and save on transactional messages.';
    const strategy = [
        {
            title: 'Strategic Planning',
            text: 'Our team dives deep into your business goals and objectives to create a customized chatbot strategy that aligns perfectly with your needs.'
        },
        {
            title: 'Tailored Development',
            text: 'We craft personalized chatbots that efficiently answer queries, provide product information, process payments, offer support, and more - all while engaging your customers 24/7.'
        },
        {
            title: 'Data-Driven Optimization',
            text: 'We harness the power of customer data to understand their preferences, enabling us to create targeted content that enhances user experience and boosts sales.'
        },
        {
            title: 'Continuous Support',
            text: 'Our team provides ongoing maintenance and support to ensure your chatbots are always functioning at their best, offering round-the-clock service without the need for additional human resources.'
        },
        {
            title: 'Performance Analysis',
            text: 'To gauge chatbot effectiveness, we monitor message open rates that can reach up to 90%, enhancing engagement, sales, and customer interactions across platforms.'
        }
    ];
    const portfolios = [
        {
            title: 'Enhanced Customer Engagement',
            text: 'Our chatbots allow businesses to quickly and efficiently address customer queries, provide product information, facilitate payment transactions, offer support, and more. By engaging with your target audience 24/7, you can deliver personalized and efficient services without exhausting human resources.',
            img: portfolioPhoto_1
        },
        {
            title: 'Personalized Communication Strategy',
            text:'Utilize chatbots to collect and analyze customer data, understand their preferences, and tailor communication strategies accordingly. This personalized approach not only enhances customer experience but also boosts sales by catering to individual needs.',
            img: portfolioPhoto_2
        },
        {
            title: 'Increased Sales and Efficiency',
            text: 'The secret to the effectiveness of chatbots lies in their high message open rates of 60% to 90%. With customized solutions that seamlessly integrate with your systems and websites, you can leverage customer data to create personalized content that drives sales and streamlines business processes.',
            img: portfolioPhoto_3
        },
        {
            title: 'Tailored Solutions for Diverse Businesses',
            text: 'Whether you run an online store, service business (online or offline), or info-businesses, our chatbot development service caters to your specific needs. From enhancing customer communication to automating funnels for webinars and courses, we offer comprehensive solutions for various industries.',
            img: portfolioPhoto_4
        },
        {
            title: 'Comprehensive Chatbot Service Package',
            text: 'Rely on IK Project’s experienced team for a full range of services including setting up subscriber bases, creating triggers and sales funnels for chatbots, customizing chatbots for your business needs, conducting mass mailings with segmented content types like gamification elements or promotional messages - all aimed at optimizing your engagement strategies.',
            img: portfolioPhoto_5
        },
    ]
    return (
        <div>
            <PortfolioHeader color={'black'} laptopColor={'white'}/>
            <MarketingHero header={header} paragraph={paragraph}/>
            <PortfolioStrategy strategy={strategy}/>
            <PortfolioCards portfolios={portfolios}/>
            <HomeContact/>
            <HomeFooter/>
            
        </div>
    );
};

export default PortfolioPage;