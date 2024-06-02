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
    const header = 'Product launch';
    const paragraph = 'Boost your Amazon success! Let us elevate your product launch with expert strategy and support for higher sales and visibility. /or Don\'t let your products get lost in the noise. Let us help you launch your products successfully on Amazon and watch your sales soar!';
    const stats = [
        {number: 85,after:'%', text: 'increase in product placement for our clients'},
        {number: 40,after:'%', text: 'boost in traffic to product listings'},
        {number: 1.2,after:'M',before:'$', text: 'increase in sales revenue achieved through our strategies'},
        {number: 95,after:'%', text: 'rise in conversion rates for products launched using our service'}
    ];
    const strategy = [
        {
            title: 'Market Research',
            text: 'We uncover valuable insights to position your product for success.'
        },
        {
            title: 'SEO Strategy',
            text: 'We optimize your listings to rank higher and attract more customers organically.'
        },
        {
            title: 'Content Strategy',
            text: 'We develop compelling and engaging content that highlights the key features and benefits of your product, persuading potential customers to make a purchase.'
        },
        {
            title: 'Advertising Strategy',
            text: 'We leverage targeted advertising campaigns to drive sales and boost visibility.'
        },
        {
            title: 'Implementation & Monitoring',
            text: 'We execute strategies efficiently while monitoring performance to ensure maximum results.'
        }
    ];
    const portfolios = [
        {
            title: 'Market Mastery',
            text: 'Dominate Amazon with our comprehensive market research strategy. Our experts will analyze the competition, identify niche opportunities, and position your product for success. Gain a competitive edge and watch your sales soar!',
            img: portfolioPhoto_1
        },
        {
            title: 'SEO Powerhouse',
            text:'Elevate your product listings with our cutting-edge SEO strategy. Ensure maximum visibility on Amazon\'s search results and attract organic traffic like never before. Let us optimize your content and watch your rankings skyrocket!',
            img: portfolioPhoto_2
        },
        {
            title: 'Advertising Genius',
            text: 'Drive immediate sales with our tailored advertising strategy. Our team will create compelling Sponsored Products campaigns to boost initial sales and secure valuable reviews, propelling your product to the top of Amazon\'s search results.',
            img: portfolioPhoto_3
        },
        {
            title: 'Content Magic',
            text: 'Transform your product launch with our expert content strategy. From captivating product descriptions to engaging ad copy, we\'ll craft content that converts browsers into buyers. Let us tell your brand story in a way that resonates with consumers.',
            img: portfolioPhoto_4
        },
        {
            title: 'Sales Surge',
            text: ' Experience a surge in sales like never before! Benefit from higher product placement, increased traffic, boosted relevancy, amplified sales, higher conversion rates, and an enhanced buy box percentage—all designed to propel your Amazon product launch to new heights of success!',
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