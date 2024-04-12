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
    const header = 'B2B Lead Generation';
    const paragraph = 'Struggling to fill your sales funnel with quality B2B leads? IK Project\'s B2B Lead Generation service is your ultimate solution! We dive deep into your business to create Ideal Customer Profiles, collect targeted contacts daily, and engage them through emails and LinkedIn. Our personalized approach ensures a steady flow of warm leads ready for your sales team. Scale your business, expand into new markets, and boost brand awareness effortlessly with IK Project!';
    const strategy = [
        {
            title: 'Dive Deep Into Your Business',
            text: 'Our experts will delve into your business to create the Ideal Customer Profile (ICP), ensuring we align our strategies with your goals and vision.'
        },
        {
            title: 'Build a Target Audience',
            text: 'We will meticulously gather contacts that match your ICP, kickstarting personalized communication to warm up potential leads for further interaction.'
        },
        {
            title: 'Engage with Precision',
            text: 'With tailored scripts and automated processes, we initiate effective email and LinkedIn campaigns to engage your target audience strategically.'
        },
        {
            title: 'Convert Interest into Action',
            text: 'We nurture and warm up leads until they are primed for discussions with your sales team, ensuring a seamless transition from interest to conversion.'
        },
        {
            title: 'Optimize and Maximize Results',
            text: 'To improve business outcomes, we analyze KPIs, update communication scripts, and automate processes for increased efficiency.'
        }
    ];
    const portfolios = [
        {
            title: 'Tailored Ideal Customer Profiles (ICPs)',
            text: 'Our service begins by understanding your business inside out to create ICPs that precisely match your target audience. By diving deep into your industry, we ensure that every lead generated is a perfect fit for your products or services.',
            img: portfolioPhoto_1
        },
        {
            title: 'Personalized Communication Strategies',
            text:'We believe in the power of personalized communication. Our team crafts tailored scripts for email and LinkedIn communications to engage with potential customers effectively. This approach ensures that your message resonates with the audience, increasing the chances of converting leads into sales.',
            img: portfolioPhoto_2
        },
        {
            title: 'Automated Contact Collection and Messaging',
            text: 'To scale results efficiently, we automate the processes of collecting target audience contacts and messaging them. By leveraging cutting-edge technology, we streamline these tasks to maximize outreach and engagement while minimizing manual effort.',
            img: portfolioPhoto_3
        },
        {
            title: 'Continuous Optimization and KPI Analysis',
            text: 'We don\'t just generate leads; we optimize the entire process for continuous improvement. Our team closely monitors key performance indicators (KPIs), analyzes results, and provides detailed reports to help you track progress and make informed decisions for better outcomes.',
            img: portfolioPhoto_4
        },
        {
            title: 'Ongoing Support and Updates',
            text: 'Your success is our priority. We provide monthly updates on ICPs, communication scripts, and other processes to keep your lead generation strategy fresh and effective. With our dedicated support, you can stay ahead of the competition and drive consistent growth in your business.',
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