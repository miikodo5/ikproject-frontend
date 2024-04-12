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
    const header = 'Search Engine Optimization';
    const paragraph = 'For over 16 years, we\'ve revolutionized online businesses with SEO 2.0, optimizing websites for success. With a track record of 1,000+ successful projects across various industries, we craft individual promotion strategies and execute detailed technical audits to increase search traffic and user engagement.';
    const strategy = [
        {
            title: 'Market Intelligence',
            text: 'We conduct thorough market research to analyze competitors, offering a clear project development strategy to enhance your search traffic.'
        },
        {
            title: 'Technical Site Audit',
            text: 'Our team conducts a thorough technical audit of your website to establish requirements that meet user expectations and search engine criteria for optimal performance.'
        },
        {
            title: 'Semantic Analysis',
            text: 'We offer a comprehensive list of user search queries to boost your brand visibility. By optimizing for user intent, we help you stand out against competitors cost-effectively.'
        },
        {
            title: 'Website Optimization & Link Building',
            text: 'We optimize your website\'s structure, product categories, and landing pages for user search intent. Our secure link-building practices provide high-quality backlinks affordably.'
        },
        {
            title: 'Conversion Rate Enhancement',
            text: 'We offer guidelines to optimize user behavior data for improved conversion rates, usability, and SEO. Trust is established through strategic online reviews and updates.'
        }
    ];
    const portfolios = [
        {
            title: 'Strategy Insights: Unveil Your Competitors\' Secrets',
            text: 'Our individual promotion strategies provide a detailed understanding of the market structure and a thorough analysis of your competitors\' strengths and weaknesses. We craft project development strategies tailored to increase your search traffic, ensuring you stay ahead in the digital race.',
            img: portfolioPhoto_1
        },
        {
            title: 'Technical Audit Perfection: Meeting User Expectations and Search Engine Requirements',
            text:'Receive a comprehensive technical requirement document post-audit, allowing your website to align seamlessly with user expectations and search engine guidelines. Stay on top of your game with optimized website compliance.',
            img: portfolioPhoto_2
        },
        {
            title: 'User-Driven Content Optimization: Dominate User Search Intent',
            text: 'Drive high-quality traffic with deep semantic analysis providing optimal search query solutions for users seeking your offerings. Optimize content for user intent, outshining competitors in a cost-effective manner.',
            img: portfolioPhoto_3
        },
        {
            title: 'User-Centric Web Structure: Seamlessly Navigate Search Intent',
            text: 'Craft product categories, subcategories, filters, and landing pages that prioritize user intent. Develop interlinking strategies and robust link building activities to boost visibility while staying within budget constraints.',
            img: portfolioPhoto_4
        },
        {
            title: 'Data-Driven Conversion Strategies: Enhance User Experience for Increased Conversions',
            text: 'Leverage practical guidelines for conversion rate optimization based on user behavior metrics. Enrich your insights with effective content strategies that cater to both users and search engines, ultimately elevating your website\'s online performance.',
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