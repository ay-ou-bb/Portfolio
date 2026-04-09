import introductionFrontEnd  from "../assets/img/certificates/introductionFrontEnd.jpg"
import { useTranslation } from 'react-i18next'
import {useTheme} from '@mui/material/styles';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RevealOnScroll from '../assets/animations/RevealOnScroll.jsx';


export default function Certificates (){
     const { t, i18n } = useTranslation();
     const theme = useTheme()
    return (
        <>
            <div id="certificates" className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden w-[80%] max-w-5xl mb-16 md:mb-24">
                <h1 style={{color:theme.palette.secondary.dark,}} className="font-bold text-center text-2xl md:text-3xl mb-6 md:mb-12 lg:text-4xl drop-shadow-[2px_5px_2px_rgba(59,130,246,1)]">{t("certificates.title")}</h1>
                <RevealOnScroll>
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-64 w-full object-cover md:h-full md:w-64" src={introductionFrontEnd} alt="introduction to front-end developement"/>
                        </div>
                        <div className="p-8 w-full">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{t("certificates.name")}</div>
                            <p className="mt-2 text-gray-500">{t("certificates.overview")}.</p>
                            <div className="flex w-full justify-end items-end">
                                <Button className="flex justify-around items-center !mt-4"
                                sx={{ 
                                    '&:hover': { 
                                    backgroundColor: 'primary.main', 
                                    color: 'white',
                                    border: 'none' 
                                    } 
                                }} 
                                    href="https://coursera.org/share/b5f682cb35cd352efc80cc24b306e2d7"
                                    variant="outlined"
                                    endIcon={<OpenInNewIcon className="mr-2" />}>
                                    {t("certificates.open")}
                                </Button>
                            </div>
                            
                            
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </>
    )
}