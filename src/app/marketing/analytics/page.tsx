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
    const header = 'Marketing Analytics Services';
    const paragraph = 'Struggling with overwhelming marketing data and inefficient processes? Lack the insights needed to make informed decisions for your business growth? Information overload, scattered data sources, and underutilized sales channels can hinder your success, leaving you behind in the competitive market. IK Project\'s Marketing Analytics Services offer end-to-end BI analytics solutions that streamline data collection, analysis, and visualization to empower businesses with actionable insights. From system setup to continuous support, unlock the power of analytics to optimize operations, boost profitability, and reach strategic goals effortlessly!';
    const strategy = [
        {
            title: 'Business Analysis',
            text: 'We start by delving into your business operations to determine the key requirements for effective analytics implementation.'
        },
        {
            title: 'Tool Selection and Implementation',
            text: 'We identify and deploy the most suitable tools that align with your business goals for seamless integration and data management.'
        },
        {
            title: 'Data Analysis and Recommendations Formulation',
            text: 'We analyze the received data comprehensively to craft tailored recommendations that drive growth and efficiency in your project.'
        },
        {
            title: 'System Setup and Data Handling',
            text: 'We handle all aspects of system setup, including code preparation, data offloading connectors, cloud deployment, SQL operations, and visualization preparation.'
        },
        {
            title: 'Ongoing Support and Optimization',
            text: 'We provide continuous support post-implementation to ensure your analytics system operates smoothly while optimizing it for peak performance based on evolving business needs.'
        }
    ];
    const portfolios = [
        {
            title: 'Enhance Business Efficiency',
            text: 'Our Marketing Analytics services automate data collection from various sources and provide comprehensive reports, dashboards, and graphs showcasing key marketing KPIs. Evaluate business processes, optimize costs, and make informed decisions to enhance efficiency.',
            img: portfolioPhoto_1
        },
        {
            title: 'Empower Strategic Decision-Making',
            text:'Leverage our BI analytics to identify market opportunities, optimize product development, and enhance competitiveness. Make strategic decisions based on actionable insights derived from detailed analytical data.',
            img: portfolioPhoto_2
        },
        {
            title: 'Tailored Solutions for Every Business',
            text: 'We cater to businesses with multiple sales and marketing sources, startups in need of detailed marketing analysis, or companies seeking to analyze customer acquisition channels. Our service is designed to meet the diverse needs of businesses at every stage.',
            img: portfolioPhoto_3
        },
        {
            title: 'Simplify Complex Analytical Processes',
            text: 'We take care of setting up analytics systems, preparing technical specifications, offloading data through connectors, deploying solutions in cloud services, and providing ongoing support. Let us handle the technicalities while you focus on growing your business.',
            img: portfolioPhoto_4
        },
        {
            title: 'Data-Driven Recommendations for Success',
            text: 'Rely on our expertise to analyze your business requirements effectively, implement the right tools, interpret data insights accurately, and provide actionable recommendations tailored to drive success in your projects. Work with us towards achieving your strategic goals seamlessly.',
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