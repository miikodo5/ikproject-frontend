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
    const header = 'UI & UX Design';
    const paragraph = 'UI & UX design services deliver exceptional digital experiences that captivate users. With a proven process, our expert designers create intuitive interfaces, leveraging the latest tools and technologies to ensure your product stands out. Trust us to transform your vision into a seamless, engaging reality.';
    const strategy = [
        {
            title: 'Analysis',
            text: 'Our team conducts research to understand your target audience, their pain points, and the competition. This informs a user-centric design strategy that aligns with your business goals.'
        },
        {
            title: 'Interface Architecture',
            text: 'We design the information hierarchy and navigation to provide a seamless, intuitive user experience. Our designers work closely with you to create a solid UI design foundation.'
        },
        {
            title: 'Sketching & Wireframes',
            text: 'Our designers use industry tools to create sketches and wireframes that visualize user flow and layout. This allows us to validate the concept and get feedback before visual design.'
        },
        {
            title: 'Dynamic Prototype',
            text: 'We develop an interactive prototype to simulate the user experience. This lets you test and refine the design before development, identifying and addressing usability issues early on.'
        },
        {
            title: 'Editing',
            text: 'Based on your feedback and user testing, our designers refine the UI and UX to meet your requirements and exceed user expectations.'
        }
    ];
    const portfolios = [
        {
            title: 'Innovative UI & UX Design Services',
            text: 'At IK Project, our UI and UX design services are tailored to deliver an exceptional finished product on time. Through our innovative design process, our in-house creative unit functions as a dedicated design studio within a comprehensive software company. We strive to create profoundly engaging mobile and web applications, including prototype designing, testing, and customer experience research.',
            img: portfolioPhoto_1
        },
        {
            title: 'Trusted by Industry Leaders',
            text:'Fortune 500 companies and businesses from various key industries rely on our UI and UX services. We take pride in the trust our clients place in us to provide them with effective solutions that exceed their expectations.',
            img: portfolioPhoto_2
        },
        {
            title: 'Streamlined Design Process',
            text: 'With more than 10 years of experience, we have developed a streamlined design process that ensures the highest quality results in an expedited time frame. This has allowed us to consistently deliver on time and exceed expectations, cutting development-ready design time by 2x, new design delivery time by 30%, and design support time by 70%',
            img: portfolioPhoto_3
        },
        {
            title: 'Comprehensive Design Services',
            text: 'Our team has a rich history in creating intuitive and coherent user experiences, ensuring customers have an enjoyable experience when interacting with your product or website. We provide comprehensive research and analysis to identify user needs and goals, so you can be sure the end product is tailored to your audience. Our services include AR experience design, mobile app UX and UI design, cross-platform experiences design, UI and UX consulting, design workshops, and web design.',
            img: portfolioPhoto_4
        },
        {
            title: 'Quality, Precision, and Efficiency',
            text: 'Leveraging a broad suite of tools, technologies, domain expertise, and a client-centric approach, we bring innovation at the intersection of quality, precision, and efficiency. Our expert designers adhere to established standards, workflows, and guidelines, ensuring the final product fits your needs perfectly within your timeline.',
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