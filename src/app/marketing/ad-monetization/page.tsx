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
    const header = 'Optimize Monetize Advertising';
    const paragraph = 'Unlock the power of advertising revenue with IK Project\'s Ad Monetization Service. Elevate your website\'s income with optimized video, website, and app ads. Gain access to Google Ad Exchange and enjoy direct deals with major advertisers. Maximize earnings with real-time bidding and expert policy compliance monitoring. Trust our 15-year expertise for up to 50% more revenue than AdSense. Opt for a reliable partner - choose IK Project today!';
    const strategy = [
        {
            title: 'Assessment & Strategy Development',
            text: 'We analyze your website to create a personalized monetization strategy, identifying improvement opportunities for success.'
        },
        {
            title: 'Implementation & Optimization',
            text: 'Our team optimizes ad revenue by utilizing Google Ad Manager, Ad Exchange, direct deals, and real-time bidding.'
        },
        {
            title: 'Monitoring & Compliance',
            text: 'We offer continuous technical support, real-time ad performance monitoring, and policy compliance recommendations to ensure effective ads.'
        },
        {
            title: 'Reporting & Analysis',
            text: 'Get clear Telegram alerts for monitoring ad revenue and performance metrics. Use detailed analytics to optimize your advertising strategy.'
        },
        {
            title: 'Continuous Improvement & Support',
            text: 'IK Project collaborates with clients to optimize page load, SEO, website analytics, and user interface for successful partnerships.'
        }
    ];
    const portfolios = [
        {
            title: 'Advanced Ad Monetization Strategies',
            text: 'Our service encompasses sophisticated techniques for monetizing and optimizing video ads, website ads, and apps. From direct deals to real-time bidding, we ensure your ad revenue is maximized to its full potential.',
            img: portfolioPhoto_1
        },
        {
            title: 'Access to Premium Advertising Networks',
            text:'Partnering with IK Project gives you access to Google Ad Exchange and other top-tier ad networks like Alphabet, Apple, and Amazon. Benefit from direct deals with guaranteed impressions and fixed prices to boost your earnings.',
            img: portfolioPhoto_2
        },
        {
            title: 'Expert Guidance for Optimal Results',
            text: 'Our experienced team provides technical support, policy compliance monitoring, and recommendations on banner placement and types. Leverage our expertise in Google Ad Manager to elevate your advertising revenue by 20-50% compared to traditional platforms like AdSense.',
            img: portfolioPhoto_3
        },
        {
            title: 'Proven Track Record of Success',
            text: 'Clients trust IK Project for our tangible results — the average cooperation period of 23 months speaks volumes about the financial benefits they experience. With over a decade of experience in online marketing, we deliver transparent solutions tailored for your business growth.',
            img: portfolioPhoto_4
        },
        {
            title: 'Comprehensive Suite of Additional Services',
            text: 'In addition to ad monetization, we offer performance optimization, SEO services, website analytics, and user interface enhancements to further enhance your online presence and revenue streams.',
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