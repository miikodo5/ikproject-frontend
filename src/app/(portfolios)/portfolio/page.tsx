import React from 'react';
import PortfolioHeader from "@/app/(portfolios)/_components/header";
import PortfolioStrategy from "@/app/(portfolios)/_components/strategy";
import PortfolioCards from "@/app/(portfolios)/_components/portfolio";
import HomeContact from "@/app/(home)/_components/contact";
import HomeFooter from "@/app/(home)/_components/footer";
import PortfolioHero from "@/app/(portfolios)/portfolio/_components/hero";

const PortfolioPage = () => {
    return (
        <div>
            <PortfolioHeader color={'white'}/>
            {/*<PortfolioHero/>*/}
            <HomeContact/>
            <HomeFooter/>
            
        </div>
    );
};

export default PortfolioPage;