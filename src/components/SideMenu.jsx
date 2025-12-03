export default function SideMenu({open}){
    return (
        <div>
            <div className="w-[60%] border-solid border-black border-2 fixed top-14 right-14 bg-[#1E293B] text-[#F8FAFC] p-8 z-10" style={{display:open?"flex":"none"}}>
                <ul className="flex justify-center items-center flex-col w-full">
                    <li className="cursor-pointer my-2 ">About</li>
                    <hr style={{border:"0,5px solid gray ", width:"90%"}}/>
                    <li className="cursor-pointer my-2">Skills</li>
                    <hr style={{border:"0,5px solid gray", width:"90%"}}/>
                    <li className="cursor-pointer my-2" >Projects</li>
                    <hr style={{border:"0,5px solid gray", width:"90%"}}/>
                    <li className="cursor-pointer my-2">Contact</li>
                </ul>
            </div>
        </div>
    )
}