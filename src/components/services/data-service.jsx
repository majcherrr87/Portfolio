import megak from '../../assets/courses/megak.webp';
import udemy from '../../assets/courses/udemy.png';
import alx from '../../assets/courses/alx.png';

export const data = [
    {
        id: 1,
        lang: 'POL',
        logo: megak,
        title: 'Zdobyte dośwaidczenie',
        subtitle: 'Kursy',
        link: 'https://www.megak.pl/',
        description: '14-miesięczny kurs JavaScriptu. Przygotowujący uczestników do pracy jako junior JavaScript Developer',
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
        lang: 'POL',
        logo: udemy,
        link: 'https://www.udemy.com/',
        description: 'Kursy On-line ',
        skill: [
            'Programowanie w JavaScript',
            'React od podstaw',
            'Zaawansowane projekty w CSS i JavaScript',
            'Node.js, Express i MongoDB',
            'Wprowadzenie do Git i GitHub',
        ]
    },
    {
        id: 3,
        lang: 'POL',
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
    {
        id: 4,
        lang: 'ENG',
        logo: megak,
        title: 'Experience gained',
        subtitle: 'Courses',
        link: 'https://www.megak.pl/',
        description: '14-month JavaScript course. Preparing participants to work as a junior JavaScript Developer',
        skill: [
            "JavaScript, TypeScript, OOP, FP, ES6+, asynchrony",
            "Node.js, Express.js, Handlebars, REST, API, TDD",
            "Relational and non-relational databases, MySQL, MongoDb",
            "React.js",
            "NestJS, TypeORM,",
            "Git, Scrum,",
        ]
    },
    {
        id: 5,
        lang: 'ENG',
        logo: udemy,
        link: 'https://www.udemy.com/',
        description: 'On-line courses',
        skill: [
            'Programming in JavaScript',
            'React from scratch',
            'Advanced projects in CSS and JavaScript',
            'Node.js, Express i MongoDB',
            'Introduction to Git and GitHub',
        ]
    },
    {
        id: 6,
        lang: 'ENG',
        logo: alx,
        link: 'https://www.alx.pl/',
        description: 'Full-time course - PHP developer',
        skill: [
            'Introduction to PHP, HTML, CSS, XML',
            'Working with MySQL and Postgres data',
            'ERD, UML diagrams',
            'Object Oriented Programming',
            'JavaScript',
        ],
        certificate: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
    },

]