import React from 'react'
import {Hero} from "../components/fdf/fdf-component/hero/Hero";
import {Programs} from "../components/fdf/fdf-component/programs/Programs";

import '../components/fdf/fdf.css'
import {Reasons} from "../components/fdf/fdf-component/reasons/Reasons";
import {Plans} from "../components/fdf/fdf-component/plans/Plans";
import {Testimonials} from "../components/fdf/fdf-component/testimonials/Testimonials";
import {Join} from "../components/fdf/fdf-component/join/Join";

export const FdfView = () => {
    return (
        <>
            <div className='fdf__view'>
                <Hero />
                <Programs/>
                <Reasons/>
                <Plans/>
                <Testimonials/>
                <Join/>
            </div>

        </>
    )
};

