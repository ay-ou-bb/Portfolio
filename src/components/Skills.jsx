import React from "react"
import "../style.css"
import { useTranslation } from 'react-i18next'
import {useTheme} from '@mui/material/styles';

export default function Skills(){
    const { t, i18n } = useTranslation();
     const theme = useTheme()
    
    return(

        <div id="skills" className="w-full flex flex-col justify-center items-center mt-16">
            <h1 style={{color:theme.palette.secondary.dark,}} className=" font-bold text-2xl md:text-3xl mb-6 md:mb-12 lg:text-4xl drop-shadow-[2px_5px_2px_rgba(59,130,246,1)]">{t("skills.title")}</h1>
            <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center">
                <div className="container relative flex justify-center items-center flex-col raduis-md w-[80%] md:w-[40%] py-[10px] px-[20px]">
                    <div className="skill-box">
                        <span className="title">HTML</span>
                        <div className="skill-bar ">
                            <span style={{backgroundColor:theme.palette.primary.light}} className="skill-per html">
                                <span style={{backgroundColor:theme.palette.primary.light}} className="tooltip">95%</span>
                            </span>
                        </div>
                    </div>

                    <div className="skill-box">
                        <span className="title">CSS</span>
                        <div className="skill-bar ">
                            <span style={{backgroundColor:theme.palette.primary.light}} className="skill-per css">
                                <span style={{backgroundColor:theme.palette.primary.light}} className="tooltip">80%</span>
                            </span>
                        </div>
                    </div>

                    <div className="skill-box">
                        <span className="title">JavaScript</span>
                        <div className="skill-bar ">
                            <span style={{backgroundColor:theme.palette.primary.light}} className="skill-per javascript">
                                <span style={{backgroundColor:theme.palette.primary.light}} className="tooltip">60%</span>
                            </span>
                        </div>
                    </div>

                    <div className="skill-box">
                        <span className="title">React js</span>
                        <div className="skill-bar ">
                            <span style={{backgroundColor:theme.palette.primary.light}} className="skill-per react">
                                <span style={{backgroundColor:theme.palette.primary.light}} className="tooltip">50%</span>
                            </span>
                        </div>
                    </div>
                
                </div>
                <div style={{backgroundColor:theme.palette.primary.light}} className="w-[80%] md:w-[40%] p-6 md:p-16 mt-16 md:mt-0 md:ml-16 bg-[#3B82F6] text-[#F8FAFC] rounded-xl shadow-[5px_10px_15px_rgba(0,0,0,0.25)] text-center">
                    <h1 className="mb-8 text-3xl md:text-4xl  lg:text-5xl text-center">{t("skills.Overview")}</h1>
                    <p className="text-sm md:text-base lg:text-lg font-normal">{t("skills.description")}</p>
                </div>
            </div>
        </div>
    )
}