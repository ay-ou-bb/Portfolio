import landingPage from "../assets/landingPage.png"
import { LuExternalLink } from "react-icons/lu";
import notAvailable  from "../assets/notAvailable.png"

export default function Projects(){

    const isDisabled = true

    return(
        <div id="project" className="flex  flex-col mt-24">
            <h1 className="font-bold text-2xl md:text-3xl mb-6 md:mb-4 lg:text-4xl drop-shadow-[2px_5px_2px_rgba(59,130,246,1)]">Projects</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-around">
                <div className=" w-[80%] mb-12 md:mb-0 md:w-[25%] shadow-[5px_10px_15px_rgba(0,0,0,0.25)] p-4 bg-[#F8FAFC] border border-gray-100  rounded-xl">
                    <img className="border border-gray-200" src={landingPage}/>
                    <div className="p-2 m-2 flex flex-col justify-center items-center">
                        <h2 className="text-xl md:text-2xl font-bold">Physiotherapy</h2>
                        <p className="m-2 text-sm md:text-base">improving the quality of life</p> 
                        <button className="bg-[#3B82F6] text-white flex justify-between items-center gap-2">
                            <a className="text-white" href="https://ay-ou-bb.github.io/Physiotherapy/">Open Link</a>
                            <span><LuExternalLink/></span>
                        </button>
                         
                    </div>
                </div>

               <div className=" w-[80%] mb-12 md:mb-0 md:w-[25%] shadow-[5px_10px_15px_rgba(0,0,0,0.25)] p-4 bg-[#F8FAFC] border border-gray-100  rounded-xl">
                    <img className="border border-gray-200" src={notAvailable}/>
                    <div className="p-2 m-2 flex flex-col justify-center items-center">
                        <h2 className="text-xl md:text-2xl font-bold">not available</h2>
                        <p className="m-2 text-sm md:text-base">this product is not yet complete</p> 
                        <button disabled={isDisabled} style={{background:isDisabled?"#cccccc":"blue"}} className="bg-[#3B82F6] text-white flex justify-between items-center gap-2">Open Link <span><LuExternalLink/></span></button>
                    </div>
                </div>

                <div className=" w-[80%] mb-12 md:mb-0 md:w-[25%] shadow-[5px_10px_15px_rgba(0,0,0,0.25)] p-4 bg-[#F8FAFC] border border-gray-100  rounded-xl">
                    <img className="border border-gray-200" src={notAvailable}/>
                    <div className="p-2 m-2 flex flex-col justify-center items-center">
                        <h2 className="text-xl md:text-2xl font-bold">not available</h2>
                        <p className="m-2 text-sm md:text-base">this product is not yet complete</p> 
                        <button  disabled={isDisabled} style={{background:isDisabled?"#cccccc":"blue"}} className="bg-[#3B82F6] text-white flex justify-between items-center gap-2">Open Link <span><LuExternalLink/></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}