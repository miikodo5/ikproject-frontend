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
    const header = 'Search-engine reputation management';
    const paragraph = 'Unleash the potential of SERM with our expert team! We eliminate negative search results, create positive brand content, and boost your online reputation. Let us help you attract top talent, enhance customer loyalty, and dominate search engine rankings with our cutting-edge strategies. Elevate your brand today!';
    const strategy = [
        {
            title: 'Identifying Reputation Gaps',
            text: 'We analyze your online presence to pinpoint negative search results and assess areas for improvement to enhance your brand\'s reputation.'
        },
        {
            title: 'Strategic Content Development',
            text: 'We craft engaging, positive content that resonates with your target audience, boosting your online image and improving search result rankings.'
        },
        {
            title: 'Proactive Reputation Management',
            text: 'Our team monitors online sentiment and swiftly addresses any negative reviews or comments to maintain a positive brand perception across all platforms.'
        },
        {
            title: 'Maximizing Online Visibility',
            text: 'We optimize your search presence by curating positive customer reviews, enhancing Google My Business interactions, and developing authoritative content to highlight your brand\'s strengths.'
        },
        {
            title: 'Ongoing Monitoring and Reporting',
            text: 'We provide regular reports on the performance of our SERM strategies, keeping you informed on search query changes, local visibility improvements, and overall online reputation progress.'
        }
    ];
    const portfolios = [
        {
            title: 'Negative Results Removal',
            text: 'Don\'t let negative reviews and fake competitor content tarnish your brand image. We specialize in eliminating unfavorable search engine results, ensuring your audience sees only the best of what you offer.',
            img: portfolioPhoto_1
        },
        {
            title: 'Proactive Content Creation',
            text:'Our team excels at creating positive, impactful content that dominates search engine rankings when users look for branded information. Let us help you shine brightly in the online sphere.',
            img: portfolioPhoto_2
        },
        {
            title: 'HR Brand Enhancement',
            text: 'Attracting top talent starts with a strong HR brand. We are here to assist new companies in portraying a positive image that resonates with potential employees, giving you an edge in recruitment.',
            img: portfolioPhoto_3
        },
        {
            title: 'Comprehensive SERM Strategy',
            text: 'We work tirelessly to develop tailored strategies through keyword research, localized search evaluations, and constant monitoring of public perception. Together, we\'ll create avenues for glowing reviews and loyal customer interactions that optimize your search ranking.',
            img: portfolioPhoto_4
        },
        {
            title: 'Transparent Reporting & Monitoring',
            text: 'Rely on our detailed reporting mechanisms to track shifts in search queries and local impressions. From managing customer interactions on Google My Business to posting authoritative content on Wikipedia, we keep you informed every step of the way.',
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