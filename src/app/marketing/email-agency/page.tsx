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
    const header = 'Email Marketing Agency';
    const paragraph = 'Our Email Marketing Agency offers a comprehensive solution to all your email marketing needs. From database replenishment to customer winback strategies, we provide expert services that drive results. With a focus on cost-effective tools, high conversion rates, and personalized campaigns tailored to your audience\'s needs, we help you achieve your business objectives seamlessly. Choose us for efficient email marketing that maximizes ROI and boosts your brand\'s online presence.';
    const strategy = [
        {
            title: 'Database Refinement',
            text: 'Our experts work tirelessly to ensure your database is always up-to-date with potential leads, ensuring a steady stream of new opportunities for your business.'
        },
        {
            title: 'Sales Boosting',
            text: 'We craft compelling email campaigns that drive conversions and increase sales volume, helping you achieve your revenue goals efficiently and effectively.'
        },
        {
            title: 'Customer Conversion',
            text: 'Through targeted strategies and personalized content, we guide potential leads through the conversion funnel, turning them into loyal customers for your business.'
        },
        {
            title: 'Repeat Sales & Loyalty',
            text: 'We implement strategies that nurture customer relationships, boost repeat sales, and enhance customer loyalty, ensuring long-term success for your brand.'
        },
        {
            title: 'Customer Re-engagement',
            text: 'We employ innovative re-engagement tactics to win back inactive customers, revitalize their interest in your brand, and drive them back to making purchases.'
        }
    ];
    const portfolios = [
        {
            title: 'Database Enrichment: Fueling Your Growth',
            text: 'Our service actively replenishes your potential customer database, ensuring your outreach is always fresh and effective. By continuously updating and expanding your contacts, we help you reach new audiences and drive growth like never before.',
            img: portfolioPhoto_1
        },
        {
            title: 'Sales Boosting Strategies: Turning Prospects into Profits',
            text:'We specialize in increasing sales volume and boosting revenue through targeted email campaigns that convert prospects into loyal customers. With our proven methods, watch as your sales soar and your bottom line flourishes.',
            img: portfolioPhoto_2
        },
        {
            title: 'Customer Lifecycle Management: Maximizing Customer Value',
            text: 'We focus on boosting repeat sales, increasing customer lifetime value, and re-engaging inactive customers to maximize the potential of every lead in your database. Our tailored approach ensures that each customer interaction adds value to both parties.',
            img: portfolioPhoto_3
        },
        {
            title: 'Brand Awareness & Loyalty Building: Strengthen Your Market Presence',
            text: 'Our email marketing services are designed to increase brand awareness and foster customer loyalty. Through engaging content and targeted strategies, we help you stand out in a crowded marketplace and create lasting relationships with your audience.',
            img: portfolioPhoto_4
        },
        {
            title: 'Conversion-Driven Campaigns: Achieving Remarkable Results',
            text: 'Experience the power of personalized email campaigns that drive high conversion rates with our expertly crafted strategies. From customer segmentation to win-back initiatives, we use data-driven insights to deliver exceptional results for your business.',
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