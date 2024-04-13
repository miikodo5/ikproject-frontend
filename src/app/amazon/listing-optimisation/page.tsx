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
    const header = 'Listing optimisation';
    const paragraph = 'Struggling to boost Amazon sales? Let our experts optimize your listings for maximum visibility, trust, and sales growth.';
    const stats = [
        {number: '86%', text: 'of consumers willing to pay more for a product from a trusted brand'},
        {number: '95%', text: 'Success rate of our targeted keyword research'},
        {number: '7', text: 'Modules available for creating high-resolution engaging A+ content'},
        {number: '100%', text: 'Guaranteed increase in discoverability and sales'}
    ];
    const strategy = [
        {
            title: 'Research Phase',
            text: 'At our company, we conduct in-depth market and competitor analysis to identify trends and gaps in your market. We utilize a two-year forecast for future planning with confidence.'
        },
        {
            title: 'Keyword Strategy Development',
            text: 'We generate targeted keywords to optimize search visibility and attract relevant traffic for your business.'
        },
        {
            title: 'Content Enhancement',
            text: 'Our team enhances product listings and engages consumers with compelling copy, captivating images, and engaging videos to boost your brand\'s visibility.'
        },
        {
            title: 'A+ Content Creation',
            text: 'We develop up to 7 high-resolution content modules to enhance brand awareness, share your brand\'s story, and improve customer experience.'
        },
        {
            title: 'Optimization & Analysis',
            text: 'We implement SEO techniques, monitor performance analytics, and refine strategies for optimal discoverability and sales conversion on your behalf.'
        }
    ];
    const portfolios = [
        {
            title: 'Enhanced Product Visibility',
            text: 'Our team works closely with brands to strategically optimize their Amazon product listings, ensuring maximum visibility across search engines. By implementing SEO strategies and targeted keyword research, we enhance your listings to reach a wider audience and drive more sales.',
            img: portfolioPhoto_1
        },
        {
            title: 'Compelling Content Creation',
            text:'Elevate your product descriptions with our engaging copywriting services. From crafting persuasive bullet points to creating captivating product videos, we help you stand out from the competition and attract potential customers with compelling content that drives conversions.',
            img: portfolioPhoto_2
        },
        {
            title: 'Brand Trust Building',
            text: 'Gain consumer trust and loyalty by investing in high-quality content for your Amazon listings. With our A+ content creation services, including enhanced brand storytelling and immersive visuals, you can showcase your brand\'s unique identity and build credibility among customers looking for trusted products.',
            img: portfolioPhoto_3
        },
        {
            title: 'Advertising Strategy Development',
            text: 'Take your Amazon sales to new heights with our tailored advertising strategies designed to boost visibility and drive targeted traffic to your product listings. Our team of experts will craft a comprehensive advertising plan to maximize your ROI and increase sales on the platform.',
            img: portfolioPhoto_4
        },
        {
            title: 'Comprehensive Listing Analysis',
            text: 'Get a detailed analysis of your current Amazon listings and unlock potential growth opportunities. Our team will assess your listings for optimization potential, identifying key areas for improvement to enhance discoverability, conversion rates, and overall sales performance on the platform.',
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