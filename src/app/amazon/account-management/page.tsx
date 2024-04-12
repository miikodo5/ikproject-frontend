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
    const header = 'Amazon account management';
    const paragraph = 'Struggling to manage your Amazon account effectively? Unlock the power of strategic account management with IK Project';
    const stats = [
        {number: '40%', text: 'Increase in sales within the first month'},
        {number: '90%', text: 'Improvement in listing visibility'},
        {number: '75%', text: `Reduction in advertising costs`},
        {number: '24/7', text: `Support response time under 1 hour`}
    ];
    const strategy = [
        {
            title: 'Evaluation',
            text: 'Assess current status for strengths & weaknesses'},
        {
            title: 'Planning',
            text: 'Craft tailored strategy aligned with goals'
        },
        {
            title: 'Optimization',
            text: 'Enhance listings for visibility & conversion'
        },
        {
            title: 'Promotion',
            text: 'Implement targeted ad campaigns for traffic & sales'
        },
        {
            title: 'Sustainment',
            text: 'Provide ongoing support services for thriving presence'
        }
    ];
    const portfolios = [
        {
            title: 'Comprehensive Account Analysis',
            text: 'We conduct a thorough audit of your Amazon account, identifying strengths and areas for improvement to maximize your sales potential.',
            img: portfolioPhoto_1
        },
        {
            title: 'Tailored Strategic Planning',
            text: 'Our team crafts customized strategies designed specifically for your brand, ensuring every action aligns with your unique goals and vision.',
            img: portfolioPhoto_2
        },
        {
            title: 'Advanced Data Analytics',
            text: 'Utilizing cutting-edge tools and techniques, we provide in-depth data analysis to drive informed decision-making and optimize performance.',
            img: portfolioPhoto_3
        },
        {
            title: 'Dedicated Client Support',
            text: 'You\'ll have a dedicated Client Services Manager who provides regular updates, guidance, and assistance, ensuring you\'re always informed and supported.',
            img: portfolioPhoto_4
        },
        {
            title: 'Proactive Fraud Prevention',
            text: 'We actively monitor and safeguard your Amazon account against fraudulent activity, maintaining your brand\'s integrity and protecting your business interests.',
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