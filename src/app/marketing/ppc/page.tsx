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
    const header = 'Pay Per Click';
    const paragraph = 'Are you tired of wasting time and money on ineffective PPC campaigns? Look no further! With PPC 2.0, our ROI-focused approach ensures your ads reach the right audience at the right time. Our team of 132 marketing experts at IK Project will optimize your CPL, CPO, CRR, and ROMI to drive results. Choose us for proven expertise, cutting-edge technology, and transparent communication to take your PPC strategy to the next level!';
    const strategy = [
        {
            title: 'Analyze & Understand',
            text: 'Get to the core of your audience\'s needs and behaviors. We analyze data and consumer insights to identify key opportunities for your brand.'
        },
        {
            title: 'Strategize & Plan',
            text: 'Let IK Project\'s marketing experts craft a customized strategy to boost your ROI with cutting-edge tools and techniques.'
        },
        {
            title: 'Implement & Optimize',
            text: 'We optimize KPIs like CPL, CPO, CRR, and ROMI for effective plan implementation. Our expertise in PPC 2. 0 ensures every click helps achieve your business goals.'
        },
        {
            title: 'Monitor & Adjust',
            text: 'Continuous monitoring is crucial for success. We track performance metrics in real-time and adjust campaigns to optimize results at each stage of the sales funnel.'
        },
        {
            title: 'Evaluate & Scale',
            text: 'The IK Project Client Dashboard offers transparent reporting on campaign performance, measurable goals, and data-driven insights for long-term business growth.'
        }
    ];
    const portfolios = [
        {
            title: 'Unlock the Power of Targeted Advertising',
            text: 'Our team at IK Project has been crafting pay per click advertising solutions for over sixteen years, tailored to meet the exact needs of your target audience. By leveraging a full suite of tools, we ensure that your message reaches the right person, at the right time, and in the right place.',
            img: portfolioPhoto_1
        },
        {
            title: 'Optimized KPIs for Business Growth',
            text:'Let us take care of optimizing key performance indicators essential for your business success such as CPL, CPO, CRR, and ROMI. Our data-driven approach ensures that every advertising dollar spent contributes directly to your bottom line.',
            img: portfolioPhoto_2
        },
        {
            title: 'Revolutionize Your PPC Campaigns with PPC 2.0',
            text: 'Experience a new level of ROI-focused campaign management with our innovative See-Think-Do-Care framework. We optimize advertising channels based on specific tasks related to each stage of the sales funnel: Awareness, Demand, Choice and Transaction, Recommendations and Repeat Purchases.',
            img: portfolioPhoto_3
        },
        {
            title: 'Diverse PPC Management Tools at Your Fingertips',
            text: 'From search ads to video advertising, our comprehensive suite of PPC management tools covers all bases: Search advertising; Shopping ads; Banner advertising; Video advertising; Remarketing and retargeting; Social media targeting; Marketplaces and price comparison websites.',
            img: portfolioPhoto_4
        },
        {
            title: 'Experience Unmatched Expertise and Transparency',
            text: 'With a team of 132 marketing professionals dedicated to your success, backed by over 16 years of industry experience, IK Project ensures you get results. Our transparent processes and cutting-edge technological efficiency guarantee your campaigns are in safe hands.',
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