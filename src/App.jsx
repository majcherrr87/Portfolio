import React from 'react'
import {Route, Routes} from "react-router-dom";
import {PortfolioView} from "./views/PortfolioView";
import {CvView} from "./views/CvView";
import {ZamowieniaEmailView} from "./views/zamowienia-emailView";





export const App = () => {
    const lang = localStorage.getItem('lang') ?? localStorage.setItem('lang','PL');


    return (
        <>
            <Routes>
                <Route path="/" element={<PortfolioView lang={lang}/>}/>
                <Route path="/cv" element={<CvView lang={lang}/>}/>
                <Route path="/zamowienia-email" element={<ZamowieniaEmailView/>}/>

            </Routes>
        </>
    )
};

