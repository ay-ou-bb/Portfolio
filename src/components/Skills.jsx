import React from "react"
import { useTranslation } from 'react-i18next'
import {useTheme} from '@mui/material/styles';

// icons MUI
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import JavascriptIcon from '@mui/icons-material/Javascript';
import BuildIcon from '@mui/icons-material/Build';

import RevealOnScroll from '../assets/animations/RevealOnScroll.jsx';

export default function Skills(){
    const { t, i18n } = useTranslation();
     const theme = useTheme()

     const skills = [
        {
            name: "HTML",
            level: 95,
            icon: CodeIcon,
            color: "bg-orange-500",
            description: "Semantic markup & accessibility",
        },
        {
            name: "CSS",
            level: 90,
            icon: PaletteIcon,
            color: "bg-blue-500",
            description: "Responsive design & animations",
        },
         {
            name: "JavaScript",
            level: 92,
            icon: JavascriptIcon,
            color: "bg-yellow-500",
            description: "ES6+ & async programming",
        },
        {
            name: "React.js",
            level: 88,
            icon: CodeIcon,
            color: "bg-cyan-500",
            description: "Hooks, Context & performance",
        },
        {
            name: "Tailwind CSS",
            level: 85,
            icon: BuildIcon,
            color: "bg-teal-500",
            description: "Utility-first styling",
        },
    ]
    
    return(
        <div id="skills" className=" flex flex-col justify-center mx-2 items-center mb-16 md:mb-24">
            <h1 style={{color:theme.palette.secondary.dark,}} className=" font-bold text-2xl md:text-3xl  lg:text-4xl drop-shadow-[2px_5px_2px_rgba(59,130,246,1)] mb-6 md:mb-12">{t("skills.title")}</h1>
            <RevealOnScroll>
                <div className="grid md:grid-cols-2 gap-6 border border-purple-600 rounded-xl shadow-[5px_10px_15px_rgba(0,0,0,0.25)]">
                    <div className="container relative flex justify-center items-center flex-col raduis-md w-full py-[10px] px-[20px]">

                    {skills.map((skill)=>{
                        const Icon = skill.icon;
                        return(
                        <div className="w-full my-2">
                            <div className="flex">
                                <span className={`title block text-base font-semibold w-8 h-8 p-1 rounded-lg ${skill.color}`}><Icon/></span>
                                <h3 className="font-semibold text-lg text-gray-900 mx-2">{skill.name}</h3>
                            </div>
                            <div className=" ">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Proficiency</span>
                                    <span className="font-semibold text-gray-900">
                                    {skill.level}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className={`${skill.color} h-2.5 rounded-full transition-all duration-1000`}
                                        style={{ width: `${skill.level}%` }}        
                                    ></div>
                                </div>
                            </div>
                        </div>)

                    })}

                    </div>
                    <div style={{backgroundColor:theme.palette.primary.light}} className="w-full md:h-full flex justify-center items-center flex-col text-[#F8FAFC] rounded-xl  text-center p-1">
                        
                        <h1 className="mb-8 text-3xl md:text-4xl  lg:text-5xl text-center">{t("skills.Overview")}</h1>
                        <p className="text-sm md:text-base lg:text-lg font-normal">{t("skills.description")}</p>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
         
    )
}