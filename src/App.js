import React from 'react';
import MainResumePage from './MainResumePage';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme }  from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import spanishBundle from './spanishBundle';
import englishBundle from './englishBundle';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import TranslateIcon from '@material-ui/icons/Translate';
import Link from '@material-ui/core/Link';

/*imported from material UI webpage*/
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 36,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 3,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(24px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 30,
    height: 30,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 36 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {themeType :'light',language:"en"};
    this.toggleTheme = this.toggleTheme.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  toggleTheme() {
    this.setState({
      themeType : this.state.themeType === 'light' ? 'dark' : 'light'   
    });
  }

  toggleLanguage(e) {
    this.setState({
      language : e.target.value
    });
  }
  
  render() {

    let theme = createMuiTheme({
      palette: {
        primary: this.state.themeType === "light" ? {500:"#26a69a"} : {"500":"#82e9de"},
        secondary: this.state.themeType === "light" ? {"A400":"#8eacbb"} : {"A400" :"#90a4ae"},
        type: this.state.themeType
      }
    })

    return( 
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Grid container>
            <Grid item xs={0} sm={0} md={2} lg={2} xl={2}>
            </Grid>
            <Grid item justify xs={12} sm={12} md={8} lg={8} xl={8} >
              <Grid style={{paddingLeft:40,paddingRight:40,paddingTop:25,paddingBottom:15}}>
              
                <Grid container spacing={1}  justify="space-between" alignItems="center" style={{borderBottom: "0.3px solid",paddingBottom:"10px"}}>
                  <Grid item>
                    <Grid  container justify="space-between" alignItems="center">
                      <InvertColorsIcon fontSize="large" style={{marginRight:10}}/>
                      <AntSwitch onClick={this.toggleTheme} />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid  container justify="space-between" alignItems="center">
                      <TranslateIcon fontSize="large" style={{marginRight:15}}/>
                      <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">Language</InputLabel>
                        <Select
                          native
                          value={this.state.language}
                          onChange={this.toggleLanguage}
                          label="Language"
                          inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                          }}
                        >
                          <option value={"en"}>English</option>
                          <option value={"es"}>Spanish</option>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <p></p>

                <MainResumePage language={this.state.language === 'es' ? spanishBundle : englishBundle}/>

                <Grid item><Typography style={{borderTop: "0.3px solid",paddingTop:"10px",fontSize:10}} >Author: Andres Saldaña Aguilar 2020  -- <Link href="https://github.com/andresSaldanaAguilar/my-react-resume">Source: https://github.com/andresSaldanaAguilar/my-react-resume</Link></Typography></Grid>

              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  };
}

export default App;
