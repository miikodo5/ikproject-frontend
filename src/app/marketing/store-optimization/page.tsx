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
    const header = 'App Store Optimization';
    const paragraph = 'Unlock the potential of your mobile application with ASO App Store Optimization. Our tailored services increase organic traffic, boost app installs, enhance ratings, and attract new audiences. Choose from Performance ASO for guaranteed results, Subscription ASO for long-term support with fixed pricing, or One-off ASO for a comprehensive optimization package. Let us elevate your app visibility and drive business growth today!';
    const strategy = [
        {
            title: 'Performance ASO for App Store',
            text: 'Boost your app\'s potential with our Performance ASO service. Pay based on real installation growth on the App Store, protected by our advanced ASO technologies to prevent fraud.'
        },
        {
            title: 'Subscription ASO for App Store / Google Play',
            text: 'Get long-term support at a fixed price with our Subscription ASO service. Optimize your app for specific locales and gain access to essential tools like App Store Connect.'
        },
        {
            title: 'One-off ASO for App Store / Google Play',
            text: 'Let us handle your app\'s metadata creation and optimization. We will develop a promotion strategy based on detailed analysis of your app, target audience, and competitors.'
        },
        {
            title: 'Keyword Research',
            text: 'We identify the most relevant keywords for your app\'s success and create a semantic core for each locale to improve search rankings.'
        },
        {
            title: 'Metadata Optimization',
            text: 'We optimize your metadata using the selected keywords to enhance visibility in app store searches and increase conversion rates from page views to installations.'
        }
    ];
    const portfolios = [
        {
            title: 'Performance ASO for App Store',
            text: 'Get ready to pay only for the increased installations of your application with our Performance ASO service. We leverage our proprietary ASO technologies to guarantee real results without resorting to motivated traffic or internet bots. Focus on the App Store marketplace and watch your app soar.',
            img: portfolioPhoto_1
        },
        {
            title: 'Subscription ASO for App Store / Google Play',
            text:'Opt for long-term support at a fixed price with our Subscription ASO service. Benefit from ongoing optimization for specified locales and access to the exclusive tools of App Store Connect. Elevate your app\'s performance on both the App Store and Google Play effortlessly.',
            img: portfolioPhoto_2
        },
        {
            title: 'One-off ASO for App Store / Google Play',
            text: 'Dive into targeted metadata creation using native advertising techniques across various locales with our One-off ASO service for the App Store. For Google Play, we provide comprehensive title, short, and long meta descriptions optimization. Let us craft a winning promotion strategy that aligns perfectly with your app\'s unique selling points.',
            img: portfolioPhoto_3
        },
        {
            title: 'Promotion Strategy Development',
            text: 'Our expert team conducts an in-depth analysis of your app, audience, and current KPIs to craft an optimal promotion strategy that drives visibility and installs on both Google Play and the App Store. From competitive analysis to targeted promotions, we\'ve got you covered every step of the way.',
            img: portfolioPhoto_4
        },
        {
            title: 'Keyword Research & Metadata Optimization',
            text: 'We perform meticulous keyword research to identify high-impact keywords relevant to your app\'s offerings across different markets. By optimizing metadata using these keywords, we ensure that your app stands out in search results and meets store requirements effectively.',
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