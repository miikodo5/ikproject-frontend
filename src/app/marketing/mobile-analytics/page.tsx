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
    const header = 'Mobile Customize Optimization';
    const paragraph = 'Are you struggling to understand your mobile app users\' behaviors and conversions? Our service, Customizing Analytics for Mobile Applications, is the solution you need. By implementing advanced analytics tools, we track crucial metrics like app conversions, cost-per-install, and ROI. Gain insights into user engagement and optimize your app\'s performance with our tailored analytics services for Android and iOS apps. Boost profitability today!';
    const strategy = [
        {
            title: 'Terms of Reference for SDK Installation',
            text: 'We kickstart the process by ensuring a seamless installation of the basic SDK and CUID tracking on both iOS and Android platforms to capture essential user data.'
        },
        {
            title: 'Event Tracking Implementation',
            text: 'To better understand user behavior, set up event tracking on both iOS and Android. This allows you to monitor key interactions in your app for analysis.'
        },
        {
            title: 'Dynamic Links Integration',
            text: 'Enhance user experience by using dynamic links on iOS and Android to improve navigation and boost engagement in your app ecosystem.'
        },
        {
            title: 'Advertising Office Integration',
            text: 'We ensure seamless integration with advertising platforms to maximize your app\'s visibility and performance on iOS and Android.'
        },
        {
            title: 'Performance Optimization & Monetization Strategy',
            text: 'We analyze user data, monitor conversions, identify effective marketing channels, and optimize app features to enhance business profitability with a comprehensive strategy.'
        }
    ];
    const portfolios = [
        {
            title: 'Installation Made Easy',
            text: 'Our service starts with the seamless integration of our basic SDK for both iOS and Android apps, ensuring accurate tracking of users with unique CUIDs. With minimal effort, you\'ll have access to crucial data on user behavior that can drive informed decisions.',
            img: portfolioPhoto_1
        },
        {
            title: 'Track Every Interaction',
            text:'Dive deep into user engagement with our event tracking feature for iOS and Android platforms. Understand how users interact with your app, identify popular features, and uncover areas for improvement to enhance user experience and drive conversions.',
            img: portfolioPhoto_2
        },
        {
            title: 'Drive User Engagement with Dynamic Links',
            text: 'Elevate your app\'s reach and engagement by implementing dynamic links for both iOS and Android. Increase user retention by seamlessly directing users to specific in-app content or promotions, optimizing their journey within your application.',
            img: portfolioPhoto_3
        },
        {
            title: 'Optimize Marketing Efforts',
            text: 'We ensure seamless integration with advertising platforms to validate the effectiveness of implemented strategies on both iOS and Android apps. Identify successful campaigns, track user acquisition costs, and fine-tune marketing efforts to maximize ROI and app downloads.',
            img: portfolioPhoto_4
        },
        {
            title: 'Monetize Your Insights',
            text: 'Empower your business profitability by leveraging detailed analytics on user behavior patterns, conversion events, channel performance, and feature usage insights. Identify monetization opportunities within your app based on real-time data analysis to drive revenue growth effectively.',
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