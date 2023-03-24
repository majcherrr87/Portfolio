import React from 'react'
import {Header} from "../components/header/Header";
import {Nav} from "../components/nav/Nav";
import {About} from "../components/about/About";
import {Services} from "../components/services/Services";
import {Experience} from "../components/experience/Experience";
import {Portfolio} from "../components/portfolio/Portfolio";
import {Testimonials} from "../components/testimonials/Testimonials";
import {Contact} from "../components/contact/Contact";
import {Footer} from "../components/footer/Footer";
import '../components/portfolio/index.css';


export const PortfolioView = () => {
    return (
       <div className='portfolio__view'>
           <Header  />
           <Nav />
           <About />
           <Services />
           <Experience />
           <Portfolio />
           <Testimonials />
           <Contact />
           <Footer />
       </div>
    )
};

