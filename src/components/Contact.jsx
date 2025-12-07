import {useState,useRef,useEffect} from "react"
import emailjs from "@emailjs/browser"
import PopupContact from "../components/PopupContacte.jsx"


export default function Projects(){

const form = useRef();
const sendEmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm("service_tfsh2q7" , "template_x3odb0o", form.current , "6cSCTnAkuRJglicUg" )
    .then(()=>{
        handelBtnClicked()
    })
}
    // <--this is useState for show the popupModal to the user how send message -->
    const [showModal,setShowModal] = useState(false);
    // <--// this is useState for show the popupModal to the user how send message //-->

    const [inputForm, setInputForm] = useState({fullName:"", email:"",message:""})
    const [errorMessage , setErrorMessage ]= useState(null)

    const isDisabled = inputForm.fullName ==="" ||  inputForm.email==="" || inputForm.message ==="" ;

     function handleDivClick(){
        if(showModal){
       setShowModal(false)
       } 
    }

    
     function handelBtnClicked(){
            setShowModal(true)
     } 
     
     console.log(!navigator.onLine)

    return(
        <div id="contact" className=" flex justify-center items-center  w-full h-full " onClick={handleDivClick}>
            <div className=" mb-16 mt-16  w-[90%]  flex flex-col-reverse md:flex-row-reverse  justify-around items-center border border-gray-400 border-solid p-2 md:p-8">
                <form
                ref={form}
                 onSubmit={sendEmail} 
                 className=" mb-16 md:mb-0 w-[90%]  md:w-[40%] flex flex-col justify-center items-center"
                 >
                 {/* action="https://formsubmit.co/ayoubbo3333@gmail.com"
                 method="POST" */}

                    <div className="mb-4 w-[100%] md:w-[80%] flex flex-col items-start "> 
                        <lable className="mb-1">name</lable>
                        <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your full name"
                        className="bg-white w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={inputForm.fullName}
                        onChange={(event)=>{
                             setInputForm({...inputForm, fullName: event.target.value})
                        }}
                        />
                    </div>

                    <div className="mb-4 w-[100%] md:w-[80%] flex flex-col items-start ">
                        <lable className=" mb-1 ">E-mail</lable>
                        <input
                        type="email"
                        name="email"
                        required
                        placeholder="example@mail.com"
                        className="bg-white w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={inputForm.email}
                        onChange={(event)=>{
                             setInputForm({...inputForm, email: event.target.value})
                        }}
                        />
                    </div>

                    <div className="mb-4 flex w-[100%] md:w-[80%] flex-col items-start ">
                        <lable className=" mb-1 ">Message</lable>
                        <textarea 
                            placeholder="Type your message ..."
                             name="message"
                            className="bg-white w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={inputForm.message}
                            onChange={(event)=>{
                             setInputForm({...inputForm, message: event.target.value})
                        }}
                        ></textarea>
                    </div>

                    <div className=" w-[100%] md:w-[80%] flex justify-end items-end">
                        <button 
                            disabled={isDisabled}
                            style={{background:isDisabled?"#cccccc":"blue",border:isDisabled?"#999999":"" }}
                            className=" text-white hover:text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 border border-blue-500 border-1 bg-white "
                            type="submit"
                            
                           
                           >Send</button>
                    </div>
                </form>
                <PopupContact errorMessage={errorMessage} isVisible={showModal}/> 

                <div className=" w-[90%] md:w-[50%] md:h-[300px] flex flex-col items-center justify-start mb-10 md:mb-0">
                    <h1 className="mb-4 text-3xl md:text-4xl  lg:text-5xl">Contact us</h1>
                    <p className="text-sm md:text-base lg:text-lg font-normal">fell free to reach out if you have a project in mind, a question about my work, or simply want to connect. I'm always open to discussing new ideas and opportunities</p>
                </div>
            </div>
        </div>
    )
}