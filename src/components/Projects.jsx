import landingPage from "../assets/landingPage.png"
import { LuExternalLink } from "react-icons/lu";

export default function Projects(){
    return(
        <div className="flex  flex-col mt-24">
            <h1 className="mb-16">Projects</h1>
            <div className="flex justify-around">
                <div className="w-[25%] shadow-[5px_10px_15px_rgba(0,0,0,0.25)] p-4 bg-[#F8FAFC] border border-gray-100  rounded-xl">
                    <img className="border border-gray-200" src={landingPage}/>
                    <div className="p-2 m-2 flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold">TodoList</h2>
                        <p className="m-2">this is my todo list to help other to orgaization dealy work</p> 
                        <button className="bg-[#3B82F6] text-white flex justify-between items-center gap-2">Open Link <span><LuExternalLink/></span></button>
                    </div>
                </div>

                <div className="w-[25%] shadow-[5px_10px_15px_rgba(0,0,0,0.25)] p-4 bg-[#F8FAFC] border border-gray-100  rounded-xl">
                    <img className="border border-gray-200" src={landingPage}/>
                    <div className="p-2 m-2 flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold">TodoList</h2>
                        <p className="m-2">this is my todo list to help other to orgaization dealy work</p> 
                        <button className="bg-[#3B82F6] text-white flex justify-between items-center gap-2">Open Link <span><LuExternalLink/></span></button>
                    </div>
                </div>

                <div className="w-[25%] shadow-[5px_10px_15px_rgba(0,0,0,0.25)] p-4 bg-[#F8FAFC] border border-gray-100  rounded-xl">
                    <img className="border border-gray-200" src={landingPage}/>
                    <div className="p-2 m-2 flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold">TodoList</h2>
                        <p className="m-2">this is my todo list to help other to orgaization dealy work</p> 
                        <button className="bg-[#3B82F6] text-white flex justify-between items-center gap-2">Open Link <span><LuExternalLink/></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}