import React, {useState} from 'react'
import {Header} from "../components/header/Header";
import {Nav} from "../components/nav/Nav";
import {About} from "../components/about/About";
import {Services} from "../components/services/Services";
import {Experience} from "../components/experience/Experience";
import {Portfolio} from "../components/portfolio/Portfolio";
import {Testimonials} from "../components/testimonials/Testimonials";
import {Contact} from "../components/contact/Contact";
import {Footer} from "../components/footer/Footer";
import '../index.css';


export const PortfolioView = () => {
    return (
        <>
            <Header  />
            <Nav />
            <About />
            <Services />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
};

