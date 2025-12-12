import {Link} from "react-scroll";
import { FaAlignJustify,FaXmark } from "react-icons/fa6";
import {useState,useEffect} from "react"
import SideMenu from "../components/SideMenu.jsx"

export default function Navbar(){

     let name = "{Ayoub.dev}"
 

      const [visible,setVisible] = useState(false);
    
    // this effect count size of the browser and make icons appear
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
    //<--// this effect count size of the browser and make icons appear //-->

     const  [open ,setOpen ] = useState(false)

    function handleMenuSideOpen(){
      setOpen(true)  
    }

    function handleMenuSideclose(){
      setOpen(false)  
    }


    return(
        
        <div className="flex w-full justify-between md:justify-around  fixed top-0  pb-2  z-[999] bg-[#0F172A] mr-4  ">
            <div className=" basis-1/5 flex justify-start">
            <h3 className="mt-6 ml-2  text-[#6366F1] font-bold ">{name}</h3>
            </div>
            <div className="w-[70%]  p-2 mt-2 rounded-md "style={{display :visible ?"none":"block"}} >
                <ul className="flex justify-around w-[80%] bg-[#1E293B] " >
                    <li className="cursor-pointer my-2 hover:font-black"><Link className=" text-white hover:text-[#6366F1] font-semibold hover:font-black"offset={-80} to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className="cursor-pointer my-2 "><Link style={{color:"white", fontWeight:"600"}} to="about" smooth={true} duration={500} >About</Link></li>
                    <li className="cursor-pointer my-2"><Link style={{color:"white", fontWeight:"600"}} to="skills" smooth={true} duration={500} >Skills</Link></li>
                    <li className="cursor-pointer my-2"><Link style={{color:"white", fontWeight:"600"}} to="project" smooth={true} duration={500} >Projects</Link></li>
                    <li className="cursor-pointer my-2"><Link style={{color:"white", fontWeight:"600"}} to="contact" smooth={true} duration={500} >Contact</Link></li>
                </ul>
            </div>
            <div className=" mr-[-6px] basis-1/6 flex justify-end items-center  p-0 md:p-6 " style={{display:!visible?"none":"block"}}>
                    <FaAlignJustify className="fixed text-white top-2 sm:top-0"  style={{display:!open?"block":"none", cursor:"pointer"}}  size={30}  
                    onClick={handleMenuSideOpen}/>

                    <FaXmark className="fixed text-white" size={30} style={{display:open?"block":"none", cursor:"pointer"}} onClick={handleMenuSideclose}/>
                    <SideMenu open={open}/>   
            </div>
         
        </div>
    )
}

