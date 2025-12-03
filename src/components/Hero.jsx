import { FaAlignJustify,FaXmark } from "react-icons/fa6";
import Navbar from "../components/Navbar.jsx"
import {useState, useEffect} from "react"
import SideMenu from "../components/SideMenu.jsx"
import MyProfile from "../assets/profilePhoto.png"
import gearWhite from "../assets/gearWhite.png"
import "../style.css"



export default function Hero(){

    let name = "{Ayoub.dev}"

    const [visible,setVisible] = useState(false);
    const  [open ,setOpen ] = useState(false)

    function handleMenuSideOpen(){
      setOpen(true)  
      setVisible(false)
    }

    function handleMenuSideclose(){
      setOpen(false)  
      setVisible(true)
    }

    useEffect(()=>{

        const handleResize = ()=>{
            if (window.innerWidth < 768){
                setVisible(true)
            }else {
                setVisible(false)
            }
        };
        handleResize()

        window.addEventListener("resize",handleResize)

        return ()=> window.removeEventListener("resize",handleResize)

    },[])
    
   
    return(
        
        <div className="w-full flex justify-center items-center  flex-col bg-[#0F172A] text-white " >
            <div className="flex items-center justify-between w-full">
                <h3 className="mx-8  basis-1/5 text-[#F8FAFC] font-bold ">{name}</h3>
                <Navbar visible = {visible || open}/>
                <div className="basis-1/5 flex justify-end items-center p-6 ">
                    <FaAlignJustify className="fixed"  style={{display:visible?"block":"none", cursor:"pointer"}}  size={30}  
                    onClick={handleMenuSideOpen}/>

                    <FaXmark className="fixed" size={30} style={{display:open?"block":"none", cursor:"pointer"}} onClick={handleMenuSideclose}/>
                    
                </div>
            </div>
            
            <div className="flex justify-center items-center mt-16 flex-col-reverse   md:justify-around mb-16  md:mt-24  flex-col md:flex-row ">
                <div className="flex flex-col w-4/5 flex-col items-center md:items-start md:w-2/5   md:text-left ">
                    <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full ">Hello, I’m <br/> <span className="text-[#6366F1]"> Ayoub EL HYAOUI</span></p>
                    <p className=" xxs:text-lg lg:text-[18px] my-6">I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design</p>
                </div>
                <div className="">
                    <img src={MyProfile} className="h-72 mb-8 md:mb-auto md:h-96 lg:h-auto drop-shadow-[0_5px_20px_rgba(59,130,246,1)]" />
                    <img src={gearWhite} className="h-10 md:h-14 lg:h-16 absolute top-[64%] right-[42%] md:top-[52%] md:right-[17%] lg:top-[62%] lg:right-[17%] animate-spin "/>
                    <img src={gearWhite} className="h-8 md:h-12 lg:h-14 md:h-12 lg:h-14 absolute top-[64%] right-[50%] md:top-[52%] md:right-[22%] lg:top-[62%] lg:right-[21%] animate-spin-rev "/>
                </div>
            </div>
            <SideMenu open={open}/>
        </div>
    )
    
}


