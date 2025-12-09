import MyProfile from "../assets/profilePhoto.png"
import gearWhite from "../assets/gearWhite.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../style.css"



export default function Hero(){

    
   
    return(
        
        <div id="home" className="z-10 w-full flex justify-center items-center  flex-col bg-[#0F172A] text-white " >
            
            <div className="flex justify-center items-center mt-24 flex-col-reverse   md:justify-around mb-16  md:mt-32  flex-col md:flex-row ">
                <div className="flex flex-col w-4/5 flex-col items-center md:items-start md:w-2/5   md:text-left ">
                    <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full ">Hello, I’m <br/> <span className="text-[#6366F1]"> Ayoub EL HYAOUI</span></p>
                    <p className=" xxs:text-lg lg:text-[18px] my-6">I'm a Freelance front-End Developer specializing in building modern, responsive, and intuitive user interfacesusing the latest web technologies</p>
                    <div className=" w-[40%] flex justify-around items-center">
                        <a
                        href="https://www.linkedin.com/in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <LinkedInIcon style={{color:"#0e76a8",fontSize:"60px",cursor:"pointer"}}/>
                        </a>
                        <a><InstagramIcon style={{color:"#ee2a7b ",fontSize:"60px",cursor:"pointer"}}/></a>
                        <a><FacebookIcon style={{color:"#4267B2",fontSize:"60px",cursor:"pointer"}}/></a>
                        
                    </div>
                </div>
                <div className="relative ">
                    <img src={MyProfile} className="  h-72 mb-8 md:mb-auto md:h-96 lg:h-auto drop-shadow-[0_5px_20px_rgba(59,130,246,1)]" />
                    <img src={gearWhite} className="h-10 md:h-14 lg:h-16 absolute top-[45%] right-[30%] md:top-[50%] md:right-[28%] lg:top-[52%] lg:right-[33%] animate-spin "/>
                    <img src={gearWhite} className="h-8 md:h-12 lg:h-14 md:h-12 lg:h-14 absolute top-[45%] right-[50%] md:top-[50%] md:right-[48%] lg:top-[52%] lg:right-[50%] animate-spin-rev "/>
                </div>
            </div>
            
        </div>
    )
    
}


