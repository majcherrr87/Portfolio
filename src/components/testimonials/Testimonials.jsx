import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';
import {data,langData} from './data-testimonial';

export const Testimonials = ({lang}) => {
    const {title, subTitle} = langData.find(el => el.lang === lang);
    return (
        <section id='testimonials'>
            <h5>{subTitle}</h5>
            <h2>{title}</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                >
                {
                    data.map(({avatar, name, review, position}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name}/>
                                </div>
                                <p className="client__name">{name}</p>
                                <h5 className="client__name">{position}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

