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
    const header = 'Conversion Rate Optimization';
    const paragraph = 'Transform your website or application into a powerful revenue-generating machine with our Conversion Rate Optimization (CRO) services. By enhancing user experience and fine-tuning your online presence, we help you boost profits, optimize marketing spend, elevate brand reputation, and outshine competitors. Our tailored approach includes in-depth analysis, strategic planning, and continuous optimization to ensure tangible results like improved UX/UI and increased income. Let\'s optimize your conversion rates for success!';
    const strategy = [
        {
            title: 'Project Analysis',
            text: 'We analyze website analytics, use tools like Hotjar and Clarity, and create an event map to understand user behavior, laying the foundation for data-driven decision-making.'
        },
        {
            title: 'Prioritization of Pages for CRO',
            text: 'We collaborate with your team to identify key pages for optimization based on user interactions, focusing efforts on areas with the highest conversion potential.'
        },
        {
            title: 'Task Plan Development',
            text: 'We create a detailed plan to optimize key pages using analytics and user behavior insights. This roadmap directs our project efforts in a systematic, results-oriented manner.'
        },
        {
            title: 'Page Optimization',
            text: 'Prioritizing hypotheses, conducting A/B testing, and analyzing data enhances user interfaces and refines strategies, leading to improved conversion rates.'
        },
        {
            title: 'Continuous Improvement & Results Monitoring',
            text: 'Continuous monitoring and optimization improve business performance in the digital landscape by enhancing site UX/UI, boosting revenue, and cutting costs.'
        }
    ];
    const portfolios = [
        {
            title: 'Increase Profits',
            text: 'By optimizing your website\'s conversion rates, you\'ll see a direct increase in profits as more visitors turn into paying customers, boosting your bottom line effortlessly.',
            img: portfolioPhoto_1
        },
        {
            title: 'Efficient Budget Allocation',
            text:'CRO allows you to make the most out of your marketing budget by reaching more potential customers with the same amount of investment, leading to cost savings and better results.',
            img: portfolioPhoto_2
        },
        {
            title: 'Enhance Business Reputation',
            text: 'A high conversion rate not only signifies an effective website but also enhances your business reputation by showcasing it as a reliable and customer-centric brand.',
            img: portfolioPhoto_3
        },
        {
            title: 'Gain Competitive Edge',
            text: 'Optimizing your website for conversions gives you a competitive advantage by attracting more customers, building brand awareness, and ensuring a positive user experience that sets you apart from competitors.',
            img: portfolioPhoto_4
        },
        {
            title: 'Enhanced User Experience and Increased Revenue',
            text: 'Through meticulous page optimization and A/B testing strategies, we ensure improved site usability leading to better user experience, increased revenue, reduced client acquisition costs, enhanced ROAS and ROI, all contributing to the growth of your business.',
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