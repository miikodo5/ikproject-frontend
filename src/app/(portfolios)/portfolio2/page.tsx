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
    const header = '';
    const paragraph = '';
    const strategy = [
        {
            title: '',
            text: ''
        },
        {
            title: '',
            text: ''
        },
        {
            title: '',
            text: ''
        },
        {
            title: '',
            text: ''
        },
        {
            title: '',
            text: ''
        }
    ];
    const portfolios = [
        {
            title: '',
            text: '',
            img: portfolioPhoto_1
        },
        {
            title: '',
            text:'',
            img: portfolioPhoto_2
        },
        {
            title: '',
            text: '',
            img: portfolioPhoto_3
        },
        {
            title: '',
            text: '',
            img: portfolioPhoto_4
        },
        {
            title: '',
            text: '',
            img: portfolioPhoto_5
        },
    ]
    return (
        <div className={'z-[60]'}>
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