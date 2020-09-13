import React from 'react';
import './MainResumePage.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import StarIcon from '@material-ui/icons/Star';


const useStyles = theme => ({
  root: {
    justifyContent: 'center',
    backgroundColor: "#26a69a"
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class MainResumePage extends React.Component {
  
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Typography color="dark" variant="h2">Andrés Arnulfo Saldaña Aguilar</Typography>
        <Typography variant="h5" color="primary" gutterBottom>{this.props.language.degree}</Typography>
        <p></p>
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

        <Typography variant="h4" gutterBottom>{this.props.language.experience.header}</Typography>
        {this.props.language.experience.content.map((item) => {
          return(
            <div>
              <Typography variant="h5" component="h4" gutterBottom color="primary">{item.header} <Chip style={{color:"#fff",fontWeight:400}} color="secondary" label={item.date}/></Typography>
              <ul>
                {item.tasks.map((task) => {return(<li>{task}</li>);})}
                <li>Clients : {item.clients}</li>
              </ul>
            </div>
          );
        })}
        
        <p></p>

        <Typography variant="h4" gutterBottom>{this.props.language.skills.header}</Typography>
        
        <List component="nav">
          {this.props.language.skills.content.map((category) => {
            return(
              <div>
                <ListItem className={classes.root} >
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={category.label} />
                </ListItem>
                {category.rows.map((row) => {
                  return (
                    <div>
                      <ListItem button>
                      <ListItemIcon >
                        <LabelImportantIcon color="primary" />
                      </ListItemIcon >
                      <ListItemText primary={row.key+": "+row.value} />
                      </ListItem>
                      <Divider ></Divider>
                    </div>
                  );
                })}
              </div>
              );
          })}
        </List>
            
        <p></p>

        <Typography variant="h4" gutterBottom>{this.props.language.certifications.header}</Typography>
        {this.props.language.certifications.content.map((certification) => {
        return(
          <Typography component="h2" color="primary" gutterBottom> {certification.title} : {certification.description}</Typography>
        )}
        )}

        <p></p>

        <Typography variant="h4" gutterBottom>{this.props.language.hobbies.header}</Typography>
        {this.props.language.hobbies.content.map((hobby) => {
          return(
            <Typography component="h2" gutterBottom> <span class="emoji" role="img">{hobby.emoji}</span>{hobby.name}</Typography>
          )}
        )}

      </div>
    );
  };
}

export default withStyles(useStyles)(MainResumePage);