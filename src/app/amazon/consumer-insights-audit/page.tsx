import React from 'react';
import PortfolioHeader from "@/app/(portfolios)/_components/header";
import PortfolioStrategy from "@/app/(portfolios)/_components/strategy";
import PortfolioCards from "@/app/(portfolios)/_components/portfolio";
import HomeContact from "@/app/(home)/_components/contact";
import HomeFooter from "@/app/(home)/_components/footer";
import AmazonHero from "@/app/(portfolios)/amazon/_components/hero";


import heroImg1 from '@images/amazon/hero41.png';
import heroImg2 from '@images/amazon/hero42.png';
import portfolioPhoto_1 from "@images/portfolio-1.png";
import portfolioPhoto_2 from "@images/portfolio-2.png";
import portfolioPhoto_3 from "@images/portfolio-3.png";
import portfolioPhoto_4 from "@images/portfolio-4.png";
import portfolioPhoto_5 from "@images/portfolio-5.png";
const PortfolioPage = () => {
    const header = 'Consumer insights audit';
    const paragraph = 'Struggling to manage your Amazon account effectively and maximize sales? Let IK Project take the burden off your shoulders.';
    const stats = [
        {number: 25,after:'%', text: 'increase in profitability after implementing our insights audit'},
        {number: 19, text: 'times more likely to succeed'},
        {number: 90,after:'%', text: 'of companies reported improved decision-making accuracy with our reports'},
        {number: 30,after:'%', text: 'growth in market share within 6 months'}
    ];
    const strategy = [
        {
            title: 'Market Analysis',
            text: 'We analyze our ecommerce market size, segmentation, and key drivers to identify trends. Utilize a two-year forecast for future planning with confidence.'
        },
        {
            title: 'Consumer Insights',
            text: 'We help you know your customers\' preferences, interests, and purchasing behaviors to stay ahead by keeping track of emerging consumer trends.'
        },
        {
            title: 'Competitive Intelligence',
            text: 'To gain a competitive edge, we analyze competitors\' profiles, market share, and strategies to capitalize on industry trends and outmaneuver them.'
        },
        {
            title: 'Business Case Development',
            text: 'We assess opportunities versus risks, using data for pricing insights, margin analysis, and forecasting to make informed decisions.'
        },
        {
            title: 'Confident Decision Making',
            text: 'Utilize our insights audit for a thorough market analysis. Gain actionable data on market size, competition, consumer behavior, and forecasts to inform resource allocation strategies.'
        }
    ];
    const portfolios = [
        {
            title: 'Market Profiling Excellence',
            text: 'Our audit dives deep into your market, providing insights on size, segmentation, key drivers, and two-year trend forecasts so you can plan for the future with confidence.',
            img: portfolioPhoto_1
        },
        {
            title: 'Customer Connection Blueprint',
            text:'Discover your customer profiles, what motivates them, and emerging trends to stay ahead of the game and meet customer demands effectively.\n',
            img: portfolioPhoto_2
        },
        {
            title: 'Competitive Intelligence Unveiled',
            text: 'We reveal competitor profiles, market share analysis, and innovation strategies to help you outperform in a dynamic online landscape.',
            img: portfolioPhoto_3
        },
        {
            title: 'Business Case Precision',
            text: 'Evaluate opportunities against competition risks with pricing, margin analysis, forecasting information, and an opportunity matrix for strategic decision-making.',
            img: portfolioPhoto_4
        },
        {
            title: 'Data-Driven Decision Success',
            text: 'Ecommerce businesses leveraging data are 19 times more likely to be profitable. Our insights audit equips you with comprehensive market visibility, threat assessment, and a solid business case for market entry decisions.',
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