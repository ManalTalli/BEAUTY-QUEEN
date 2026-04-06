import { createTheme } from "@mui/material/styles";


const getTheme = (mode)=>{
    return createTheme({
        palette:{
            mode:mode,
        primary:{
            main:'#4308e7',
            contrastText:'#000000',
            dark:'#438552',
            light:'#5bdcdc'
        }
    }
    });
    
}
export default getTheme;