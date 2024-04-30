import React from 'react';
import HomeHeader from "@/app/(home)/_components/header";
import HomeHero from "@/app/(home)/_components/hero";
import HomeServices from "@/app/(home)/_components/services";
import HomeStrategy from "@/app/(home)/_components/strategy";
import HomeFaq from "@/app/(home)/_components/faq";
import HomeAbout from "@/app/(home)/_components/about";
import HomeCta from "@/app/(home)/_components/cta";
import HomeTestimonials from "@/app/(home)/_components/testimonials";
import HomeContact from "@/app/(home)/_components/contact";
import HomeHero1 from "@/app/(home)/_components/hero-1";
import HomeFooter from "@/app/(home)/_components/footer";



const HomePage = () => {
    return (
            <div className={'bg-[#F7F8FA]  overflow-hidden '}>
                <HomeHeader/>
                <HomeHero1/>
                <HomeServices/>
                <HomeStrategy/>
                <HomeCta/>
                <HomeAbout/>
                <HomeFaq/>
                <HomeTestimonials/>
                <HomeContact/>
                <HomeFooter/>
            </div>
    );
};

export default HomePage;