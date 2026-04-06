import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"
import Skills from "../components/Skills.jsx"
import Projects from "../components/Projects.jsx"
import Footer from "../components/Footer.jsx"
import Contact from "../components/Contact.jsx"
import Certificates from "../components/Certificates.jsx"
import {useRef} from "react"
import theme from "../assets/theme/theme.jsx"
import {ThemeProvider} from "@mui/material/styles"



export default function Home(){


    return(
        <ThemeProvider theme={theme}>
             <div className="w-full font-mono ">
                <Navbar/> 
                <Hero/>
                <About/>
                <Skills/>
                <Certificates/>
                <Projects/>
                <Contact/>
                <Footer/>
                
            </div> 
       </ThemeProvider>
    )
}