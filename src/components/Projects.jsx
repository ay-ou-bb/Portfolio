import landingPage from "../assets/img/landingPage.png"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import notAvailable  from "../assets/img/notAvailable.png"
import todoList  from "../assets/img/todo-list.jpg"
import weatherApp from "../assets/img/weather-app.jpg"
import { useTranslation } from 'react-i18next'
import {useTheme} from '@mui/material/styles';
import Button from '@mui/material/Button';

import RevealOnScroll from '../assets/animations/RevealOnScroll.jsx';



export default function Projects(){
     const { t, i18n } = useTranslation();
     const theme = useTheme()

     const projectsArray = [
        {
            id:1,
            img:landingPage,
            nameKey:"Physiotherapy",
            descKey:"physiotherapy_desc",
            link:"https://ay-ou-bb.github.io/Physiotherapy/"
        },
        {
            id:2,
            img:todoList,
            nameKey:"todo",
            descKey:"todo_desc",
            link:"https://todo-list-dv.netlify.app/"
        },
        {
            id:3,
            img:weatherApp,
            nameKey:"weather",
            descKey:"weather_desc",
            link:"https://weather-app-devl.netlify.app/"
        }
     ]

     return(
        <RevealOnScroll>
        <div id="projects" className="flex   flex-col mb-16">
            <h1 style={{color:theme.palette.secondary.dark,}} className="font-bold text-center text-2xl md:text-3xl mb-6 md:mb-12 lg:text-4xl drop-shadow-[2px_5px_2px_rgba(59,130,246,1)]">{t("projects.title")}</h1>
            
            {/* <div className="flex flex-col md:flex-row justify-center items-center md:justify-around"> */}

            <div className="flex justify-center">
                <div className="sm:w-[70%] md:w-[90%] grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* PROJECTS */}
            {projectsArray.map((project)=>{
                return(
                    <div key={project.id} className="sm:w-[80%] md:w-auto h-96 flex justify-center flex-col items-center mb-12 md:mb-0 shadow-[5px_10px_15px_rgba(0,0,0,0.25)] p-2 bg-[#F8FAFC] border border-gray-100  rounded-xl">
                        <img style={{border:`${theme.palette.primary.light} solid 3px`}} className="h-[50%] w-[90%] border border-gray-200" src={project.img}/>
                        <div className="h-[45%] m-2 grid grid-rows-2 gap-4">
                           <div className=" mt-4 h-"> 
                                <h2 style={{color:theme.palette.primary.light}} className="text-xl md:text-2xl font-bold text-center">{t(`projects.${project.nameKey}`)}</h2>
                                <p className="text-black m-2 text-sm md:text-base text-center">{t(`projects.${project.descKey}`)}</p> 
                            </div>
                             <div className="flex justify-center items-center">
                                <Button className="flex justify-around items-center mb-4" href={project.link} variant="contained" endIcon={<OpenInNewIcon className="mr-2" />}>
                                    {t("projects.open")}
                                </Button>
                            </div>                            
                        </div>
                    </div>
                )
            })}

                    {/*=== PROJECTS ==== */}
                </div>
            </div>
        </div>
        </RevealOnScroll>
    )
}

