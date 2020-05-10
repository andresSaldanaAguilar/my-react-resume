import React from 'react';
import MainResumePage from './MainResumePage';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme }  from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TableFooter from '@material-ui/core/TableFooter';
import Typography from '@material-ui/core/Typography';

/*imported from material UI webpage*/
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {themeType :'light'};
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({
      themeType : this.state.themeType === 'light' ? 'dark' : 'light'   
    });
  }
  
  render() {

    let theme = createMuiTheme({
      palette: {
          primary: blue,
          secondary: red,
          type: this.state.themeType
      }
    })

    return( 
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Grid container >
            <Grid item xs={0} sm={0} md={2} lg={2} xl={2}>
            </Grid>
            <Grid item justify xs={12} sm={12} md={8} lg={8} xl={8} >
              <Grid style={{padding:40}}>
              
                <Grid component="label" container alignItems="center" spacing={1} style={{borderBottom: "0.3px solid",paddingBottom:"10px"}}>
                  <Grid item><Typography variant="h7" gutterBottom>Dark Theme</Typography></Grid>
                  <Grid item>
                    <AntSwitch onClick={this.toggleTheme} name="checkedC" />
                  </Grid>
                </Grid>

                <p></p>

                <MainResumePage/>

              </Grid>
            </Grid>
          </Grid>
        <TableFooter></TableFooter>
        </ThemeProvider>
      </div>
    );
  };
}

export default App;
