import {useEffect,useState} from "react"
import imageAbout from "../assets/imageAbout.png"
import aboutImageSmal from "../assets/aboutImageSmal.png"



export default function About(){

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
        <div id="about" className="relative flex justify-center items-center ">
            <div className=" flex max-md:flex-col justify-center md:justify-around items-center gap-6 my-24 w-5/6 p-6 md:p-16 shadow-2xl">
                <div >
                    <img src={visible?imageAbout:aboutImageSmal} className="h-[40%] w-full md:w-auto sm:h-[60%] mb-8 md:mb-auto md:h-80 lg:h-auto drop-shadow-[0_5px_20px_rgba(59,130,246,1)]"/>
                </div>
                <div className="w-[98%] md:w-[90%] text-left flex justify-center items-center flex-col md:block">
                    <h2 className="w-[45%] md:w-96 absolute md:static  sm:text-xl md:text-2xl lg:text-[38px] max-md:text-center font-semibold mb-8 drop-shadow-[2px_5px_2px_rgba(59,130,246,1)] top-[22%] right-[18%]  sm:top-[23%] sm:right-[18%]">I am front-End Devceloper </h2>
                    <div className=" w-full text-xs sm:text-sm md:text-base lg:text-lg font-normal flex justify-center items-center flex-col text-gray-600"><p>i'm a front-End Devceloper passionte about building clean, responsive, and user-friendly web interfaces. i enjoy turning ideas into real, functional designs using modern tools and best practices. I work with HTML, CSS, JavaScript, tailwind CSS, and React to Create fast and intuitive experiences that look great on all devices. I'm always learning and improving to deliver better, more polished work </p><p className="mt-3">I design and develop services for customers specializing creating stylish, modern websites, web services.</p></div>
                </div>
            </div>
        </div>
    )
}