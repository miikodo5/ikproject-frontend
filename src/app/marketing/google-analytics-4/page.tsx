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
    const header = 'Google Analytics 4';
    const paragraph = 'With our comprehensive Google Analytics 4 setup service, we seamlessly migrate you from UA3, create new data feeds, track codes, and customize reports. By accurately tracking traffic sources, customer behavior, conversions, and more, we enhance your business efficiency. Our experienced team ensures proper configuration and detailed analytics tailored to your needs. Choose us for quality customization and seamless integration with top advertising sources for unparalleled insights.';
    const strategy = [
        {
            title: 'Analytical Support Objectives',
            text: 'Define your goals and objectives for analytical support to lay the foundation for efficient data tracking and interpretation.'
        },
        {
            title: 'Technical Specification Preparation',
            text: 'We prepare technical specifications for data transfer, including dataLayer, event transfer via Measurement Protocol, and UserID transfers for web and applications.'
        },
        {
            title: 'Basic Google Analytics Implementation',
            text: 'Implement the basic setup of Google Analytics to start collecting valuable data that can be used to enhance your business strategies.'
        },
        {
            title: 'User Behavior Tracking with Google Tag Manager',
            text: 'We help you track user behavior events efficiently using Google Tag Manager to gain deeper insights into user interactions on your website.'
        },
        {
            title: 'Custom Reports and Visualization',
            text: 'Utilize advanced tools such as BigQuery, Looker Studio, Power BI, and Tableau to create custom reports, metrics, and visualizations in the GA4 interface.'
        }
    ];
    const portfolios = [
        {
            title: 'Streamlined Migration Process',
            text: 'Our comprehensive service covers the seamless transition from UA3 to GA4, ensuring all your data is accurately migrated and integrated for a hassle-free setup.',
            img: portfolioPhoto_1
        },
        {
            title: 'Enhanced Tracking Capabilities',
            text:'By creating new data feeds and adding tracking codes, we empower your business to track customer behavior, mobile traffic, content interactions, and more with pinpoint accuracy.',
            img: portfolioPhoto_2
        },
        {
            title: 'Customized Reporting Solutions',
            text: 'We go beyond standard reports by customizing queries in BigQuery, visualizing data in Looker Studio, and providing tailored reports to meet your unique business needs.',
            img: portfolioPhoto_3
        },
        {
            title: 'Elevated Business Efficiency',
            text: 'A properly configured GA4 not only offers more detailed analytics but also ensures enhanced tracking of traffic sources, customer behavior, conversions, and mobile traffic - all crucial for optimizing your business performance.',
            img: portfolioPhoto_4
        },
        {
            title: 'Expert Guidance Every Step of the Way',
            text: 'With our experience in high-load projects and expertise in Google Analytics customization, we are your trusted partner for implementing GA4 effectively to drive growth and success.',
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