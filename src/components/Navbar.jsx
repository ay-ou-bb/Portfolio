export default function Navbar({visible}){
    return(
        <div className="basis-3/5 p-2 mt-4 bg-[#1E293B] rounded-md "style={{display :visible?"none":"block"}} >
            <ul className="flex justify-around " >
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Skills</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
            
        </div>
    )
}

//   <Hero/>
//         <About/>
//         <Skills/>
//         <Projects/>
//         <Contact/>