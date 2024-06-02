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
    const header = 'Premium A+ Content';
    const paragraph = 'Don\'t let your products blend in. Upgrade to Premium A+ for captivating visuals, interactive modules, and a 15% sales boost!';
    const stats = [
        {number: 12,after:'%', text: 'increase in conversion rates'},
        {number: 70,after:'%', text: 'user engagement increased'},
        {number: 50,after:'%', text: 'more clicks on embedded high-definition videos'},
        {number: 25,after:'%', text: 'higher click-through rate across all product ranges'}
    ];
    const strategy = [
        {
            title: 'Analysis & Consultation',
            text: 'Work with our expert team to analyze your current content strategy and see how Premium A+ can boost your brand\'s presence and sales on Amazon.'
        },
        {
            title: 'Design & Development',
            text: 'Our specialists create visually stunning, interactive content to uniquely showcase your products, such as high-definition videos and comparison tables.'
        },
        {
            title: 'Implementation & Optimization',
            text: 'Integrate Premium A+ features into your product listings to boost engagement and conversion rates for your target audience seamlessly.'
        },
        {
            title: 'Monitoring & Analytics',
            text: 'We analyze your Premium A+ content to offer data-driven strategies for enhancing your brand\'s success on Amazon. Leave it to us.'
        },
        {
            title: 'Growth & Results',
            text: 'Boost sales by up to 15% with Premium A+ content, experiencing its transformative impact on brand SEO, conversions, and sales performance.'
        }
    ];
    const portfolios = [
        {
            title: 'Interactive Hotspot Modules',
            text: 'Engage Customers Like Never Before Utilize interactive hotspot modules to showcase key product benefits with pinpoint accuracy. Hover over areas of interest for detailed insights.',
            img: portfolioPhoto_1
        },
        {
            title: 'Enhanced Visuals with Wide Content Width',
            text:'Capture Attention Instantly Expand the visual impact of your listings with premium banners, scrolling imagery, and wider content width (1464px) for a more engaging and informative shopping experience.',
            img: portfolioPhoto_2
        },
        {
            title: 'Embedded High Definition Videos',
            text: 'Elevate Product Presentations Stand out from the competition with embedded high-definition videos that offer a more immersive and compelling user experience. Go full-screen for maximum impact!',
            img: portfolioPhoto_3
        },
        {
            title: 'Comparison Tables for Informed Decisions',
            text: 'Simplify Product Comparisons Empower customers to make informed choices with interactive comparison tables that highlight key features across your product range. Choose from a variety of styles for a visually appealing display.',
            img: portfolioPhoto_4
        },
        {
            title: 'Clickable Q&A Section for Customer Engagement',
            text: 'Address Customer Queries Effectively Showcase your expertise and build trust with a clickable dropdown question and answer section that addresses customers\' most pressing inquiries directly on your product page.',
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