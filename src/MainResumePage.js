import React from 'react';
import './MainResumePage.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import Link from '@material-ui/core/Link';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';

class MainResumePage extends React.Component {

  render(){
    return (
      <div>
        <Typography variant="h2"gutterBottom>
          Andrés Arnulfo Saldaña Aguilar
        </Typography>
        <Typography variant="h4" gutterBottom>{this.props.language.contact.header}</Typography>
        {this.props.language.contact.content.map((link) => {
          return(
            <Grid container>
              <Grid item xs={2}>
                {link.icon}
              </Grid>
              <Grid item xs={10}>
                <Typography><Link variant="h7" href={link.link}>{link.description}</Link></Typography>
              </Grid>
            </Grid>
          )}
        )}
      
        <p></p>
        
        <Typography variant="h4" gutterBottom>{this.props.language.about.header}</Typography>
        {this.props.language.about.content.map((item) => {
          return(
          <Typography component="h2" gutterBottom><span class="emoji" role="img">{item.emoji}</span>{item.name}</Typography>
          )}
        )}

        <p></p>

        <Typography variant="h4" gutterBottom>{this.props.language.thesis.header}</Typography>
        <Typography variant="h5" component="h4" gutterBottom color="primary">{this.props.language.thesis.content.title}</Typography>
        <Typography component="p" gutterBottom>
            {this.props.language.thesis.content.description}
        </Typography>
        
        <p></p>
c
        <Typography variant="h4" gutterBottom>{this.props.language.experience.header}</Typography>
        {this.props.language.experience.content.map((item) => {
          return(
            <div>
              <Typography variant="h5" component="h4" gutterBottom color="primary">{item.header} <Chip variant="outlined" color="secondary" label={item.date}/></Typography>
              <Typography component="p" gutterBottom>{item.description}</Typography>
              <Typography component="p" gutterBottom>Clients: {item.clients}</Typography>
            </div>
          );
        })}
        
        <p></p>

        <Typography variant="h4" gutterBottom>{this.props.language.skills.header}</Typography>
        
        {this.props.language.skills.content.map((category) => {
          return(
            <TableContainer >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow >
                      <TableCell >{category.label}</TableCell>
                      <TableCell ></TableCell>
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

        <Typography variant="h4" gutterBottom>{this.props.language.hobbies.header}</Typography>
        {this.props.language.hobbies.content.map((hobbie) => {
          return(
            <Typography component="h2" gutterBottom> <span class="emoji" role="img">{hobbie.emoji}</span>{hobbie.name}</Typography>
          )}
        )}

      </div>
    );
  };
}

export default MainResumePage;