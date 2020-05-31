import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppRouter } from './routes/AppRouter';
import './Font.css'


const theme = createMuiTheme({
    typography: {
        fontFamily: "'Source Sans Pro', sans-serif",
    },
    palette: {
        primary: {
            main: '#3B72AE',
        },
        secondary: {
            main: '#333333',
        },
        background: {
            main: '#fff',
        },
        text: {
            primary: '#464646',
            secondary: '#000',
            subtitle: '#AEAEAE',
            title: '#3B72AE',
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <AppRouter />
    </ThemeProvider>,
    document.getElementById('root'),
);
