import megak from '../../assets/courses/megak.webp';
import udemy from '../../assets/courses/udemy.png';
import alx from '../../assets/courses/alx.png';
import {FaMedal} from "react-icons/fa";
import React from "react";

// const certificate = <a href='wp.pl'>Certyfikat <FaMedal className='service__list-icon'/> </a>;

export const data = [
    {
        id: 1,
        logo: megak,
        link: 'https://www.megak.pl/',
        description: '14-miesięczny kurs JavaScriptu. Przygotujący uczestników do pracy jako junior JavaScript Developer',
        skill: [
            "JavaScript, TypeScript, OOP, FP, ES6+, asynchroniczność",
            "Node.js, Express.js, Handlebars, REST, API, TDD",
            "Bazy relacyjne i nierelacyjne, MySQL, MongoDb",
            "React.js",
            "NestJS, TypeORM,",
            "Git, Scrum,",
        ]
    },
    {
        id: 2,
        logo: udemy,
        link: 'https://www.udemy.com/',
        description: 'Kursy On-line ',
        skill: [
            'Programowanie w JavaScript',
            'React od podstaw',
            'Zaawansowane projecty w CSS i JavaScript',
            'Node.js, Express i MongoDB',
            'Wprowadzenie do Git i GitHub',
        ]
    },
    {
        id: 3,
        logo: alx,
        link: 'https://www.alx.pl/',
        description: 'Kurs stacjonarny - Programista PHP',
        skill: [
            'Wstęp do PHP, HTML, CSS, XML',
            'Praca z danymi MySQL-a i Postgresa',
            'Diagramy ERD, UML',
            'Programowanie Obiektowe',
            'JavaScript',
        ],
        certificate: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
    },
]