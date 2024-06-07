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
    const header = 'Total Quality Management';
    const paragraph = 'Elevate your business with Total Quality Management (TQM) - the transformative philosophy that optimizes every aspect of your operations. Unlock continuous improvement, minimize waste, and delight your customers by empowering your team and streamlining your processes. Experience the power of a holistic quality-driven approach that propels your organization to new heights of success.';

    const stats = [
        {number: 20,after:'%', text: 'increase in overall productivity'},
        {number: 30,after:'%', text: 'reduction in customer complaints'},
        {number: 15,after:'%', text: 'increase in employee engagement and satisfaction'},
        {number: 25,after:'%', text: 'boost in profitability'}
    ];
    const strategy = [
        {
            title: 'Assess Current State',
            text: 'We analyze your organization\'s existing quality management practices to identify areas for improvement.'
        },
        {
            title: 'Define Quality Objectives',
            text: 'We collaborate with you to establish clear, measurable quality goals aligned with your business strategy.'
        },
        {
            title: 'Implement TQM Principles',
            text: 'We guide you in incorporating the core principles of Total Quality Management throughout your organization.'
        },
        {
            title: 'Drive Continuous Improvement',
            text: 'We empower your team to continuously optimize processes, reduce waste, and enhance customer satisfaction.'
        },
        {
            title: 'Monitor and Adjust',
            text: 'We help you regularly review and refine your TQM system to ensure sustained excellence.'
        }
    ];
    const portfolios = [
        {
            title: 'Continuous Improvement',
            text: 'At the heart of Total Quality Management (TQM) lies the principle of continuous improvement. This philosophy encourages organizations to constantly analyze, optimize, and refine their processes, products, and services. By embracing a culture of continuous learning and adaptation, companies can stay ahead of the curve, consistently delivering higher quality outputs and exceeding customer expectations.',
            img: portfolioPhoto_1
        },
        {
            title: 'Minimizing Waste',
            text:'TQM emphasizes the importance of minimizing waste in all forms - whether it\'s waste of resources, time, or effort. By identifying and eliminating inefficiencies throughout the organization, companies can streamline their operations, reduce costs, and enhance overall productivity. This holistic approach to waste reduction ensures that every aspect of the business is operating at its peak performance.',
            img: portfolioPhoto_2
        },
        {
            title: 'Customer-Centric Focus',
            text: 'At the heart of TQM is a deep understanding and unwavering commitment to the customer. Organizations that embrace TQM make it their mission to understand the needs, preferences, and pain points of their target audience, and then align their products, services, and processes to deliver exceptional value. This customer-centric approach ensures that the organization remains agile, responsive, and constantly striving to exceed customer expectations.',
            img: portfolioPhoto_3
        },
        {
            title: 'Process-Driven Approach',
            text: 'TQM recognizes that quality is not just about the end product, but the entire journey that leads to it. By adopting a process-driven approach, organizations can identify and optimize the various touchpoints, workflows, and interdependencies that contribute to the overall quality of their offerings. This systematic focus on process improvement helps to eliminate bottlenecks, reduce errors, and ensure consistent, high-quality results.',
            img: portfolioPhoto_4
        },
        {
            title: 'Empowered Workforce',
            text: 'TQM emphasizes the crucial role of employee engagement and empowerment in driving quality improvement. By fostering a culture of continuous learning, collaboration, and ownership, organizations can harness the collective knowledge and creativity of their workforce. This empowerment of employees at all levels enables them to identify and implement innovative solutions, leading to a more agile, responsive, and quality-focused organization.',
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