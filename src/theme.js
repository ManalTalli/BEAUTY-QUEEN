import { createTheme } from "@mui/material/styles";


const getTheme = (mode) => {
    return createTheme({
        palette: {
            mode: mode,
            primary: {
                main: 'rgb(254, 254, 254)',
                contrastText: 'rgb(26, 26, 26)',
                dark: '#438552',
                light: '#5bdcdc'
            }
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
                fontSize: "13.44px",
                fontWeight: 400,
                lineHeight: "17.472px",
            },
            h4: {
                fontSize: "11px",
                fontWeight: 400,
                lineHeight: "14.3px",
            },
            h5: {
                fontSize: "10.98px",
                fontWeight: 400,
                lineHeight: "14.274px",
            },


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