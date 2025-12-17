import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import { FaGithub } from "react-icons/fa";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer (){
    return(
        <div className="bg-[#0F172A] h-[150px] flex flex-col justify-center items-center">
           <div className=" w-[40%] flex justify-around items-center">
                        <a
                        href="https://www.linkedin.com/in/ayoub-el-hyaoui-24953b2b3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full"
                        >
                            <LinkedInIcon  style={{color:"#d1d5db",fontSize:"30px",cursor:"pointer",textColor:"black", borderRadius:"50%"}}/>
                        </a>

                       

                         {/* <a
                            href="https://web.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <FacebookIcon style={{color:"#d1d5db",fontSize:"30px",cursor:"pointer",textColor:"black", borderRadius:"50%"}}/>
                        </a> */}

                         <a
                            href="https://github.com/ay-ou-bb"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <FaGithub style={{color:"#d1d5db",fontSize:"30px",cursor:"pointer",textColor:"black", borderRadius:"50%"}} />
                        </a>

                        <a
                            href="mailto:ayoubbo3333@gmail.com"
                            >
                            <AlternateEmailRoundedIcon style={{color:"#d1d5db",fontSize:"30px",cursor:"pointer",textColor:"black", borderRadius:"50%"}} />
                        </a>
                        
                        
                    </div>
                <p className="text-gray-300 mt-8">copyright&copy;2025</p>
        </div>
    )
}