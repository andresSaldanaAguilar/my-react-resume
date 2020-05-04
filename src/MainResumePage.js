import React from 'react';
import './MainResumePage.css';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import Link from '@material-ui/core/Link';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import TableFooter from '@material-ui/core/TableFooter';
import Chip from '@material-ui/core/Chip';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const contact = [
  {link : 'https://linkedin.com/in/andressaldanaaguilar', description : 'andressaldanaaguilar', icon : <LinkedInIcon ></LinkedInIcon>},
  {link : 'https://github.com/andresSaldanaAguilar', description : 'andresSaldanaAguilar', icon: <GitHubIcon ></GitHubIcon>},
  {link : 'mailto:andres.saldana.aguilar@gmail.com', description : 'andres.saldana.aguilar@gmail.com', icon : <MailIcon ></MailIcon>},
  {link : '#', description : '5543890085', icon: <PhoneIcon ></PhoneIcon>}
];

const about = [
  {emoji : '👨‍💻', name : 'Computer Systems Engineer since 2020'},
  {emoji : '🏫', name : 'Escuela Superior de Cómputo IPN'},
  {emoji : '✍', name : '9.14/10.00 GPA'},
  {emoji : '🎖️', name : 'Honorable mention thesis'}
];

const experience = [
  { header : '‍Freelance - Full-Stack developer and analyst', date: 'Nov 2017 - Jul 2018', 
    description : 'Analysis, design and developing of web platform for train stoplights issues reporting, shorting report time and attendance all over the country.This platform was developed with Laravel framework and deployed on a linux cloud sever.',
    clients: 'Rysh electronica S.A de C.V'},
  { header : 'E-Global Software Developer Intern', date: 'Aug 2019 - Nov 2019', 
    description : 'Developing of web services for client transaction authentication, storage and authorization with the use of Spring Boot framework. Service Migration from Java EE to Spring Boot.', 
    clients: 'BBVA Bancomer, BanCoppel'},
  { header : 'ThinkSkink - Software Engineer Jr', date: 'Dec 2019 - Present',
    description : 'Developing of new backend, frontend, testing and deploying functionalities for business process automatization tool.',
    clients: 'Telcel, Wom Chile, Nextel y Claro Perú'},
];

const skills = [ 
  {
    label: "Languages",
    rows: [
      {key: 'Java', value: '4 years'},
      {key: 'Python', value: '2 years'},
      {key: 'Android', value: '2 years'},
      {key: 'JavaScript', value: '3 years'}
    ]
  }
  ,
  {
    label: "Databases",
    rows: [
      {key: 'MySQL', value: '4 years'},
      {key: 'OracleDB', value: '1 year'},
      {key: 'Postgres', value: '1 year'},
      {key: 'MongoDB', value: '< 1 year'}
    ]
  }
  ,
  {
    label: "Test Frameworks",
    rows: [
      {key: 'JUnit', value: '< 1 year'},
      {key: 'Selenium', value: '< 1 year'}
    ]
  }
  ,
  {
    label: "Technologies",
    rows: [  
      {key: 'Spring Boot', value: '1 year'},
      {key: 'Spring MVC', value: '< 1 year'},
      {key: 'React', value: '< 1 year'},
      {key: 'JQuery', value: '2 years'},
      {key: 'Maven', value: '1 year'},
      {key: 'Git', value: '3 years'}
    ]
  }
];

const hobbies = [
  {emoji : '♟️', name : 'Chess'},
  {emoji : '📷', name : 'Photography'},
  {emoji : '🎨', name : 'Arts'},
  {emoji : '💻💖', name : 'And of course, Coding'}
];

export default function MainResumePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
       
        <Grid item xs={0} sm={0} md={2} lg={2} xl={2}>
        </Grid>
        <Grid item justify xs={12} sm={12} md={8} lg={8} xl={8} style={{padding:40}} >
          
          <Typography variant="h2" component="h2" gutterBottom>
            Andrés Arnulfo Saldaña Aguilar
          </Typography>

          <Typography variant="h3" component="h2" gutterBottom>Contact</Typography>
          {contact.map((link) => {
            return(
              <Grid container>
                <Grid item xs={1}>
                  {link.icon}
                </Grid>
                <Grid item xs={11}>
                  <Typography><Link variant="h7" href={link.link}>{link.description}</Link></Typography>
                </Grid>
              </Grid>
            )}
          )}
         
          <p></p>
          
          <Typography variant="h3" component="h2" gutterBottom>About</Typography>
          {about.map((item) => {
            return(
            <Typography component="h2" gutterBottom><span class="emoji" role="img">{item.emoji}</span>{item.name}</Typography>
            )}
          )}

          <p></p>

          <Typography variant="h3" component="h2" gutterBottom>Thesis</Typography>
          <Typography variant="h5" component="h4" gutterBottom color="primary">Real time energy production monitoring</Typography>
          <Typography component="p" gutterBottom>
            My thesis partners and I investigated and developed a system capable of
            real time energy production monitoring from distinct sources, alerting
            related problems on an android application. Logic was contained by an embedded server,
            processing and signal treatment was handled by a microcontroller.
          </Typography>
          
          <p></p>

          <Typography variant="h3" component="h2" gutterBottom>Experience</Typography>
          {experience.map((item) => {
            return(
              <div>
                <Grid container justify="flex-start">
                 <Grid item xs={8}>
                <Typography variant="h5" component="h4" gutterBottom color="primary">{item.header}</Typography>

                 </Grid>
                 <Grid item xs={4}>
                  <Chip color="primary" label={item.date}/>

                 </Grid>
                </Grid>
                <Typography component="p" gutterBottom>{item.description}</Typography>
                <Typography component="p" gutterBottom>Clients: {item.clients}</Typography>
              </div>
            );
          })}
          
          <p></p>

          <Typography variant="h3" component="h2" gutterBottom>Technical Skills</Typography>
          
          {skills.map((category) => {
            return(
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                        <TableCell style={{background:"#f1f1f1"}}>{category.label}</TableCell>
                        <TableCell style={{background:"#f1f1f1"}}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {category.rows.map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} >                 
                              <TableCell >{row.key}</TableCell>
                              <TableCell >{row.value}</TableCell>   
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            );
          })}
          
          <p></p>

          <Typography variant="h3" component="h2" gutterBottom>Hobbies</Typography>
          {hobbies.map((hobbie) => {
            return(
              <Typography component="h2" gutterBottom> <span class="emoji" role="img">{hobbie.emoji}</span>{hobbie.name}</Typography>
            )}
          )}

        </Grid>
      </Grid>
      <TableFooter></TableFooter>
    </div>
  );
}
