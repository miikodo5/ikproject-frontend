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
    const header = 'Amazon A+ Content';
    const paragraph = 'Elevate your Amazon game with our A+ services - boost sales, engage customers, and stand out from the competition!';
    const stats = [
        {number: '20%', text: 'Increase in Sales'},
        {number: '30%', text: 'Conversion Rate Boost'},
        {number: '25%', text: 'Positive Reviews Uplift'},
        {number: '40%', text: 'Reduction in Returns'}
    ];
    const strategy = [
        {
            title: 'Discovery',
            text: 'At our company, we uncover insights and understand your brand\'s unique selling proposition to create a solid foundation for our A+ content strategy.'
        },
        {
            title: 'Content Evaluation',
            text: 'We analyze your current content to identify gaps and opportunities for improvement, ensuring it aligns with Amazon\'s best practices.'
        },
        {
            title: 'Creative Development',
            text: 'We create engaging text, banners, and photography to visually convey the value of your products and boost conversions.'
        },
        {
            title: 'A/B Testing',
            text: 'We enhance A+ content through rigorous A/B tests for maximum impact on sales and customer engagement.'
        },
        {
            title: 'Implementation & Launch',
            text: 'We enhance Amazon A+ content with our expert team to boost sales and brand visibility through branding expertise and technical knowledge.'
        }
    ];
    const portfolios = [
        {
            title: 'Enhanced Sales Boost (Conversion Wizard)',
            text: 'Our Amazon A+ content is meticulously designed to amplify your sales figures by 3-10%. Let us weave the magic that turns visitors into customers and clicks into conversions.',
            img: portfolioPhoto_1
        },
        {
            title: 'SEO Supercharger (Discoverability Dynamo)',
            text:'Elevate your product visibility with our SEO-optimized Amazon A+ content. Stand out from the crowd and make it easier for potential customers to find your products online.',
            img: portfolioPhoto_2
        },
        {
            title: 'Visual Storytelling (Brand Activator)',
            text: 'Let your products speak for themselves! Our creative team will visually communicate the benefits of your products through captivating banners and photography, driving brand activation and customer engagement.',
            img: portfolioPhoto_3
        },
        {
            title: 'Conversion Catalyst (Concern Resolver)',
            text: 'Address your customers\' concerns head-on with benefit-rich text that aids conversion. Our A+ content is designed to overcome objections, instill trust, and guide shoppers towards making a purchase decision.',
            img: portfolioPhoto_4
        },
        {
            title: 'Upsell Opportunities Galore (Cross-Promotion Pro)',
            text: 'Leverage our expertise in cross-promoting product lines and creating upsell opportunities within your Amazon A+ content. Maximize each customer interaction by showcasing related products and encouraging additional purchases.',
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