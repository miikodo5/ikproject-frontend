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
    const header = 'Mobile Development';
    const paragraph = 'Mobile Development offers unparalleled potential in the booming $33.7 billion mobile app market. We specialize in Android and iOS app development, crafting innovative solutions for industries like healthcare, travel, finance, e-commerce, education, and entertainment. Our expert team excels in React Native, Flutter/Dart, NodeJs, and Firebase technologies to bring your app idea to life efficiently. From discovery to deployment, we ensure a seamless process that saves you time and resources while maximizing your app\'s success. Step into mobile innovation with us today!';
    const strategy = [
        {
            title: 'Discovery',
            text: 'In this phase, we\'ll schedule a call to discuss your goals, ideas, estimated hours, and necessary developers for your project. This step lays the foundation for successful collaboration.'
        },
        {
            title: 'Design',
            text: 'We create purposeful user experiences and engaging illustrations in addition to visually appealing designs. Your app will look good and function seamlessly.'
        },
        {
            title: 'Development',
            text: 'Our expert developers bring your app concept to life, meeting deadlines and ensuring smooth project progression from start to finish.'
        },
        {
            title: 'Deployment and QA testing',
            text: 'Magic requires testing too! Our thorough quality assurance process ensures comprehensive testing of your app before deployment to deliver a flawless final product.'
        },
        {
            title: 'Launch and support',
            text: 'We provide ongoing support after your mobile app launch to address any post-launch issues and maintain optimal performance.'
        }
    ];
    const portfolios = [
        {
            title: 'Expert Android Development',
            text: 'Our skilled team of Android developers are your dev-heroes ready to turn your innovative ideas into custom Android applications. From concept to deployment, we ensure a seamless development process tailored to meet your specific requirements.',
            img: portfolioPhoto_1
        },
        {
            title: 'Seamless iOS Development',
            text:'Trust us with iOS mobile app development and let us enhance the App Store experience for your users. Our expertise in iOS development, along with Apple Watch integration, ensures that your app stands out in the competitive market.',
            img: portfolioPhoto_2
        },
        {
            title: 'Diverse Industry Solutions',
            text: 'We cater to a wide range of industries, from healthcare to e-commerce, offering customized mobile app solutions that bring value to both you and your customers. Whether it\'s a healthcare monitoring app or an engaging entertainment platform, we have you covered.',
            img: portfolioPhoto_3
        },
        {
            title: 'Cutting-Edge Technologies',
            text: 'Our experienced team is well-versed in utilizing top technologies like React Native and Dart/Flutter to deliver high-quality mobile apps that exceed expectations. With a focus on the best tools for the job, we ensure optimal performance and user satisfaction.',
            img: portfolioPhoto_4
        },
        {
            title: 'Streamlined Development Process',
            text: 'From project discovery to deployment and testing, our structured approach ensures efficient delivery of mobile apps that meet your goals and exceed industry standards. By reducing development time, costs, and effort, we pave the way for mobile app innovation that sets you apart from the competition.',
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