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
    const header = 'Amazon advertising';
    const paragraph = 'Struggle with Amazon ads? Boost sales fast with our expert Amazon Advertising services. Maximize ROI now!';
    const stats = [
        {number: '87%', text: 'increase in Click-Through Rates'},
        {number: '40%', text: 'boost in Conversion Rates'},
        {number: '95%', text: 'reduction in ACoS (Advertising Cost of Sales)'},
        {number: '$1.5M', text: 'total Sales Generated for Clients'}
    ];
    const strategy = [
        {
            title: 'Target Keyword Identification',
            text: 'Uncover the most relevant and high-performing keywords for each campaign to boost visibility and drive traffic to your products'
        },
        {
            title: 'Creative Headline Creation',
            text: 'Craft compelling and attention-grabbing headlines for your Headline Search ads that captivate potential customers and increase click-through rates.'
        },
        {
            title: 'Budget & Bid Management',
            text: 'Efficiently manage your advertising budget and bids to optimize spending while maximizing the impact of your ads on the Amazon marketplace.'
        },
        {
            title: 'Ongoing Campaign Optimization',
            text: 'Continuously refine and adjust your advertising campaigns based on performance data to ensure optimal results and minimize wasted ad spend.'
        },
        {
            title: 'Performance Reporting',
            text: 'Receive regular detailed reports on the effectiveness of your advertising campaigns, allowing you to track ROI and make informed decisions for future strategies.'
        }
    ];
    const portfolios = [
        {
            title: 'Targeted Keyword Identification (Keywords)',
            text: 'Let us do the heavy lifting for you by identifying the most relevant and high-performing keywords for each of your advertising campaigns. We ensure that your products are seen by the right audience at the right time.',
            img: portfolioPhoto_1
        },
        {
            title: 'Compelling Headline Creation (Headlines)',
            text:'Your headline is the first impression you make on potential customers. Our expert team crafts attention-grabbing headlines for your Headline Search ads that drive clicks and conversions, increasing visibility and sales.',
            img: portfolioPhoto_2
        },
        {
            title: 'Budget & Bid Management (Budgeting)',
            text: 'We take care of managing your budget and bids effectively to ensure that you get the maximum return on your investment. With our strategic approach, you can reach your target audience without overspending.',
            img: portfolioPhoto_3
        },
        {
            title: 'Ongoing Campaign Optimization (Optimization)',
            text: 'Our work doesn\'t stop once the campaign is live. We continuously analyze and optimize your advertising campaigns to maximize performance and achieve better results over time. Stay ahead of the competition with our proactive optimization strategies.',
            img: portfolioPhoto_4
        },
        {
            title: 'Detailed Performance Reporting (Reporting)',
            text: 'Transparency is key when it comes to understanding the impact of your advertising efforts. We provide regular, detailed reports on the performance of your Amazon advertising campaigns, giving you insights into what\'s working and areas for improvement.',
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