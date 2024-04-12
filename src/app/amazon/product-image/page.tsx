import React from 'react';
import PortfolioHeader from "@/app/(portfolios)/_components/header";
import PortfolioStrategy from "@/app/(portfolios)/_components/strategy";
import PortfolioCards from "@/app/(portfolios)/_components/portfolio";
import HomeContact from "@/app/(home)/_components/contact";
import HomeFooter from "@/app/(home)/_components/footer";
import AmazonHero from "@/app/(portfolios)/amazon/_components/hero";


import heroImg1 from '@images/hero-3-1.png';
import heroImg2 from '@images/hero-3-2.png';
import portfolioPhoto_1 from "@images/portfolio-1.png";
import portfolioPhoto_2 from "@images/portfolio-2.png";
import portfolioPhoto_3 from "@images/portfolio-3.png";
import portfolioPhoto_4 from "@images/portfolio-4.png";
import portfolioPhoto_5 from "@images/portfolio-5.png";
const PortfolioPage = () => {
    const header = 'Product Image Service';
    const paragraph = 'IK Project Amazon Image Service crafts high-resolution image decks designed to tell your brand\'s story, making your products shine on Amazon. Elevate your listings, boost conversions, and build trust today!';
    const stats = [
        {number: '85%', text: 'increase in click-through rate'},
        {number: '71%', text: 'rise in customer engagement levels'},
        {number: '62%', text: 'improvement in conversion rates'},
        {number: '90%', text: 'boost in mobile conversions achieved'}
    ];
    const strategy = [
        {
            title: 'Image Audit',
            text: 'Our expert team analyzes your current Amazon product images to enhance your brand\'s visual impact, identifying strengths and areas for improvement.'
        },
        {
            title: 'Tailored Image Deck Creation',
            text: 'We craft a custom high-resolution image deck to showcase your products and unique brand story, helping you stand out and connect with your target audience.'
        },
        {
            title: 'Multimedia Enhancement',
            text: 'We use call-out images, lifestyle photography, and infographics to highlight your product\'s unique selling points and key features, captivating potential customers.'
        },
        {
            title: 'Mobile-Optimized Design',
            text: 'Our design strategies optimize Amazon images for mobile and desktop devices, boosting engagement and conversions in mobile commerce.'
        },
        {
            title: 'Ongoing Support & Improvement',
            text: 'Our designers monitor performance metrics to optimize your Amazon image strategy, ensuring your brand\'s competitiveness and success in the digital marketplace.'
        }
    ];
    const portfolios = [
        {
            title: 'Image Optimization: Clear & Informative (Optimization)',
            text: 'Our expert team optimizes your product images to ensure they are crystal clear, visually appealing, and provide all the necessary information to captivate potential buyers within milliseconds.',
            img: portfolioPhoto_1
        },
        {
            title: 'Image Deck Creation: Stand Out from the Crowd (Deck Creation)',
            text:'We create a high-resolution image deck that not only showcases your products but also tells your brand\'s unique story, helping you to differentiate yourself and drive conversions on Amazon.',
            img: portfolioPhoto_2
        },
        {
            title: 'Sales-Boosting Features: Maximize Your Impact (Sales Boost)',
            text: 'Your Amazon listings will feature a strategic selection of up to 9 high-quality images, including call-out images, lifestyle photography, and infographics, that highlight your product\'s key features and benefits to drive a 58% sales lift.',
            img: portfolioPhoto_3
        },
        {
            title: 'Mobile-Optimized Visuals: Reach Your Audience Everywhere (Mobile Optimization)',
            text: 'In today\'s mobile-driven world, our team ensures that your images are optimized for both mobile and desktop viewing, allowing you to engage with consumers on any device and maximize your sales potential.',
            img: portfolioPhoto_4
        },
        {
            title: 'Tailored Image Solutions: Brand Trust & Conversion Boost (Tailored Solutions)',
            text: 'Whether you need to enhance your existing image collection or create new visuals from scratch, our packshot photography and CGI services will help you build trust in your brand and drive conversions by providing consumers with an immersive shopping experience on Amazon.',
            img: portfolioPhoto_5
        },
    ]
    return (
        <div>
            <PortfolioHeader color={'black'}/>
            <AmazonHero header={header} paragraph={paragraph} stats={stats} img1={heroImg1} img2={heroImg2}/>
            <PortfolioStrategy strategy={strategy}/>
            <PortfolioCards portfolios={portfolios}/>
            <HomeContact/>
            <HomeFooter/>

        </div>
    );
};

export default PortfolioPage;