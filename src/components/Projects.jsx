import landingPage from "../assets/img/landingPage.png"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import notAvailable  from "../assets/img/notAvailable.png"
import todoList  from "../assets/img/todo-list.jpg"
import weatherApp from "../assets/img/weather-app.jpg"
import { useTranslation } from 'react-i18next'
import {useTheme} from '@mui/material/styles';
import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';

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
            link:"https://ay-ou-bb.github.io/Physiotherapy/",
            technologies: ["Html", "CSS", "JavaScript"],
            gitHubLink:"https://github.com/ay-ou-bb/Physiotherapy.git"
        },
        {
            id:2,
            img:todoList,
            nameKey:"todo",
            descKey:"todo_desc",
            link:"https://todo-list-dv.netlify.app/",
            technologies: ["React.js", "MUI"],
            gitHubLink:"https://github.com/ay-ou-bb/Todo-List.git"
        },
        {
            id:3,
            img:weatherApp,
            nameKey:"weather",
            descKey:"weather_desc",
            link:"https://weather-app-devl.netlify.app/",
            technologies: ["React.js", "MUI", "axios "],
            gitHubLink:"https://github.com/ay-ou-bb/Weather-app.git"
        }
     ]

     return(
        
        <div id="projects" className="flex flex-col mb-16 md:mb-24">
            <h1 style={{color:theme.palette.secondary.dark,}} className="font-bold text-center text-2xl md:text-3xl mb-6 md:mb-12 lg:text-4xl drop-shadow-[2px_5px_2px_rgba(59,130,246,1)]">{t("projects.title")}</h1>
            
            {/* <div className="flex flex-col md:flex-row justify-center items-center md:justify-around"> */}

            <div className="flex justify-center items-center w-full">
                <div className="sm:w-[80%] md:w-[90%] grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {/* PROJECTS */}


            {projectsArray.map((project)=>{
                return(
                    <RevealOnScroll key={project.id}>
                            <div 
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                                >

                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.nameKey}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                    {t(`projects.${project.nameKey}`)}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{t(`projects.${project.descKey}`)}</p>

                                    <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                        key={tech}
                                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                                        >
                                        {tech}
                                        </span>
                                    ))}
                                    </div>

                                    <div className="flex gap-3 pt-2">
                                        <Button variant="outline" size="sm" className="gap-2 flex-1 !border !border-black !text-black !text-xs !p-1 !m-0 hover:!bg-purple-100">
                                            <GitHubIcon className="" />
                                           <a href={project.gitHubLink}>code</a> 
                                        </Button>
                                        <Button size="sm" className="gap-2 flex-1 !text-xs !p-1 !m-0 hover:!bg-purple-100 !bg-purple-50">
                                            <OpenInNewIcon className="w-4 h-4" />
                                           <a href={project.link}>Live Demo</a> 
                                        </Button>
                                    </div>
                                </div>
                            </div>
                     </RevealOnScroll>
                )
            })}

                    {/*=== PROJECTS ==== */}
                </div>
            </div>
        </div>
       
    )
}

