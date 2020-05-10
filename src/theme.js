import { createMuiTheme }  from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue';
import green from '@material-ui/core/colors/green';


    const lightTheme = createMuiTheme({
        palette: {
            primary: lightBlue,
            secondary: green,
            type: 'light'
        }
    })



export default lightTheme
