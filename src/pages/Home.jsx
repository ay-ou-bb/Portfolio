import Navbar1 from "../components/Navbar1.jsx"
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"
import Skills from "../components/Skills.jsx"
import {useRef} from "react"
import theme from "../assets/theme/theme.jsx"
import {ThemeProvider} from "@mui/material/styles"


export default function Home(){


    return(
        <ThemeProvider theme={theme}>
            <div className="w-full font-mono">
                <Navbar1/> 
                <Hero/>
                <About/>
                <Skills/>
            </div> 
       </ThemeProvider>
    )
}