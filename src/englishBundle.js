import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import CodeIcon from '@material-ui/icons/Code';

const englishBundle = {

    degree: 'Software Engineer',

    contact : { header:"Contact", content :[
        { link: 'https://linkedin.com/in/andressaldanaaguilar', description: 'LinkedIn', icon: <LinkedInIcon ></LinkedInIcon> },
        { link: 'https://app.codesignal.com/profile/andressaldan', description: 'Code Signal', icon: <CodeIcon ></CodeIcon> },
        { link: 'https://github.com/andresSaldanaAguilar', description: 'GitHub', icon: <GitHubIcon ></GitHubIcon> },
        { link: 'mailto:andres.saldana.aguilar@gmail.com', description: 'andres.saldana.aguilar@gmail.com', icon: <MailIcon ></MailIcon> },
        { link: '#', description: '(+52)5543890085', icon: <PhoneIcon ></PhoneIcon> }
    ]},

    about : { header:"About", content :[
        { emoji: '👨‍💻', name: 'Computer Systems Engineer since 2020' },
        { emoji: '🏫', name: 'Escuela Superior de Cómputo IPN' },
        { emoji: '✍', name: '9.14/10.00 GPA' },
        { emoji: '🎖️', name: 'Honorable mention thesis' }
    ]},

    experience : { header:"Experience", content :[
        {
            header: 'ThinkSkink - Software Engineer Jr', date: 'Dec 2019 - Present',
            tasks: [
                'Developing features with Spring Framework and Java 8.',
                'Developing of user interfaces with AngularJS and React components.',
                'Testing with Selenium and Junit.',
                'SOAP and REST services definition and creation.',
                'Code Refactoring and Clean Coding.',
                'Customizing our product for clients.',
                'OracleDB and PostgresDB usage.',
            ],
            clients: 'Telcel México, WOM Chile and Claro Perú'
        },
        {
            header: 'E-Global Software Developer Intern', date: 'Aug 2019 - Nov 2019',
            tasks: [
                'Service Migration from Java EE to Spring Boot for banking transaction, authentication, storage and authorization.',
                'PostgresDB usage.',
            ],
            clients: 'BBVA Bancomer, BanCoppel.'
        },
        {
            header: '‍Rysh electronica S.A de C.V (Freelance) - Full-Stack developer and analyst', date: 'Nov 2017 - Jul 2018',
            tasks: [
                'This small project was all made by my sister and I, for train stoplights problem report.',
                'Requirement and use case analysis and design.','Developing of REST controllers, views and models.',
                'Backend and frontend were developed with Laravel framework, MariaDB storage and deployed on a Google Cloud CentOS server.'
            ],
            clients: 'Ferromex'
        }
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
                { key: 'AngularJS', value: '< 1 year' },
                { key: 'Git', value: '3 years' }
            ]
        }
    ]},

    
    thesis :  { header:"Thesis", content : {
        title: 'Real time energy production monitoring',
        description: 'Capable of energy production monitoring on real time from various sources (nodes), notifying production problems and displaying data on a mobile application. Logic was contained on a raspberry pi 3 Linux server, data was stored in a document-oriented database, processing and signal treatment was handled by a microcontroller.'
    }},

    hobbies : { header:"Likes", content :[
        { emoji: '♟️', name: 'Chess' },
        { emoji: '📷', name: 'Photography' },
        { emoji: '🎨', name: 'Arts' },
        { emoji: '💻💖', name: 'And of course, Coding' }
    ]},

    certifications : { header:"Certifications", 
        content : [
            {   
                title: 'Course',
                description: 'IBM Global Bussines, GBS Academy: Microservices '
            },
            {   
                title: 'Certification',
                description: 'SCRUMstudy : Scrum Fundamentals,  Credential ID: 737953 '
            }
        ]
    }
}

export default englishBundle;