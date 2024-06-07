import React from 'react';
import PortfolioHeader from "@/app/(portfolios)/_components/header";
import PortfolioStrategy from "@/app/(portfolios)/_components/strategy";
import PortfolioCards from "@/app/(portfolios)/_components/portfolio";
import HomeContact from "@/app/(home)/_components/contact";
import HomeFooter from "@/app/(home)/_components/footer";
import AmazonHero from "@/app/(portfolios)/amazon/_components/hero";


import heroImg1 from '@images/amazon/hero51.png';
import heroImg2 from '@images/amazon/hero52.png';
import portfolioPhoto_1 from "@images/portfolio-1.png";
import portfolioPhoto_2 from "@images/portfolio-2.png";
import portfolioPhoto_3 from "@images/portfolio-3.png";
import portfolioPhoto_4 from "@images/portfolio-4.png";
import portfolioPhoto_5 from "@images/portfolio-5.png";
const PortfolioPage = () => {
    const header = 'Amazon Copywriting Services';
    const paragraph = 'Elevate your product game with our expert Amazon copywriters. Maximize product visibility, boost traffic, and skyrocket sales with captivating, SEO-optimized listings.';
    const stats = [
        {number: 78,after:'%', text: 'increase in product placement effectiveness'},
        {number: 42,after:'%', text: 'rise in website traffic conversion rates'},
        {number: 91,after:'%', text: 'growth in buy box percentage'},
        {number: 65,after:'%', text: 'surge in search engine visibility'}
    ];
    const strategy = [
        {
            title: 'Analyze',
            text: 'We analyze your ecommerce market size, segmentation, and key drivers to identify trends. Utilize a two-year forecast for future planning with confidence.'
        },
        {
            title: 'Research',
            text: 'We delve into insights on your competition, keywords, and market trends to craft compelling and SEO-optimized product listings that outshine the rest.'
        },
        {
            title: 'Write & Optimize',
            text: 'We create engaging copy for titles, bullet points, and descriptions that highlight your product\'s unique selling points and persuade customers to click "Add to Cart" effortlessly.'
        },
        {
            title: 'Enhance with A+ Content',
            text: 'We elevate your brand story with captivating A+ content below the fold, showcasing the benefits of your products and boosting consumer trust in your brand identity.'
        },
        {
            title: 'Track & Refine',
            text: 'We monitor performance metrics, adjust copy accordingly, and witness improved Amazon rankings together to boost traffic, sales, and buy box percentage as partners in success.'
        }
    ];
    const portfolios = [
        {
            title: 'Expert Amazon Copywriters',
            text: 'Our team of seasoned Amazon copywriting experts is dedicated to crafting engaging and persuasive product descriptions that drive sales on the e-commerce giant. From titles to bullet points, product descriptions, and A+ content, we cover it all with finesse and expertise.',
            img: portfolioPhoto_1
        },
        {
            title: 'Optimized Product Listings',
            text:'Elevate your product rankings with our meticulously crafted copy that enhances product visibility and relevance on Amazon. Benefit from higher placement, increased traffic, boosted sales, improved conversion rates, and a higher buy box percentage by leveraging our strategic copywriting services.',
            img: portfolioPhoto_2
        },
        {
            title: 'Comprehensive Content Strategy',
            text: 'Utilizing every available space on your Amazon listing, we strategically place compelling content above the fold (B+ content) to showcase your product\'s unique selling points succinctly. Below the fold (A+ content), we delve deeper into product details and brand storytelling to captivate potential buyers.',
            img: portfolioPhoto_3
        },
        {
            title: 'SEO-Friendly Copy',
            text: 'Our copy isn\'t just tailored for Amazon; it\'s optimized for search engines too. Maximize your sales potential by reaching customers not only within the Amazon ecosystem but also through popular search engines like Google or Bing. Our SEO-friendly approach ensures enhanced visibility across platforms.',
            img: portfolioPhoto_4
        },
        {
            title: 'Tailored Amazon Copywriting Solutions',
            text: 'Discover how our experienced Amazon product listing copywriters can transform your listings into compelling sales tools. Whether you need captivating titles, persuasive bullet points, detailed product descriptions, or engaging A+ content, our team is equipped to meet your specific needs and drive results.',
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