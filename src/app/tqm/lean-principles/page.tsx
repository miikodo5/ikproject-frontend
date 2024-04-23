import React from 'react';
import PortfolioHeader from "@/app/(portfolios)/_components/header";
import PortfolioStrategy from "@/app/(portfolios)/_components/strategy";
import PortfolioCards from "@/app/(portfolios)/_components/portfolio";
import HomeContact from "@/app/(home)/_components/contact";
import HomeFooter from "@/app/(home)/_components/footer";
import PortfolioHero from "@/app/(portfolios)/portfolio/_components/hero";
import portfolioPhoto_1 from "@images/portfolio-1.png";
import portfolioPhoto_2 from "@images/portfolio-2.png";
import portfolioPhoto_3 from "@images/portfolio-3.png";
import portfolioPhoto_4 from "@images/portfolio-4.png";
import portfolioPhoto_5 from "@images/portfolio-5.png";

const PortfolioPage = () => {
    const header = 'Lean principles';
    const paragraph = 'Managing complex projects carries risks of budget overruns, missed deadlines, and failed deliverables. Traditional project management methods struggle to adapt to changing requirements and minimize waste. Mismanaging projects can waste time, money, and resources. Businesses need a more agile, efficient approach to project management to stay competitive and achieve successful outcomes. Our Lean project management service applies proven principles to streamline projects, reduce waste, and drive continuous improvement. This enables faster time-to-market, lower costs, and higher customer satisfaction while adapting to change.';

    const stats = [
        {number: '98%', text: 'reduction in project planning time'},
        {number: '75%', text: 'increase in project success rate'},
        {number: '45%', text: 'decrease in project costs'},
        {number: '92%', text: 'customer satisfaction'}
    ];
    const strategy = [
        {
            title: 'Stakeholder Alignment',
            text: 'We engage all stakeholders to understand their needs and align project goals, fostering a collaborative environment.'
        },
        {
            title: 'Value Stream Mapping',
            text: 'We analyze the project workflow to identify and eliminate waste, optimizing processes for maximum efficiency.'
        },
        {
            title: 'Continuous Improvement',
            text: 'We implement a culture of learning and experimentation, continuously refining the project approach based on feedback.'
        },
        {
            title: 'Effective Communication',
            text: 'We facilitate transparent, cross-functional communication to ensure everyone is informed and aligned on project progress.'
        },
        {
            title: 'Simplification',
            text: 'We focus on creating a minimum viable project, streamlining processes and eliminating unnecessary complexity.'
        }
    ];
    const portfolios = [
        {
            title: 'Lean Foundations',
            text: 'At the core of our approach are the six essential lean principles: serving people, creating value and eliminating waste, building knowledge and continuous improvement, applying systems thinking, fostering effective communication and collaboration, and simplifying processes. By adhering to these principles, we help you streamline your operations, reduce costs, and drive sustainable growth.',
            img: portfolioPhoto_1
        },
        {
            title: 'Lean Startup Methodology',
            text:'Our service also incorporates the key tenets of the lean startup methodology, including building a minimum viable product, deploying continuously, conducting split-testing, implementing KPIs, embracing pivots, accounting for innovations, and following the build-measure-learn cycle. This agile approach allows you to rapidly validate your ideas, optimize your offerings, and minimize risks associated with complex, high-stakes projects.',
            img: portfolioPhoto_2
        },
        {
            title: 'Risk Mitigation Strategies',
            text: 'Every project, especially those that are complex and costly, carries significant risks – from missed launch deadlines to budget miscalculations and changing market conditions. We provide a suite of tools and frameworks, such as the Business Model Canvas, Lean Canvas, Value Proposition Canvas, and Mission Model Canvas, to help you meticulously plan, minimize errors, and reduce upfront investments, ensuring your venture\'s success from the outset.',
            img: portfolioPhoto_3
        },
        {
            title: 'Personalized Guidance',
            text: 'Our team of experts works closely with you to tailor our lean-based solutions to your unique business needs. We provide personalized guidance, share best practices, and equip you with the knowledge and resources necessary to implement lean principles effectively, empowering you to navigate the challenges of modern business with confidence and agility.',
            img: portfolioPhoto_4
        },
        {
            title: 'Proven Results',
            text: 'By embracing our lean-driven approach, our clients have achieved remarkable results, including improved operational efficiency, reduced costs, enhanced customer satisfaction, and accelerated growth. Trust us to be your partner in navigating the complexities of your industry and unlocking your full potential for long-term success.',
            img: portfolioPhoto_5
        },
    ];
    return (
        <div>
            <PortfolioHeader color={'white'}/>
            <PortfolioHero header={header} paragraph={paragraph} stats={stats} />
            <PortfolioStrategy strategy={strategy}/>
            <PortfolioCards portfolios={portfolios}/>
            <HomeContact/>
            <HomeFooter/>
            
        </div>
    );
};

export default PortfolioPage;