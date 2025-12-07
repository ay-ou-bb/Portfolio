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
            <div className=" flex max-md:flex-col justify-around items-center gap-6 my-24 w-5/6 p-6 md:p-16 shadow-2xl">
                <div >
                    
                    <img src={visible?imageAbout:aboutImageSmal} className="h-[70%] mb-8 md:mb-auto md:h-80 lg:h-auto drop-shadow-[0_5px_20px_rgba(59,130,246,1)]"/>
                </div>
                <div className=" w-[90%] text-left flex justify-center items-center flex-col md:block">
                    <h2 className="w-[45%] md:w-96 absolute md:static text-xl sm:text-2xl lg:text-[38px] max-md:text-center font-semibold mb-8 drop-shadow-[2px_5px_2px_rgba(59,130,246,1)] top-[25%] right-[18%]">I am Professional User Experience Designer</h2>
                    <div className=" w-full text-sm md:text-base lg:text-lg font-normal flex justify-center items-center flex-col text-gray-600"><p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p><p className="mt-3">I design and develop services for customers specializing creating stylish, modern websites, web services.</p></div>
                </div>
            </div>
        </div>
    )
}