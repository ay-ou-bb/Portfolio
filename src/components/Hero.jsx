import { FaAlignJustify } from "react-icons/fa6";
import Navbar from "../components/Navbar.jsx"
import {useState, useEffect} from "react"
export default function Hero(){

    let name = "{Ayoub.dev}"

    const [visible,setVisible] = useState(false)

    useEffect(()=>{

        const handleResize = ()=>{
            if (window.innerWidth < 768){
                setVisible(true)
            }else{
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
                <h3 className="mx-8 mt-4 basis-1/5 text-[#F8FAFC] font-bold">{name}</h3>
                <Navbar visible = {visible}/>
                <div className="basis-1/5 flex justify-end items-center p-6">
                    <FaAlignJustify style={{display:visible?"block":"none"}} size={30}/>
                </div>
            </div>
            
            <h1>
                hero
            </h1>
        </div>
    )
}