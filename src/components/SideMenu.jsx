import {Link} from "react-scroll"

export default function SideMenu({open}){
    return (
        <div>
            <div className={` w-[60%] border-solid border-black border-2 fixed top-14 right-14 bg-[#1E293B] text-[#F8FAFC] p-8  `} style={{display:open?"flex":"none"}}>
                <ul className="flex justify-center items-center flex-col w-full">
                      <li className="cursor-pointer my-2 "><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <hr style={{border:"0,5px solid gray ", width:"90%"}}/>
                    <li className="cursor-pointer my-2 "><Link to="about" smooth={true} duration={500} >About</Link></li>
                    <hr style={{border:"0,5px solid gray ", width:"90%"}}/>
                    <li className="cursor-pointer my-2"><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
                    <hr style={{border:"0,5px solid gray", width:"90%"}}/>
                    <li className="cursor-pointer my-2"><Link to="project" smooth={true} duration={500} >Projects</Link></li>
                    <hr style={{border:"0,5px solid gray", width:"90%"}}/>
                    <li className="cursor-pointer my-2"><Link to="contact" smooth={true} duration={500} >Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}