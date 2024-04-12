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
    const header = 'Web Development';
    const paragraph = 'Our web development service is your gateway to cutting-edge technology and seamless online experiences. With expertise in React, Angular, and Vue.js, we merge AI advancements into your product for enhanced performance. Enjoy bonuses like free maintenance, project management, and deployment. Benefit from our decade-long industry experience across various sectors like healthcare, finance, marketplaces, media, retail, travel, social platforms, and education. Let\'s elevate your digital presence together!';
    const strategy = [
        {
            title: 'Discovery',
            text: 'Explore your idea\'s potential as we delve into understanding your concept. Our team provides free comprehensive project estimations, wireframes, and detailed specifications.'
        },
        {
            title: 'Planning',
            text: 'We plan your project meticulously using insights from the discovery phase. Our project managers guarantee seamless processes and results that meet your needs at no extra cost.'
        },
        {
            title: 'Design & Development',
            text: 'Our tech team utilizes React improve web applications and websites with a focus on accessibility, performance, responsiveness, and security for top-quality product delivery.'
        },
        {
            title: 'Deployment',
            text: 'Rely on our quality-obsessed team to deploy your tech-covered ideas flawlessly using popular platforms - at zero additional cost to you.'
        },
        {
            title: 'Maintenance & Support',
            text: 'After your project launches, our team offers six months of free maintenance and support, including complimentary code reviews as a token of appreciation for choosing us.'
        }
    ];
    const portfolios = [
        {
            title: 'Maintenance',
            text: 'Enjoy peace of mind with our dedicated team taking care of your project for 6 months post-release, ensuring it runs smoothly and efficiently without any additional costs.',
            img: portfolioPhoto_1
        },
        {
            title: 'Project Management',
            text:'Our experienced project managers will oversee the entire development process, guaranteeing that your requirements are met seamlessly and your vision is brought to life effortlessly.',
            img: portfolioPhoto_2
        },
        {
            title: 'Deployment',
            text: 'Let our quality-driven team handle the deployment of your tech-driven ideas using popular platforms, ensuring a seamless transition from development to the live environment at absolutely no extra charge.',
            img: portfolioPhoto_3
        },
        {
            title: 'Idea Discovery',
            text: 'We delve deep into your concept, providing estimations, project discoveries, wireframes, and specifications completely free of charge to ensure that we are aligned with your vision from the start.',
            img: portfolioPhoto_4
        },
        {
            title: 'Code Review',
            text: 'Your code will be reviewed rigorously and brought up to industry standards by our expert team at no additional cost, ensuring that your product is robust and future-proof.',
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