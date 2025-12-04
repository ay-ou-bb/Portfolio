import imageAbout from "../assets/imageAbout.png"



export default function About(){
    return(
        <div className="flex justify-center items-center ">
            <div className=" flex max-md:flex-col justify-around items-center gap-6 my-16 w-5/6 p-2 md:p-16 shadow-2xl">
                <div >
                    <img src={imageAbout} className="h-72 mb-8 md:mb-auto md:h-80 lg:h-auto drop-shadow-[0_5px_20px_rgba(59,130,246,1)]"/>
                </div>
                <div className="max-sm:w-full w-[33rem] text-left">
                    <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8 drop-shadow-[2px_5px_2px_rgba(59,130,246,1)]">I am Professional User Experience Designer</h2>
                    <div className="m-0 w-full text-sm md:text-base lg:text-lg font-normal max-md:text-center text-gray-600"><p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p><p className="mt-3">I design and develop services for customers specializing creating stylish, modern websites, web services.</p></div>
                </div>
            </div>
        </div>
    )
}