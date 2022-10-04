import React from 'react'
import {Header} from './components/header/Header';
import {Nav} from './components/nav/Nav';
import {About} from "./components/about/About";
import {Experience} from "./components/experience/Experience";
import {Services} from "./components/services/Services";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";
import {Testimonials} from "./components/testimonials/Testimonials";

export  const App = () => {
    return (
        <>
            <Header />
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

