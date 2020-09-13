import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import CodeIcon from '@material-ui/icons/Code';

const spanishBundle = {

    degree: 'Ingeniero en Sistemas Computacionales',

    contact : { header:"Contacto", content :[
        { link: 'https://linkedin.com/in/andressaldanaaguilar', description: 'andressaldanaaguilar', icon: <LinkedInIcon ></LinkedInIcon> },
        { link: 'https://app.codesignal.com/profile/andressaldan', description: 'Code Signal', icon: <CodeIcon ></CodeIcon> },
        { link: 'https://github.com/andresSaldanaAguilar', description: 'andresSaldanaAguilar', icon: <GitHubIcon ></GitHubIcon> },
        { link: 'mailto:andres.saldana.aguilar@gmail.com', description: 'andres.saldana.aguilar@gmail.com', icon: <MailIcon ></MailIcon> },
        { link: '#', description: '(+52)5543890085', icon: <PhoneIcon ></PhoneIcon> }
    ]},

    about : { header:"Acerca de mi", content :[
        { emoji: '👨‍💻', name: 'Ingeniero en Sistemas Computacionales desde el 2020' },
        { emoji: '🏫', name: 'Escuela Superior de Cómputo IPN' },
        { emoji: '✍', name: 'Promedio de 9.14/10.00' },
        { emoji: '🎖️', name: 'Tésis con mención honorífica' }
    ]},

    experience : { header:"Experiencia", content :[
        {
            header: 'ThinkSkink - Ingeniero de Software Jr', date: 'Dic 2019 - Presente',
            tasks: [
                'Desarrollo de nuevas funcionalidades con Spring Framework y Java 8.',
                'Desarrollo de vistas con AngularJS y componentes con ReactJS.',
                'Pruebas unitarias con Junit y de integración con Selenium.',
                'Definición y creación de servicios SOAP and REST.',
                'Code Refactoring y Clean Coding.',
                'Personalización de nuestro producto para nuestros clientes.',
                'Uso de OracleDB y PostgresDB.',
            ], 
            clients: 'Clientes: Telcel México, WOM Chile and Claro Perú'

        },
        {
            header: 'E-Global - Becario Desarrollador Backend ', date: 'Ago 2019 - Nov 2019',
            tasks: [
                'Migración de servicios web Java EE a Spring Boot para autorización, almacenamiento y autenticación de transacciones bancarias.',
                'Uso de PostgresDB.',
            ], 
            clients: 'Clientes: BBVA Bancomer, BanCoppel'
        },
        {
            header: 'Rysh electronica S.A de C.V (Freelance) - Desarrollador Full-Stack y Analista', date: 'Nov 2017 - Jul 2018',
            tasks: [
                'Diseño y análisis de requerimientos y casos de uso. Todo el proyecto fue hecho por mi hermana y yo para el reporte de problemas en semáforos de vías del tren.',
                'Desarrollo de controladores REST, vistas y modelos de datos.',
                'El Backend y Frontend fueron desarrollados en Laravel framework, usamos MariaDB como base de datos y la aplicación fue desplegada en un servidor CentOS en Google Cloud.'
            ], 
            clients: 'Clientes: Ferromex'
        }
    ]},

    skills : { header:"Habilidaddes Técnicas", content :[
        {
            label: "Languages",
            rows: [
                { key: 'Java', value: '4 años' },
                { key: 'Python', value: '2 años' },
                { key: 'Android', value: '2 años' },
                { key: 'JavaScript', value: '3 años' }
            ]
        }
        ,
        {
            label: "Databases",
            rows: [
                { key: 'MySQL', value: '4 años' },
                { key: 'OracleDB', value: '1 año' },
                { key: 'Postgres', value: '1 año' },
                { key: 'MongoDB', value: '< 1 año' }
            ]
        }
        ,
        {
            label: "Test Frameworks",
            rows: [
                { key: 'JUnit', value: '< 1 año' },
                { key: 'Selenium', value: '< 1 año' }
            ]
        }
        ,
        {
            label: "Technologies",
            rows: [
                { key: 'Spring Boot', value: '1 año' },
                { key: 'Spring MVC', value: '< 1 año' },
                { key: 'AngularJS', value: '< 1 año' },
                { key: 'React', value: '< 1 año' },
                { key: 'JQuery', value: '2 años' },
                { key: 'Maven', value: '1 año' },
                { key: 'Git', value: '3 años' }
            ]
        }
    ]},

    
    thesis : { header:"Tésis", content : {
        title: 'Monitoreo de producción de energía en tiempo real',
        description: 'En colaboración con mis compañeros de tesis desarrollamos un sistema con capacidades para monitorear la producción de energía generada desde distintas fuentes y alertar anomalías de manera remota mediante una aplicación móvil. La lógica estaba contenida en un servidor embebido, el procesamiento, tratamiento y envió de datos se realizó con un microcontrolador.'
    }},
    
    certifications : { header:"Certificaciones", 
        content : [
            {   
                title: 'Curso',
                description: 'IBM Global Bussines, GBS Academy: Microservicios'
            },
            {   
                title: 'Certificación',
                description: 'SCRUMstudy : Scrum Fundamentals,  ID de la credencial: 737953'
            }
        ]
    },

    hobbies : { header:"Pasatiempos", content :[
        { emoji: '♟️', name: 'Ajedrez' },
        { emoji: '📷', name: 'Fotografía' },
        { emoji: '🎨', name: 'Dibujar, Pintura' },
        { emoji: '💻💖', name: 'Los sistemas' }
    ]}
}

export default spanishBundle;