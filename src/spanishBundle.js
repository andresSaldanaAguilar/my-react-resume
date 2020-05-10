import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

const spanishBundle = {
    contact : { header:"Contacto", content :[
        { link: 'https://linkedin.com/in/andressaldanaaguilar', description: 'andressaldanaaguilar', icon: <LinkedInIcon ></LinkedInIcon> },
        { link: 'https://github.com/andresSaldanaAguilar', description: 'andresSaldanaAguilar', icon: <GitHubIcon ></GitHubIcon> },
        { link: 'mailto:andres.saldana.aguilar@gmail.com', description: 'andres.saldana.aguilar@gmail.com', icon: <MailIcon ></MailIcon> },
        { link: '#', description: '5543890085', icon: <PhoneIcon ></PhoneIcon> }
    ]},

    about : { header:"Acerca de mi", content :[
        { emoji: '👨‍💻', name: 'Ingeniero en Sistemas Computacionales desde el 2020' },
        { emoji: '🏫', name: 'Escuela Superior de Cómputo IPN' },
        { emoji: '✍', name: 'Promedio de 9.14/10.00' },
        { emoji: '🎖️', name: 'Tésis con mención honorífica' }
    ]},

    experience : { header:"Experiencia", content :[
        {
            header: 'Freelance - Desarrollador Full-Stack y Analista', date: 'Nov 2017 - Jul 2018',
            description: 'Análisis, diseño e implementación de una plataforma web para la empresa Rysh Electrónica SA de CV. Acortando los tiempos de reporte y reducción de paros en la operación de los trenes. Trabajamos bajo la metodología ágil SCRUM para su desarrollo.',
            clients: 'Rysh electronica S.A de C.V'
        },
        {
            header: 'E-Global - Becario Desarrollador Backend ', date: 'Ago 2019 - Nov 2019',
            description: 'Desarrollo de servicios web REST para la autorización, almacenamiento y autenticación de transacciones bancarias para Bancomer con el uso de Spring Boot, migración de servicios de Java Enterprise Edition  a Spring Boot, E-Global es una cámara de compensación.',
            clients: 'BBVA Bancomer, BanCoppel'
        },
        {
            header: 'ThinkSkink - Ingeniero de Software Jr', date: 'Dic 2019 - Presente',
            description: 'Desarrollo de nuevas funcionalidades backend y frontend para el orquestamiento de flujos de negocio.',
            clients: 'Telcel, Wom Chile, Nextel y Claro Perú'
        },
    ]},

    skills : { header:"Habilidaddes Técnicas", content :[
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

    hobbies : { header:"Pasatiempos", content :[
        { emoji: '♟️', name: 'Ajedrez' },
        { emoji: '📷', name: 'Fotografía' },
        { emoji: '🎨', name: 'Dibujar, Pintura' },
        { emoji: '💻💖', name: 'Los sistemas' }
    ]},

    thesis : { header:"Tésis", content : {
        title: 'Monitoreo de producción de energía en tiempo real',
        description: 'En colaboración con mis compañeros de tesis desarrollamos un sistema con capacidades para monitorear la producción de energía generada desde distintas fuentes y alertar anomalías de manera remota mediante una aplicación móvil. La lógica estaba contenida en un servidor embebido, el procesamiento, tratamiento y envió de datos se realizó con un microcontrolador.'
    }}
}

export default spanishBundle;