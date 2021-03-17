import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3886f7',
      dark: '#05377f'
    },
    secondary: {
      main: '#827272',
      light: '#d8c4ad',
    }
  }
});

export default responsiveFontSizes(theme);