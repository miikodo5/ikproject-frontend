import React from 'react';
import PortfolioHeader from "@/app/(portfolios)/_components/header";
import PortfolioStrategy from "@/app/(portfolios)/_components/strategy";
import PortfolioCards from "@/app/(portfolios)/_components/portfolio";
import HomeContact from "@/app/(home)/_components/contact";
import HomeFooter from "@/app/(home)/_components/footer";
import MarketingHero from "@/app/(portfolios)/marketing/_components/hero";
import portfolioPhoto_1 from "@images/portfolio-1.png";
import portfolioPhoto_2 from "@images/portfolio-2.png";
import portfolioPhoto_3 from "@images/portfolio-3.png";
import portfolioPhoto_4 from "@images/portfolio-4.png";
import portfolioPhoto_5 from "@images/portfolio-5.png";

const PortfolioPage = () => {
    const header = 'Social Media Marketing';
    const paragraph = 'Transform your business with our SMM Social Media Marketing service! Drive sales, boost website traffic, and elevate brand loyalty. From strategy development to targeted ads, we\'ve got you covered. Ideal for online stores, blogs, personal brands, corporate websites, and more. Unleash the power of social media today!';
    const strategy = [
        {
            title: 'Influencer Discovery',
            text: 'We identify key opinion leaders that align with your brand values and target demographic to ensure effective influencer partnerships'
        },
        {
            title: 'Campaign Planning',
            text: 'We collaborate with influencers to create engaging content that resonates with their audience while promoting your brand authentically.'
        },
        {
            title: 'Content Creation & Distribution',
            text: 'We assist in developing creative content strategies in the form of posts or stories for maximum impact across different social media platforms.'
        },
        {
            title: 'Performance Analysis',
            text: 'We monitor the campaign\'s effectiveness through analytics data and make data-driven decisions to optimize future influencer collaborations.'
        },
        {
            title: 'Reporting & Recommendations',
            text: 'We provide detailed reports on the campaign\'s performance supported by actionable insights for continual improvement in influencer marketing efforts.'
        }
    ];
    const portfolios = [
        {
            title: 'Increase Sales Channels',
            text: 'Expand your sales horizons with our Service SMM. By leveraging targeted ads on platforms like Facebook and Instagram, you can create additional avenues for sales, reaching customers where they spend their time online.',
            img: portfolioPhoto_1
        },
        {
            title: 'Boost Website Traffic',
            text:'Drive traffic to your website through strategic social media campaigns. Our team will help you craft engaging content that resonates with your target audience, leading them straight to your online doorstep.',
            img: portfolioPhoto_2
        },
        {
            title: 'Enhance Brand Loyalty',
            text: 'Nurture brand loyalty by increasing awareness and engagement on social media. With our tailored SMM strategies, you can connect with your audience on a deeper level, fostering lasting relationships that keep customers coming back for more.',
            img: portfolioPhoto_3
        },
        {
            title: 'Cut-Through Advertising Noise',
            text: 'Promote your brand effectively with targeted ads on Facebook and Instagram. We\'ll help you create impactful campaigns that stand out in the crowded digital landscape, ensuring maximum visibility for your brand.',
            img: portfolioPhoto_4
        },
        {
            title: 'Tailored Solutions for Diverse Industries',
            text: 'Whether you\'re running an online store, managing a blog, building a personal brand, or operating in the service industry — our Service SMM is designed to cater to businesses of all sizes and types. Let us tailor our services to meet your unique needs and goals.',
            img: portfolioPhoto_5
        },
    ]
    return (
        <div>
            <PortfolioHeader color={'black'} laptopColor={'white'}/>
            <MarketingHero header={header} paragraph={paragraph}/>
            <PortfolioStrategy strategy={strategy}/>
            <PortfolioCards portfolios={portfolios}/>
            <HomeContact/>
            <HomeFooter/>
            
        </div>
    );
};

export default PortfolioPage;