import { createTheme } from "@mui/material/styles";


const getTheme = (mode) => {
    return createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    primary: { main: '#F8C0C4', contrastText: '#FFF5F5' },
                    background: { default: '#FFF5F5', paper: '#ffffff' },
                    text: { primary: '#5D4037', secondary: '#FFF5F5' },
                }
                : {
                    primary: { main: '#F8C0C4', contrastText: '#5D4037' },
                    background: { default: '#1A1212', paper: '#2D2020' },
                    text: { primary: '#FFF5F5', secondary: '#FFF5F5' },
                }),


        },
        typography: {
            fontFamily: "Helvetica,Arial",
            h1: {
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "17.8px",

            },
            h2: {
                fontSize: "17px",
                fontWeight: 700,
                lineHeight: "18.7px",
            },
            h3: {
                fontSize: '0.80rem',
                fontWeight: 500,
                lineHeight: "14.274px",
            },
            h4: {
                fontSize: "11px",
                fontWeight: 400,
                lineHeight: "14.3px",
            },
            h5: {
                fontSize: '0.85rem',
                fontWeight: 600,
                lineHeight: "14.274px",
            },
            body1: {
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "24px",
            }


        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 750,
                md: 960,

            },
        },
    });

}
export default getTheme;