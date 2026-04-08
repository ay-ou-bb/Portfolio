
import HeroRight from "../assets/img/HeroRight.png"
import HeroLeft from "../assets/img/HeroLeft.png"
 import "../style.css"
// ANIMATION
import BlurText from "../assets/animations/BlurText.jsx";
import SplitText from '../assets/animations/SplitText.jsx';
// MATERIAL UI
import Container from '@mui/material/Container';
import {useTheme} from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';

import {Link} from "react-scroll";

// translation
import { useTranslation } from 'react-i18next'

import RevealOnScroll from '../assets/animations/RevealOnScroll.jsx';

export default function Hero(){

    const { t, i18n } = useTranslation();
     const isAr = i18n.language ==="ar";
    

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
                                    className="text-5xl md:text-7xl font-bold text-gray-900"
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
                        
                         <div className="flex flex-wrap gap-4 justify-center items-center">
                             <Link className=" text-black hover:text-[#6366F1] font-semibold"offset={-80} to="projects" smooth={true} duration={500}>
                                <Button variant="contained" size="lg" className="gap-2">
                                    View My Work
                                    <ArrowRightAltIcon className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link className=" text-black hover:text-[#6366F1] font-semibold"offset={-80} to="contact" smooth={true} duration={500}>
                                <Button variant="outline" size="lg" className="gap-2  !border !border-white">
                                    <MailOutlineIcon className="w-4 h-4" />
                                    Contact Me
                                </Button>
                            </Link>
                           
                        </div>

                         <div className="flex gap-4 justify-center pt-4">
                            <a
                                href="https://github.com/ay-ou-bb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transition-transform"
                            >
                                <GitHubIcon className="w-6 h-6 text-gray-700" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ayoub-el-hyaoui-24953b2b3/"
                                target="_blank"
                                            rel="noopener noreferrer"
                                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transition-transform"
                            >
                                <LinkedInIcon className="w-6 h-6 text-blue-600" />
                            </a>
                            <a
                                href="mailto:ayoubbo3333@gmail.com"
                                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transition-transform"
                            >
                                <MailOutlineIcon className="w-6 h-6 text-gray-700" />
                            </a>    
                        </div>
                    </div>
                    {/*===== CONTAIN THE NAME AND DESCRIPTION  ====*/}

                    {/* CONTAIN THE THE IMAGE AND IMAGE OF ANIMATION  */}
                    <div className="relative ">
                        <img src={isAr?HeroLeft:HeroRight} className="w-[150px] md:w-96 lg:w-[700px]"/>
                    </div>
                    {/*===== CONTAIN THE THE IMAGE AND IMAGE OF ANIMATION HE ========*/}
                </div>            
            </Container>
        </RevealOnScroll>

    )
    
}


