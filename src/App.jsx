import React from 'react'
import {Route, Routes} from "react-router-dom";
import {PortfolioView} from "./views/PortfolioView";
import {CvView} from "./views/CvView";


export  const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PortfolioView />}/>
                <Route path="/cv" element={<CvView />} />

            </Routes>
        </>
    )
};

