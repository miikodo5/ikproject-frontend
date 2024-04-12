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
    const header = 'demand-side platform';
    const paragraph = 'Struggling to stand out in a crowded market? Reach millions of consumers, drive sales, and boost brand safety with Amazon DSP\'s exclusive ad solutions.';
    const stats = [
        {number: '50%', text: 'increase in brand awareness achieved'},
        {number: '30%', text: 'boost in customer consideration'},
        {number: '25%', text: 'increase in purchase conversions'},
        {number: '15%', text: 'higher return on ad spend when utilizing unique'}
    ];
    const strategy = [
        {
            title: 'Identify Ideal Audience',
            text: 'Target millions of consumers using exclusive Amazon audiences, ensuring your ads reach the right people across Amazon sites and beyond.'
        },
        {
            title: 'Enhance Brand Safety',
            text: 'Amazon upholds strict brand safety measures to protect your reputation through quality standards and real-time bid evaluation'
        },
        {
            title: 'Access High-Quality Inventory',
            text: 'Expand your reach with exclusive cross-platform inventory, avail of a 1% fee discount, get weekly transparent reports, and tailor spend limits to optimize your budget.'
        },
        {
            title: 'Personalized Customer Approach',
            text: 'Get agile customer service from an accredited Amazon DSP team and partner manager to boost sales with effective campaigns.'
        },
        {
            title: 'Drive Conversions Strategically',
            text: 'Guide customers through awareness, consideration, and purchase stages with optimized ad strategies to increase conversions. Maximize interactions to boost sales.'
        }
    ];
    const portfolios = [
        {
            title: 'Exclusive Audience Reach',
            text: 'Target your ideal audience on and off Amazon by utilizing exclusive Amazon audiences. With 41 million unique users per month in the UK and over 100 million Prime users globally, you can connect with millions of consumers effortlessly.',
            img: portfolioPhoto_1
        },
        {
            title: 'Brand Safety Guaranteed',
            text:'Rest assured that your brand is safe with Amazon DSP\'s rigorous brand safety measures. From manual site reviews to real-time bid evaluations, Amazon ensures that your ads meet high-quality standards while safeguarding your brand reputation.',
            img: portfolioPhoto_2
        },
        {
            title: 'Premium Inventory Selection',
            text: 'Access high-quality inventory beyond Amazon\'s main website on various platforms while maintaining publisher safety through black and white lists of websites. Benefit from a 1% discount on fees, transparent weekly reports on data and spend, and flexible spend limits without being tied down to minimum spends.',
            img: portfolioPhoto_3
        },
        {
            title: 'Enhanced Customer Engagement',
            text: 'Get closer to your data and gain more control over your budget with agile and responsive customer service from our fully accredited DSP Amazon advertising team. You also have access to an Amazon partner manager who will help maximize your sales potential without unnecessary ad spend.',
            img: portfolioPhoto_4
        },
        {
            title: 'Strategic Approach for Conversion',
            text: 'Maximize your ad effectiveness with our strategic approach - from \'awareness ads\' for new audiences, \'consideration visuals\' for engaged customers, to \'purchase visuals\' for direct sales conversion. Our goal is to amplify your sales results efficiently, not just increase ad spend.',
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