// IMAGE
import MyProfile from "../assets/img/profilePhoto.png"
import gearWhite from "../assets/img/gearWhite.png"
 import "../style.css"
// ANIMATION
import BlurText from "../assets/animations/BlurText.jsx";
import SplitText from '../assets/animations/SplitText.jsx';
// MATERIAL UI
import Container from '@mui/material/Container';
import {useTheme} from '@mui/material/styles';

// translation
import { useTranslation } from 'react-i18next'

import RevealOnScroll from '../assets/animations/RevealOnScroll.jsx';

export default function Hero(){

    const { t, i18n } = useTranslation();
    

    const theme = useTheme()
    return(
        <RevealOnScroll>
            <Container maxWidth={false} sx={{backgroundColor:theme=>theme.palette.primary.light}}  id="home" className="z-10 w-full flex justify-center items-center  flex-col  text-white mb-16 ">
                <div  className="flex justify-cente items-center mt-20 flex-col-reverse md:justify-around mb-16 md:mt-26 flex-col md:flex-row ">
                    {/* CONTAIN THE NAME AND DESCRIPTION  */}
                    <div  className=" w-4/5 md:w-[58%]">
                        <div  className="flex flex-col   w-full"> 
                        <p className="md:text-5xl sm:text-4xl w-full items-center flex justify-center md:justify-start  font-semibold">{t("hero.hello")} </p>
                            <div style={{color:theme.palette.secondary.main}} className="w-full items-center flex justify-center md:justify-start">                          
                                <SplitText
                                    text={t("hero.name")}
                                    className="md:text-5xl font-semibold sm:text-4xl"
                                    delay={50}
                                    duration={1.25}
                                    ease="power3.out"
                                    splitType="words"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    showCallback
                                />
                                </div>
                        </div>
                        <div className=" my-6 flex justify-center items-center ">
                            <BlurText
                                text={t("hero.description")}
                                delay={200}
                                animateBy="words"
                                direction="top"
                                className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl mb-8 text-center flex justify-center items-center md:justify-start "
                            />
                        </div> 
                    </div>
                    {/*===== CONTAIN THE NAME AND DESCRIPTION  ====*/}

                    {/* CONTAIN THE THE IMAGE AND IMAGE OF ANIMATION  */}
                    <div className="relative ">
                        <img src={MyProfile} className="  h-72 mb-8 md:mb-auto md:h-96 lg:h-auto drop-shadow-[0_5px_20px_rgba(59,130,246,1)]" />
                        <img src={gearWhite} className="h-10 md:h-14 lg:h-16 absolute top-[45%] right-[30%] md:top-[50%] md:right-[28%] lg:top-[52%] lg:right-[33%] animate-spin "/>
                        <img src={gearWhite} className="h-8 md:h-12 lg:h-14 md:h-12 lg:h-14 absolute top-[45%] right-[50%] md:top-[50%] md:right-[48%] lg:top-[52%] lg:right-[50%] animate-spin-rev "/>
                    </div>
                    {/*===== CONTAIN THE THE IMAGE AND IMAGE OF ANIMATION ========*/}
                </div>            
            </Container>
        </RevealOnScroll>
    )
    
}


