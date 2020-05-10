import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

const englishBundle = {
    contact : { header:"Contact", content :[
        { link: 'https://linkedin.com/in/andressaldanaaguilar', description: 'andressaldanaaguilar', icon: <LinkedInIcon ></LinkedInIcon> },
        { link: 'https://github.com/andresSaldanaAguilar', description: 'andresSaldanaAguilar', icon: <GitHubIcon ></GitHubIcon> },
        { link: 'mailto:andres.saldana.aguilar@gmail.com', description: 'andres.saldana.aguilar@gmail.com', icon: <MailIcon ></MailIcon> },
        { link: '#', description: '5543890085', icon: <PhoneIcon ></PhoneIcon> }
    ]},

    about : { header:"About", content :[
        { emoji: '👨‍💻', name: 'Computer Systems Engineer since 2020' },
        { emoji: '🏫', name: 'Escuela Superior de Cómputo IPN' },
        { emoji: '✍', name: '9.14/10.00 GPA' },
        { emoji: '🎖️', name: 'Honorable mention thesis' }
    ]},

    experience : { header:"Experience", content :[
        {
            header: '‍Freelance - Full-Stack developer and analyst', date: 'Nov 2017 - Jul 2018',
            description: 'Analysis, design and developing of web platform for train stoplights issues reporting, shorting report time and attendance all over the country.This platform was developed with Laravel framework and deployed on a linux cloud sever.',
            clients: 'Rysh electronica S.A de C.V'
        },
        {
            header: 'E-Global Software Developer Intern', date: 'Aug 2019 - Nov 2019',
            description: 'Developing of web services for client transaction authentication, storage and authorization with the use of Spring Boot framework. Service Migration from Java EE to Spring Boot.',
            clients: 'BBVA Bancomer, BanCoppel'
        },
        {
            header: 'ThinkSkink - Software Engineer Jr', date: 'Dec 2019 - Present',
            description: 'Developing of new backend, frontend, testing and deploying functionalities for business process automatization tool.',
            clients: 'Telcel, Wom Chile, Nextel y Claro Perú'
        },
    ]},

    skills : { header:"Technical Skills", content :[
        {
            label: "Languages",
            rows: [
                { key: 'Java', value: '4 years' },
                { key: 'Python', value: '2 years' },
                { key: 'Android', value: '2 years' },
                { key: 'JavaScript', value: '3 years' }
            ]
        }
        ,
        {
            label: "Databases",
            rows: [
                { key: 'MySQL', value: '4 years' },
                { key: 'OracleDB', value: '1 year' },
                { key: 'Postgres', value: '1 year' },
                { key: 'MongoDB', value: '< 1 year' }
            ]
        }
        ,
        {
            label: "Test Frameworks",
            rows: [
                { key: 'JUnit', value: '< 1 year' },
                { key: 'Selenium', value: '< 1 year' }
            ]
        }
        ,
        {
            label: "Technologies",
            rows: [
                { key: 'Spring Boot', value: '1 year' },
                { key: 'Spring MVC', value: '< 1 year' },
                { key: 'React', value: '< 1 year' },
                { key: 'JQuery', value: '2 years' },
                { key: 'Maven', value: '1 year' },
                { key: 'Git', value: '3 years' }
            ]
        }
    ]},

    hobbies : { header:"Likes", content :[
        { emoji: '♟️', name: 'Chess' },
        { emoji: '📷', name: 'Photography' },
        { emoji: '🎨', name: 'Arts' },
        { emoji: '💻💖', name: 'And of course, Coding' }
    ]},

    thesis :  { header:"Thesis", content : {
        title: 'Real time energy production monitoring',
        description: 'My thesis partners and I investigated and developed a system capable of real time energy production monitoring from distinct sources, alerting related problems on an android application. Logic was contained by an embedded server, processing and signal treatment was handled by a microcontroller.'
    }}
}

export default englishBundle;