import {useEffect,useState} from "react"
import imageAbout from "../assets/img/imageAbout.png"
import aboutImageSmal from "../assets/img/aboutImageSmal.png"

// mui icone
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';

import {useTheme} from '@mui/material/styles';

import { useTranslation } from 'react-i18next'

import RevealOnScroll from '../assets/animations/RevealOnScroll.jsx';

export default function About(){
    const { t, i18n } = useTranslation();
    const isAr = i18n.language ==="ar";

    const theme = useTheme()

const [visible,setVisible] = useState(false);

useEffect(()=>{

        const handleResize = ()=>{
            if (window.innerWidth < 768){
                setVisible(false)
            }else {
                setVisible(true)
            }
        };
        handleResize()

        window.addEventListener("resize",handleResize)

        return ()=> window.removeEventListener("resize",handleResize)

    },[])

    return(
            <section id="about" className="py-20 px-4 bg-gray-50">
                 <div className="text-center space-y-4 mb-16">
                    <h2 style={{color:theme.palette.secondary.dark,}} className="text-4xl md:text-5xl font-bold text-gray-900">{t("about.title")}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("about.title2")}</p>
                 </div>
                 <RevealOnScroll>
                 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                                <WorkOutlineIcon className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">4+</h3>
                            <p className="text-gray-600">Projects Completed</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
                                <MilitaryTechIcon className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">1+</h3>
                            <p className="text-gray-600">Years Experience</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="inline-flex p-4 bg-purple-100 rounded-full mb-4">
                                <FavoriteIcon className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                            <p className="text-gray-600">Client Satisfaction</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="inline-flex p-4 bg-orange-100 rounded-full mb-4">
                                <SchoolIcon className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">1+</h3>
                            <p className="text-gray-600">Certifications</p>                            
                        </div>
                    </div>

                    <div className="text-center space-y-4  bg-white p-6 md:p-0 flex justify-center items-center  rounded-xl shadow-md md:h-full mx-1">
                        <div style={{fontWeight:isAr?"bold":"normal"}} className=" w-full text-xs sm:text-sm md:text-base lg:text-lg font-normal flex justify-center items-center flex-col text-gray-600"><p>{t("about.description1")}</p><p className="mt-3">{t("about.description2")}</p></div>
                    </div>
                </div>
                </RevealOnScroll>
            </section>
        
    )
}