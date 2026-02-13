import {createTheme} from "@mui/material/styles"
import { purple } from '@mui/material/colors';

const theme = createTheme ({
  palette: {
    primary:{
        main:purple[600],
        light:purple[400]
    },
    secondary:{
        main:purple[900],
        light:purple[100],
        dark:purple[400],
    },
  },
});

export default theme