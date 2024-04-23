import React from 'react';
import PortfolioHeader from "@/app/(portfolios)/_components/header";
import PortfolioStrategy from "@/app/(portfolios)/_components/strategy";
import PortfolioCards from "@/app/(portfolios)/_components/portfolio";
import HomeContact from "@/app/(home)/_components/contact";
import HomeFooter from "@/app/(home)/_components/footer";
import Portfolio2Hero from "@/app/(portfolios)/portfolio2/_components/hero";
import portfolioPhoto_1 from "@images/portfolio-1.png";
import portfolioPhoto_2 from "@images/portfolio-2.png";
import portfolioPhoto_3 from "@images/portfolio-3.png";
import portfolioPhoto_4 from "@images/portfolio-4.png";
import portfolioPhoto_5 from "@images/portfolio-5.png";

const PortfolioPage = () => {
    const header = 'Integration of sites and programs';
    const paragraph = 'Integrating different sites and programs can be a complex and time-consuming task, preventing you from focusing on your core business activities. Inefficient integration can lead to data silos, lost productivity, and missed opportunities, ultimately hindering your company\'s growth and competitiveness. Our Python-based integration service seamlessly connects your sites and programs, automating tasks across Discord, Telegram, web-scraping, parsing, and browser processes, saving you time and resources to drive your business forward.';
    const strategy = [
        {
            title: 'Discovery',
            text: 'Our experts start by understanding your business challenges and integration needs. We identify your specific pain points and key integration objectives.'
        },
        {
            title: 'Technology Assessment',
            text: 'We analyze your technology stack, identify optimal integration points, and evaluate compatibility, feasibility, and potential roadblocks to ensure a seamless integration process.'
        },
        {
            title: 'Custom Development',
            text: 'Our Python developers create custom solutions tailored to your needs. We automate tasks, build bots, and perform web scraping and parsing efficiently.'
        },
        {
            title: 'Implementation and Testing',
            text: 'We implement and thoroughly test integration solutions to ensure they function as intended. Our quality assurance processes guarantee seamless system integration.'
        },
        {
            title: 'Ongoing Support and Maintenance',
            text: 'Even after integration, we provide ongoing support, troubleshooting, and maintenance to keep your systems running smoothly. This allows you to focus on growing your business.'
        }
    ];
    const portfolios = [
        {
            title: 'Discord & Telegram Bots',
            text: 'Leverage the power of Python to build customized bots for your Discord or Telegram communities. Automate moderation tasks, create interactive commands, and engage your audience like never before. Our experts will work with you to design and deploy feature-rich bots that elevate your platform\'s functionality and user experience.',
            img: portfolioPhoto_1
        },
        {
            title: 'Web Scraping Expertise',
            text:'Unlock a wealth of data from any website with our advanced web scraping capabilities. Whether you need to extract product information, monitor competitor pricing, or gather market insights, our Python-driven scraping solutions are tailored to your specific requirements. Enjoy reliable, scalable data extraction that fuels your business decisions.',
            img: portfolioPhoto_2
        },
        {
            title: 'Parsing Made Easy',
            text: 'From structured data formats like XML and JSON to complex text-based documents, our Python parsing services empower you to extract, transform, and leverage information with precision. Streamline your data processing workflows, eliminate manual effort, and gain actionable insights to drive your organization forward',
            img: portfolioPhoto_3
        },
        {
            title: 'Browser Automation Mastery',
            text: 'Automate repetitive browser-based tasks with our Python-powered solutions. Whether it\'s filling out forms, navigating websites, or interacting with web applications, our experts will create custom automation scripts that save you time, reduce errors, and boost productivity across your organization.',
            img: portfolioPhoto_4
        },
        {
            title: 'Tailored to Your Needs',
            text: 'Our Python services are designed to be flexible and adaptable to your unique requirements. We work closely with you to understand your challenges, goals, and constraints, then craft innovative solutions that deliver tangible results. Trust our team of skilled Python developers to unlock the full potential of automation and drive your business forward.',
            img: portfolioPhoto_5
        },
    ]
    return (
        <div>
            <PortfolioHeader color={'black'}/>
            <Portfolio2Hero header={header} paragraph={paragraph}/>
            <PortfolioStrategy strategy={strategy}/>
            <PortfolioCards portfolios={portfolios}/>
            <HomeContact/>
            <HomeFooter/>
            
        </div>
    );
};

export default PortfolioPage;