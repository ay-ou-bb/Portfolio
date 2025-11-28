import { FaAlignJustify,FaXmark } from "react-icons/fa6";
import Navbar from "../components/Navbar.jsx"
import {useState, useEffect} from "react"
import SideMenu from "../components/SideMenu.jsx"
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
        
        <div className="w-full flex justify-center items-center  flex-col bg-[#0F172A] text-white flex" >
            <div className="flex items-center justify-between w-full">
                <h3 className="mx-8  basis-1/5 text-[#F8FAFC] font-bold">{name}</h3>
                <Navbar visible = {visible || open}/>
                <div className="basis-1/5 flex justify-end items-center p-6">
                    <FaAlignJustify  style={{display:visible?"block":"none", cursor:"pointer"}}  size={30}  
                    onClick={handleMenuSideOpen}/>

                    <FaXmark size={30} style={{display:open?"block":"none", cursor:"pointer"}} onClick={handleMenuSideclose}/>
                    
                </div>
            </div>
            
            <div>
                <div className="flex w-2/5 flex-col">
                    <h1>Hello, I’mBrooklyn Gilbert</h1>
                    <h4>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design</h4>
                </div>
                <div></div>
            </div>
            <SideMenu open={open}/>
        </div>
    )
    
}


