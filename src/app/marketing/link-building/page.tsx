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
    const header = 'Link Building';
    const paragraph = 'IK Project\'s Link Building services offer expert outreach, crowd marketing, and comprehensive strategies to grow your online presence. With a proven track record since 2006, trust over 4,000 satisfied clients who have seen tangible results like enhanced search engine rankings and increased customer trust. Choose IK Project for transparent pricing, documented results, and the competitive edge you need to succeed in the digital world.';
    const strategy = [
        {
            title: 'Analysis of Link Mass',
            text: 'Our expert team will meticulously analyze your website\'s link profile, identifying areas for improvement to boost your search engine ranking and authority.'
        },
        {
            title: 'Analysis of Link Mass',
            text: 'We conduct in-depth research on your competitors\' link building strategies to understand what works best in your industry, giving you a competitive edge.'
        },
        {
            title: 'Strategy Development',
            text: 'We create a customized link building strategy based on the analysis to maximize your website\'s visibility for your goals and target audience.'
        },
        {
            title: 'Building',
            text: 'Our experienced team effectively secures high-quality backlinks from authoritative websites to drive targeted traffic and enhance customer trust.'
        },
        {
            title: 'Monitoring and Optimization',
            text: 'We offer detailed reports and closing documents for transparency on our efforts. Continuous monitoring optimizes the link building process for ongoing success.'
        }
    ];
    const portfolios = [
        {
            title: 'Outreach: Connecting You with Authority Sites',
            text: 'Our outreach service establishes valuable connections with authoritative websites, securing backlinks that enhance your website\'s credibility and visibility in search engine results.',
            img: portfolioPhoto_1
        },
        {
            title: 'Crowd Marketing: Engaging Your Target Audience',
            text:'Crowd marketing enables you to promote brand awareness by sharing high-quality content about your services on popular platforms frequented by your target audience, driving organic traffic and boosting your online presence.',
            img: portfolioPhoto_2
        },
        {
            title: 'Comprehensive Link Building: Tailored Strategies for Success',
            text: 'Our comprehensive link building service combines various techniques such as outreach, guest posting, and content creation to build a robust backlink profile that elevates your website\'s domain rank and authority over time.',
            img: portfolioPhoto_3
        },
        {
            title: 'Analysis and Strategy Development: Unveiling Your Path to Success',
            text: 'We conduct a thorough analysis of your current link profile, assess competitor strategies, and develop a customized link building roadmap to enhance your website\'s visibility, attract organic traffic, and outperform competitors in search engine rankings.',
            img: portfolioPhoto_4
        },
        {
            title: 'Results-Driven Approach: Transparency and Growth Guaranteed',
            text: 'At IK Project, we prioritize transparency and accountability by providing detailed reports, certificates of completion, and documented results of our link building efforts. With a six-month warranty on our services, clients can enjoy discounts while witnessing tangible improvements in their search engine rankings and online visibility.',
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