import React from 'react';
import PortfolioHeader from "@/app/(portfolios)/_components/header";
import PortfolioStrategy from "@/app/(portfolios)/_components/strategy";
import PortfolioCards from "@/app/(portfolios)/_components/portfolio";
import HomeContact from "@/app/(home)/_components/contact";
import HomeFooter from "@/app/(home)/_components/footer";
import AmazonHero from "@/app/(portfolios)/amazon/_components/hero";


import heroImg1 from '@images/hero-3-1.png';
import heroImg2 from '@images/hero-3-2.png';
import portfolioPhoto_1 from "@images/portfolio-1.png";
import portfolioPhoto_2 from "@images/portfolio-2.png";
import portfolioPhoto_3 from "@images/portfolio-3.png";
import portfolioPhoto_4 from "@images/portfolio-4.png";
import portfolioPhoto_5 from "@images/portfolio-5.png";
const PortfolioPage = () => {
    const header = 'Amazon Stores';
    const paragraph = 'Drive sales exponentially with Amazon Stores. Engage customers effortlessly with captivating visuals and insightful analytics. Level up your e-commerce game now!';
    const stats = [
        {number: '70%', text: 'Increase in sales'},
        {number: '$500', text: 'Average increase in Average Order Value'},
        {number: '50%', text: 'Growth in brand awareness reported'},
        {number: '90%', text: 'Customer satisfaction rate for brands'}
    ];
    const strategy = [
        {
            title: 'Define Your Brand Vision',
            text: 'Set clear brand objectives and define your target audience to create a compelling Amazon Store that connects with customers.'
        },
        {
            title: 'Craft Engaging Content Modules',
            text: 'Create engaging landing pages with interactive features like shoppable visuals, videos, and portfolios to effectively showcase products.'
        },
        {
            title: 'Utilize Customizable Features',
            text: 'Maximize brand awareness and audience engagement on Amazon by utilizing custom text modules and high-definition visuals.'
        },
        {
            title: 'Optimize for Sales Conversion',
            text: 'Increase sales by up to 70% with strategic design elements and multimedia content that help guide customers through your product ranges.'
        },
        {
            title: 'Analyze and Iterate for Success',
            text: 'Use store insights to enhance strategy, improve product imagery, utilize video assets, and optimize Sponsored Brand ads for increased sales on all devices.'
        }
    ];
    const portfolios = [
        {
            title: 'Interactive Landing Pages',
            text: 'Create immersive experiences for your customers with interactive landing pages that showcase your entire product range. Let your products shine and draw shoppers in with engaging visuals and seamless navigation.',
            img: portfolioPhoto_1
        },
        {
            title: 'Custom Text Modules for Brand Awareness',
            text:'Elevate your brand presence on Amazon by utilizing custom text modules to tell your brand story. Build trust and credibility with customers through compelling narratives that resonate and leave a lasting impression.',
            img: portfolioPhoto_2
        },
        {
            title: 'High Definition Visuals and Videos',
            text: 'Capture the attention of potential buyers with stunning visuals and dynamic videos that bring your products to life. Stand out from the competition by showcasing your offerings in crisp detail and engaging multimedia content.',
            img: portfolioPhoto_3
        },
        {
            title: 'Unique Amazon.com Web Address',
            text: 'Create a distinct online identity for your brand with a unique Amazon.com web address that directs customers straight to your storefront. Make it easy for shoppers to find and explore your products in one convenient destination.',
            img: portfolioPhoto_4
        },
        {
            title: 'Insights and Analytics for Strategic Growth',
            text: 'Gain valuable insights into customer behavior, sales performance, and traffic sources with comprehensive analytics provided by Amazon Stores. Use data-driven strategies to optimize your storefront, enhance user experience, and drive increased sales opportunities.',
            img: portfolioPhoto_5
        },
    ]
    return (
        <div>
            <PortfolioHeader color={'black'}/>
            <AmazonHero header={header} paragraph={paragraph} stats={stats} img1={heroImg1} img2={heroImg2}/>
            <PortfolioStrategy strategy={strategy}/>
            <PortfolioCards portfolios={portfolios}/>
            <HomeContact/>
            <HomeFooter/>

        </div>
    );
};

export default PortfolioPage;