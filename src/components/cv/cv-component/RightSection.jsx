import megak from "../../../assets/courses/megaK2.webp";
import {BiCheck} from "react-icons/bi";
import alx from "../../../assets/courses/alx.png";
import udemy from "../../../assets/courses/udemy.png";
import React from "react";
import {TechStack} from "./TechStack";

export const RightSection = ({www}) => {
    return (
        <>
            <section className="right-section">
                <div className="right-main-content">
                    <TechStack/>
                    <section className="experience sect">
                        <h2 className="right-title">Kursy i szkolenia</h2>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <img id='megak' src={megak} alt=""/>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Mega Kurs Javascriptu</h5>

                                    <p className="para">14-miesięczny kurs JavaScriptu. Przygotujący uczestników do pracy jako junior JavaScript Developer, na kursie poznałem między innymi:</p>
                                    <ul>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>JavaScript, TypeScript, OOP, FP, ES6+, asynchroniczność</span>
                                        </li>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>Node.js, Express.js, React.js, NestJS, TypeORM, REST, API, TDD</span>
                                        </li>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>Bazy relacyjne i nierelacyjne, MySQL, MongoDb, Git, Scrum</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <img id='alx' src={alx} alt=""/>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Kurs stacjonarny - Programista PHP</h5>
                                    <p className="para">6-miesięczny stacjonarny kurs programowania w języku PHP na którym uczyłem się między innymi:</p>
                                    <ul>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>Wstęp do PHP, HTML, CSS, XML</span>
                                        </li>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>MySQL, Postgres, Diagramy ERD, UML</span>
                                        </li>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>Programowanie Obiektowe JavaScript</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <img id='udemy' src={udemy} alt=""/>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Kursy on-line</h5>
                                    <ul>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>Programowanie w JavaScript</span>
                                        </li>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>React od podstaw</span>
                                        </li>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>Zaawansowane projecty w CSS i JavaScript</span>
                                        </li>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>Node.js, Express i MongoDB</span>
                                        </li>
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <span>Wprowadzenie do Git i GitHub</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className="education sect">
                        <h2 className="right-title">Projekty</h2>
                        <div className="proj-content">
                            <h5 className="tl-title-2 proj">Head Hunter [NestJS React TypeScript] </h5>
                            <a id='link' href="https://github.com/tomczer2t/head_hunter_front" target='_blank'
                               rel="noopener noreferrer">https://github.com/tomczer2t/head_hunter_front</a><br/>
                            <a id='link' href="https://github.com/tomczer2t/head_hunter_back" target='_blank'
                               rel="noopener noreferrer">https://github.com/tomczer2t/head_hunter_back</a>
                            <p className="para">Projekt Head Hunter to ostatni etap rocznego Bootcampu Full Stack JS, tworzony był w systemie Scrum 6 osobowym zespole. Aplikacja łączy w sobie całą wiedze i&nbsp;technologie, którą uczyliśmy sie podczas bootcampu. Aplikacja została stworzona,aby łączyć przyszłych programistów z rekruterami.</p>
                        </div>
                        <div className="proj-content">
                            <h5 className="tl-title-2 proj">Zamówienia e-mail [Express React TypeScript]</h5>
                            <a id='link' href="https://github.com/majcherrr87/zamowienia_email_front" target='_blank'
                               rel="noopener noreferrer">https://github.com/majcherrr87/zamowienia_email_front</a><br/>
                            <a id='link' href="https://github.com/majcherrr87/zamowienia_email_back" target='_blank'
                               rel="noopener noreferrer">https://github.com/majcherrr87/zamowienia_email_back</a>
                            <p className="para">Projekt Zamówienia e-mail został stworzony na potrzeby restauracji. Dzięki Aplikacji można storzyć baze dostawców towatu oraz przypisać do nich produkty, a&nbsp;następnie dokonywać zamówień drogą e-mail</p>
                        </div>
                        <div className="proj-content">
                            <h5 className="tl-title-2 proj">Portfolio [React]</h5>
                            <a id='link' href="https://github.com/majcherrr87/Portfolio" target='_blank'
                               rel="noopener noreferrer">https://github.com/majcherrr87/Portfolio</a><br/>
                            <a id='link' href={'http://' + www} target='_blank'
                               rel="noopener noreferrer">{www}</a>
                            <p className="para">Projekt Zamówienia e-mail został stworzony na potrzeby restauracji. Dzięki Aplikacji można storzyć baze dostawców towatu oraz przypisać do nich produkty, a&nbsp;następnie dokonywać zamówień drogą e-mail</p>
                        </div>
                    </section>
                    <section className="education sect">
                        <h2 className="right-title">Certyfikaty</h2>
                        <div className="proj-content">
                            <h5 className="tl-title-2 proj">Kurs programista PHP</h5>
                            <a id='link' href="https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/" target='_blank'
                               rel="noopener noreferrer">https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/</a><br/>
                        </div>
                        <div className="proj-content">
                            <h5 className="tl-title-2 proj">Kurs programowanie w javascript</h5>
                            <a id='link' href="https://www.udemy.com/certificate/UC-b8482c60-374a-41f7-9c30-205a21f24eba/" target='_blank'
                               rel="noopener noreferrer">https://www.udemy.com/certificate/UC-b8482c60-374a-41f7-9c30-205a21f24eba/</a><br/>
                        </div>
                        <div className="proj-content">
                            <h5 className="tl-title-2 proj">Kurs React od podstaw</h5>
                            <a id='link' href="https://www.udemy.com/certificate/UC-19729b91-bda1-4d71-9487-e64de6c1a84d/" target='_blank'
                               rel="noopener noreferrer">https://www.udemy.com/certificate/UC-19729b91-bda1-4d71-9487-e64de6c1a84d/</a><br/>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}