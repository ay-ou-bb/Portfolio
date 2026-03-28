import {useEffect,useState} from "react"
import imageAbout from "../assets/img/imageAbout.png"
import aboutImageSmal from "../assets/img/aboutImageSmal.png"

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
         <RevealOnScroll>
            <div id="about" className="relative flex justify-center items-center  mb-16">
                <div className=" flex max-md:flex-col justify-center md:justify-around items-center gap-6 my-24 w-5/6 p-6 md:p-16 shadow-2xl">
                    <div >
                        <img src={visible?imageAbout:aboutImageSmal} className="h-[40%] w-full md:w-auto sm:h-[60%] mb-8 md:mb-auto md:h-80 lg:h-auto drop-shadow-[0_5px_20px_rgba(59,130,246,1)]"/>
                    </div>
                    <div className="w-[98%] md:w-[85%] flex justify-center items-center md:justify-start flex-col md:block">
                        <h2 style={{color:theme.palette.secondary.dark,}} className="w-[45%] md:w-96 absolute md:static  sm:text-xl md:text-2xl lg:text-[38px] max-md:text-center font-semibold mb-8 drop-shadow-[2px_5px_2px_rgba(59,130,246,1)] top-[22%] right-[18%]  sm:top-[23%] sm:right-[18%] flex">{t("about.title")}</h2>
                        <div style={{fontWeight:isAr?"bold":"normal"}} className=" w-full text-xs sm:text-sm md:text-base lg:text-lg font-normal flex justify-center items-center flex-col text-gray-600"><p>{t("about.description1")}</p><p className="mt-3">{t("about.description2")}</p></div>
                    </div>
                </div>
            </div>
         </RevealOnScroll>
    )
}