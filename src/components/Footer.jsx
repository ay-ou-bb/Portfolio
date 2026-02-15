import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useTheme} from '@mui/material/styles';


export default function Footer (){
    const theme = useTheme()
    return(
        <div style={{backgroundColor:theme.palette.primary.main}} className="h-[150px] flex flex-col justify-center items-center">
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
                            <GitHubIcon style={{color:"#d1d5db",fontSize:"30px",cursor:"pointer",textColor:"black", borderRadius:"50%"}} />
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