import { createTheme } from "@mui/material/styles";


const getTheme = (mode)=>{
    return createTheme({
        palette:{
            mode:mode,
        primary:{
            main:'#FF0000'
        }
    }
    });
    
}
export default getTheme;