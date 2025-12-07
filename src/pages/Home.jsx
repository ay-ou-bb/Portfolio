import Navbar from "../components/Navbar.jsx"
import About from "../components/About.jsx"
import Hero from "../components/Hero.jsx"
import Skills from "../components/Skills.jsx"
import Projects from "../components/Projects.jsx"
import Contact from "../components/Contact.jsx"
import Footer from "../components/Footer.jsx"
import {useRef} from "react"


export default function Home(){


    return(
       <div className="w-full font-mono">
        <Navbar/>
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>

       </div> 
    )
}