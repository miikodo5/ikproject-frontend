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
    const header = 'Web Analytics Services';
    const paragraph = 'Unlock the power of data with our Web Analytics Services for Business. From Google Analytics setup to custom BI solutions, we handle it all. Our team will help you gather, analyze, and visualize crucial data for income growth and enhanced user experience. With expertise in cutting-edge tools like Google BigQuery and Power Bi, we transform raw data into actionable insights. Elevate your business with data-driven decisions today!';
    const strategy = [
        {
            title: 'Consultation and Planning',
            text: 'Our expert team will work closely with you to understand your business goals, identify key metrics, and develop a customized analytics strategy tailored to your needs.'
        },
        {
            title: 'Implementation and Setup',
            text: 'We set up essential tools like Google Analytics and Google Tag Manager to ensure accurate data collection for actionable insights.'
        },
        {
            title: 'Custom Analytics Solutions',
            text: 'Our data specialists will tailor analytics solutions and business intelligence systems to your specific needs, offering detailed analysis and visualization of key data points.'
        },
        {
            title: 'Data Analysis and Interpretation',
            text: 'We analyze data from advertising accounts and CRM systems to provide insights that boost revenue and enhance average order value with actionable recommendations.'
        },
        {
            title: 'Reporting and Visualization',
            text: 'We create visually engaging dashboards with tools like Google Data Studio, Power BI, or Tableau to help you interpret complex data and make impactful data-driven decisions.'
        }
    ];
    const portfolios = [
        {
            title: 'Data-Driven Decision Making (DDDM)',
            text: 'Embrace the future of business intelligence with our Standard Digital Analytics Setup Services that include Google Analytics setup, e-commerce enhancements, and more. Make informed decisions backed by real-time data insights for maximizing your online presence and customer engagement.',
            img: portfolioPhoto_1
        },
        {
            title: 'Customized Analytical Solutions Tailored to Your Needs',
            text:'Redefine your analytics game with our pre-stage consultation services that help you design a robust data framework. From data import to transformation and visualization, we create bespoke BI systems using cutting-edge tools like Google Data Studio, Power BI, and Tableau, ensuring you have actionable insights at your fingertips.',
            img: portfolioPhoto_2
        },
        {
            title: 'Problem-Solving through Advanced Data Analytics',
            text: 'Dive deep into your data challenges with our team of experts who specialize in solving standard analytics tasks and developing custom solutions. Witness tangible results such as income growth and increased average order value by leveraging our expertise in integrating various data sources like advertising accounts, CRM systems, and more.',
            img: portfolioPhoto_3
        },
        {
            title: 'Harnessing the Power of Comprehensive Data Sources',
            text: 'Our services encompass a wide range of data sources including advertising accounts, web analytics systems, CRM platforms, accounting software, and inventory management systems. By leveraging this diverse dataset, we provide actionable insights that drive strategic decision-making for your business.',
            img: portfolioPhoto_4
        },
        {
            title: 'Cutting-Edge Tools for Robust Analytical Solutions',
            text: 'Leverage top-tier services and tools for your analytical needs including leading data storage solutions like Google BigQuery and MySQL, advanced data processing capabilities using R and Python, as well as state-of-the-art visualization tools such as Microsoft Power Bi and Tableau to bring your data to life.',
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