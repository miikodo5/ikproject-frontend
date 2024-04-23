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
    const header = 'Kaizen planning';
    const paragraph = 'Navigating the diverse interpretations and principles of the Kaizen philosophy can be confusing, making it challenging to implement a cohesive and effective business improvement strategy. Unstructured Kaizen planning can waste time and resources, hindering sustainable growth and operational excellence. Our Kaizen planning service tailors Kaizen principles to your business goals. We provide expert guidance, data-driven decision making, and a focus on quality, efficiency, and customer-centricity to unlock the power of continuous improvement.';

    const stats = [
        {number: '92%', text: 'of companies reporting improved productivity'},
        {number: '85%', text: 'of organizations experiencing faster time-to-market'},
        {number: '60', text: 'improvements per employee per year'},
        {number: '78%', text: 'of businesses see a decrease in defects and errors'}
    ];
    const strategy = [
        {
            title: 'Understand Kaizen Principles',
            text: 'Our experts delve into the core tenets of Kaizen, providing a clear framework to optimize your business processes.'
        },
        {
            title: 'Assess Current Practices',
            text: 'We conduct a thorough analysis of your existing operations, identifying areas for improvement and growth opportunities.'
        },
        {
            title: 'Develop a Kaizen Roadmap',
            text: 'Our team collaborates with you to create a comprehensive Kaizen plan, outlining actionable steps to drive continuous enhancement.'
        },
        {
            title: 'Implement and Monitor',
            text: 'We guide you through the implementation of Kaizen methodologies, ensuring seamless execution and tracking progress at every stage.'
        },
        {
            title: 'Sustain and Evolve',
            text: 'We provide ongoing support to help you maintain the Kaizen mindset, fostering a culture of continuous improvement within your organization.'
        }
    ];
    const portfolios = [
        {
            title: 'Embrace the Kaizen Philosophy',
            text: 'Kaizen is a powerful business philosophy that emphasizes continuous improvement. Unlike rigid frameworks, Kaizen is a flexible approach that adapts to your unique needs. By focusing on small, incremental changes, you can drive lasting, impactful change within your organization.',
            img: portfolioPhoto_1
        },
        {
            title: 'Prioritize Quality Above All Else',
            text:'At the heart of Kaizen lies a relentless focus on quality. Rather than chasing short-term gains, Kaizen encourages you to prioritize quality, knowing that it will lead to long-term success. By empowering your team to identify and address quality issues, you can create a culture of excellence that permeates every aspect of your business.',
            img: portfolioPhoto_2
        },
        {
            title: 'Harness the Power of Data-Driven Decisions',
            text: 'Kaizen is grounded in the principle of fact-based decision making. By collecting and analyzing data, you can identify areas for improvement and make informed, evidence-based choices. This data-driven approach helps you avoid guesswork and ensures that your efforts are targeted and effective.',
            img: portfolioPhoto_3
        },
        {
            title: 'Foster a Culture of Continuous Improvement',
            text: 'Kaizen is not just a set of tools and techniques; it\'s a mindset that must be embraced by your entire organization. By empowering your team to identify and address problems, you can create a culture of continuous improvement where everyone is invested in the success of the business.',
            img: portfolioPhoto_4
        },
        {
            title: 'Unlock the Potential of Your Business',
            text: 'By implementing the principles of Kaizen, you can unlock the full potential of your business. From streamlining operations to enhancing customer satisfaction, Kaizen provides a proven framework for driving sustainable growth and success. Embrace the power of continuous improvement and watch your organization thrive.',
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