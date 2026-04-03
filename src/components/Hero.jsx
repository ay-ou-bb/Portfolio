// IMAGE
import MyProfile from "../assets/img/undraw_hero.png"
// import MyProfile from "../assets/img/profilePhoto.png"
// import gearWhite from "../assets/img/gearWhite.png"
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
            <Container maxWidth={false} sx={{backgroundColor:theme=>theme.palette.primary.light}}  id="home" className="z-10 w-full flex justify-center items-center  flex-col  text-white mb-16 mb:mb-24 lg:min-h-[90vh]">
                <div  className="flex justify-cente items-center mt-20 flex-col-reverse md:justify-around mb-16 md:mt-26 flex-col md:flex-row ">
                    
                    {/* CONTAIN THE NAME AND DESCRIPTION  */}
                    <div  className=" w-auto">
                        <div  className="flex flex-col   w-full"> 
                        <p className=" text-[1.6rem] md:text-5xl sm:text-4xl w-full items-center flex justify-center md:justify-start  font-semibold">{t("hero.hello")} </p>
                            <div style={{color:theme.palette.secondary.main}} className="w-full items-center flex justify-center md:justify-start m">                          
                                <SplitText
                                    text={t("hero.name")}
                                    className="text-[2.2rem]  sm:text-5xl md:text-6xl font-semibold "
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
                        <div className=" sm:my-6 md:0 flex justify-center items-center ">
                            <BlurText
                                text={t("hero.description")}
                                delay={200}
                                animateBy="words"
                                direction="top"
                                className="text-[18px] sm:text-xl md:text-2xl lg:text-3xl mb-8 text-center flex justify-center items-center md:justify-start "
                            />
                        </div> 
                    </div>
                    {/*===== CONTAIN THE NAME AND DESCRIPTION  ====*/}

                    {/* CONTAIN THE THE IMAGE AND IMAGE OF ANIMATION  */}
                    <div className="relative ">
                        <div className="mx-8 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border border-white border-solid rounded-full">

                        </div>
                    </div>
                    {/*===== CONTAIN THE THE IMAGE AND IMAGE OF ANIMATION ========*/}
                </div>            
            </Container>
        </RevealOnScroll>

    )
    
}


