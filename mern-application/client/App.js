import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import { blueGrey, lightGreen } from 'material-ui/colors'
import { hot } from 'react-hot-loader'
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#8eacbb',
    main: '#607d8b',
    dark: '#34515e',
    contrastText: '#fff',
  },
  secondary: {
    light: '#e7ff8c',
    main: '#b2ff59',
    dark: '#7ecb20',
    contrastText: '#000',
  },
    openTitle: blueGrey['400'],
    protectedTitle: lightGreen['400'],
    type: 'light'
  }
})

const App = () => (
   <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <MainRouter/>
      </MuiThemeProvider>
    </BrowserRouter>
  </I18nextProvider>  
)

export default hot(module)(App)
