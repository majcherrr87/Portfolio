import React, {lazy} from 'react'
import {Route, Routes} from "react-router-dom";
import {PortfolioView} from "./views/PortfolioView";
import {CvView} from "./views/CvView";
import {ZamowieniaEmailView} from "./views/zamowienia-emailView";


export const App = () => {
    const lang = localStorage.getItem('lang') ?? localStorage.setItem('lang','POL');
    if (lang !== 'POL' && lang !== 'ENG'){
         localStorage.setItem('lang','POL')
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<PortfolioView />}/>
                <Route path="/cv" element={<CvView />}/>
                <Route path="/zamowienia-email" element={<ZamowieniaEmailView />}/>

            </Routes>
        </>
    )
};

