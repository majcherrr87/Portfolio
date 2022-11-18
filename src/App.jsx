import React from 'react'
import {Route, Routes} from "react-router-dom";
import {PortfolioView} from "./views/PortfolioView";
import {CvView} from "./views/CvView";
import {ZamowieniaEmailView} from "./views/zamowienia-emailView";


export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PortfolioView/>}/>
                <Route path="/cv" element={<CvView/>}/>
                <Route path="/zamowienia-email" element={<ZamowieniaEmailView/>}/>

            </Routes>
        </>
    )
};

