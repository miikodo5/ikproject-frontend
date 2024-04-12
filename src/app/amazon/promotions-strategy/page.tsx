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
    const header = 'Promotions strategy';
    const paragraph = 'Elevate your Amazon game with our strategic promotions support. We identify top products, recommend the best promotions, and schedule for success. Boost sales, traffic, and visibility now!';
    const stats = [
        {number: '60%', text: 'Boost with our tailored promotion strategies '},
        {number: '50%', text: 'rise in conversion rates '},
        {number: '70%', text: 'increase in product placement leads'},
        {number: '40%', text: 'Increase your buy box with our proven tactics'}
    ];
    const strategy = [
        {
            title: 'Product Evaluation',
            text: 'Assessing which products are best suited for promotions based on their performance and market demand.'
        },
        {
            title: 'Promotion Type Selection',
            text: 'Suggesting the ideal promotion type - like \'Deal of the Day\' or \'Lightning Deal\' - to maximize sales based on your objectives.'
        },
        {
            title: 'Strategic Scheduling',
            text: 'Developing a promotional calendar aligned with key industry events and retail peaks to drive optimal results.'
        },
        {
            title: 'Execution Plan',
            text: 'Detailed roadmap outlining when and how each promotion will be executed to ensure maximum impact on Amazon.'
        },
        {
            title: 'Performance Analysis',
            text: 'Evaluating the effectiveness of each promotion, refining strategies, and providing actionable insights for continual improvement.'
        }
    ];
    const portfolios = [
        {
            title: 'Promotion Power Pack',
            text: 'Our Amazon Promotions Strategy service offers a comprehensive package that includes identifying the right products for promotion, selecting the best promotion type, and scheduling promotions strategically throughout the year. With our expertise, you can unlock the full potential of your Amazon sales.',
            img: portfolioPhoto_1
        },
        {
            title: 'Tactical Promotion Tactics',
            text:'We help you decide which products are prime candidates for promotions and recommend the most effective promotion types for maximum impact. By aligning promotions with key events and dates, we ensure your brand stands out in the competitive Amazon marketplace.',
            img: portfolioPhoto_2
        },
        {
            title: 'Promo Prowess Planner',
            text: 'Our team assists in setting up a well-structured promotion schedule tailored to your brand\'s vision and goals. From boosting product placement to increasing traffic and conversion rates, our strategic planning guarantees a significant boost in sales and visibility.',
            img: portfolioPhoto_3
        },
        {
            title: 'Sales Surge Solutions',
            text: 'We focus on increasing relevancy, amplifying sales figures, and enhancing your buy box percentage through targeted promotions designed to drive results. Let us help you achieve a surge in both sales performance and brand recognition on Amazon.',
            img: portfolioPhoto_4
        },
        {
            title: 'Conversion Catalyst Consultation',
            text: 'Rely on our expertise to elevate your Amazon presence with a tailored promotions strategy that not only clears old stock but also propels your lower-performing products to success. By leveraging key retail dates and events, we ensure every promotion is a compelling opportunity for growth.',
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