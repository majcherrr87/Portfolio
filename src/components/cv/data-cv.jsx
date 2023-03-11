import html from "../../../src/assets/techStack/html.png";
import css from "../../../src/assets/techStack/css.png";
import JS from "../../../src/assets/techStack/JavaScript.png";
import React from "../../../src/assets/techStack/React.png";
import Bootstrap from "../../../src/assets/techStack/Bootstrap.png";
import Sass from "../../../src/assets/techStack/sass.png";
import Node from "../../../src/assets/techStack/node.png";
import Express from "../../../src/assets/techStack/Expressjs.png";
import TypeScript from "../../../src/assets/techStack/Typescript.png";
import NestJs from "../../../src/assets/techStack/nestjs.png";
import MySQL from "../../../src/assets/techStack/MySQL.png";
import MongoDB from "../../../src/assets/techStack/MongoDB.png";
import Jest from "../../../src/assets/techStack/jest.png";
import Git from "../../../src/assets/techStack/git.png";
import megak from '../../assets/courses/megaK2.webp';
import alx from '../../assets/courses/alx.png';
import udemy from '../../assets/courses/udemy.png';


export const dataProfile = [
    {
        lang: 'POL',
        name: 'Adrian Majcher',
        career: 'Inżynier oprogramowania',
        city: 'Warszawa',
        tel: 513354369,
        email: 'majcherrr87@gmail.com',
        github: 'https://github.com/majcherrr87',
        facebook: 'https://www.facebook.com/adrian.majcher.568/',
        linkedin: 'https://www.linkedin.com/in/adrian-majcher-46a529163/',
        bio: 'Jestem początkującym programistą języka Javascript, specjalizującym się w backendzie. Jestem gotowy do podjęcia nowych wyzwań.',
        profile: 'Profil',
        contact: 'Kontakt',
    },
    {
        lang: 'ENG',
        name: 'Adrian Majcher',
        career: 'Software engineer',
        city: 'Warszawa',
        tel: 513354369,
        email: 'majcherrr87@gmail.com',
        github: 'https://github.com/majcherrr87',
        facebook: 'https://www.facebook.com/adrian.majcher.568/',
        linkedin: 'https://www.linkedin.com/in/adrian-majcher-46a529163/',
        bio: 'I am a novice Javascript developer specializing in backend. I am ready to take on new challenges.',
        profile: 'Profile',
        contact: 'Contact',
    }
];
export const dataEdu = [
    {
        title: 'Wyższa szkoła zarządzania i Administracji',
        desc: 'Inżynier Oprogramowania',
        year: '2013 - 2017',
    },
    {
        title: 'Liceum profilowane',
        desc: `o profilu Zarządzanie informacją`,
        year: '2003 - 2006',
    },
];
export const dataTechStock = [
    {
        name: 'HTML',
        logo: html,
    },
    {
        name: 'CSS',
        logo: css,
    },
    {
        name: 'JavaScript',
        logo: JS,
    },
    {
        name: 'React',
        logo: React,
    },
    {
        name: 'Bootstrap',
        logo: Bootstrap,
    },
    {
        name: 'Sass',
        logo: Sass,
    },
    {
        name: 'Node',
        logo: Node,
    },
    {
        name: 'Express',
        logo: Express,
    },
    {
        name: 'NestJs',
        logo: NestJs,
    },
    {
        name: 'TypeScript',
        logo: TypeScript,
    },
    {
        name: 'MySQL',
        logo: MySQL,
    },
    {
        name: 'MongoDB',
        logo: MongoDB,
    },
    {
        name: 'JEST',
        logo: Jest,
    },
    {
        name: 'Git',
        logo: Git,
    },
];
export const dataExperience = [
    {
        id: 'megak',
        logo: megak,
        title: 'Mega Kurs Javascriptu',
        para: '14-miesięczny kurs JavaScriptu. Przygotujący uczestników do pracy jako junior JavaScript Developer, na kursie poznałem między innymi:',
        li: ['JavaScript, TypeScript, OOP, FP, ES6+, asynchroniczność',
            'Node.js, Express.js, React.js, NestJS, TypeORM, REST, API, TDD',
            'Bazy relacyjne i nierelacyjne, MySQL, MongoDb, Git, Scrum'],

    },
    {
        id: 'alx',
        logo: alx,
        title: 'Kurs stacjonarny - Programista PHP',
        para: '6-miesięczny stacjonarny kurs programowania w języku PHP na którym uczyłem się między innymi:',
        li: ['Wstęp do PHP, HTML, CSS, XML',
            'MySQL, Postgres, Diagramy ERD, UML',
            'Programowanie Obiektowe JavaScript'],

    },
    {
        id: 'udemy',
        logo: udemy,
        title: 'Kursy on-line',
        para: '',
        li: ['Programowanie w JavaScript',
            'React od podstaw',
            'Zaawansowane projecty w CSS i JavaScript',
            'Node.js, Express i MongoDB',
            'Wprowadzenie do Git i GitHub'],
    },
];
export const dataProjects = [
    {
        title: 'Head Hunter [NestJS React TypeScript]',
        para: 'Projekt Head Hunter to ostatni etap rocznego Bootcampu Full Stack JS, tworzony był w systemie Scrum 6 osobowym zespole. Aplikacja łączy w sobie całą wiedze i&nbsp;technologie, którą uczyliśmy sie podczas bootcampu. Aplikacja została stworzona,aby łączyć przyszłych programistów z rekruterami.',
        link: ['https://github.com/tomczer2t/head_hunter_front', 'https://github.com/tomczer2t/head_hunter_back']
    },
    {
        title: 'Zamówienia e-mail [Express React TypeScript]',
        para: 'Projekt Zamówienia e-mail został stworzony na potrzeby restauracji. Dzięki Aplikacji można storzyć baze dostawców towatu oraz przypisać do nich produkty, a&nbsp;następnie dokonywać zamówień drogą e-mail.',
        link: ['https://github.com/majcherrr87/zamowienia_email_front', 'https://github.com/majcherrr87/zamowienia_email_back']
    },
    {
        title: 'Portfolio [React]',
        para: 'Aplikacja portfolio została napisana z wykorzystaniem biblioteki React, można na nij dowiedzieć się więcej na temat mojej osoby, zobaczyć ukończone projekty a także wysłać z nij e-maila do mnie.',
        link: ['https://github.com/majcherrr87/Portfolio','www']
    },
];
export const dataCertificates = [
    {
        title: 'Kurs programista PHP',
        link: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
    },
    {
        title: 'Kurs programowanie w javascript',
        link: 'https://www.udemy.com/certificate/UC-b8482c60-374a-41f7-9c30-205a21f24eba/',
    },
    {
        title: 'Kurs React od podstaw',
        link: 'https://www.udemy.com/certificate/UC-19729b91-bda1-4d71-9487-e64de6c1a84d/',
    },
];