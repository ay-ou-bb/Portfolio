import introductionFrontEnd  from "../assets/img/certificates/introductionFrontEnd.jpg"
import { useTranslation } from 'react-i18next'
import {useTheme} from '@mui/material/styles';

import RevealOnScroll from '../assets/animations/RevealOnScroll.jsx';


export default function Certificates (){
     const { t, i18n } = useTranslation();
     const theme = useTheme()
    return (
        <>
            <div class=" mx-auto bg-white rounded-xl shadow-md overflow-hidden w-[80%] max-w-5xl mb-16 md:mb-24">
                <h1 style={{color:theme.palette.secondary.dark,}} className="font-bold text-center text-2xl md:text-3xl mb-6 md:mb-12 lg:text-4xl drop-shadow-[2px_5px_2px_rgba(59,130,246,1)]">{t("certificates.title")}</h1>
                <RevealOnScroll>
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <img class="h-64 w-full object-cover md:h-full md:w-64" src={introductionFrontEnd} alt="introduction to front-end developement"/>
                        </div>
                        <div class="p-8">
                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                            <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </>
    )
}