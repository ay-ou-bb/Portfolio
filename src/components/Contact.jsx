export default function Projects(){
    return(
        <div className="mt-24 mb-24 flex justify-center items-center  ">
            <div className="  w-[90%]  flex flex-col-reverse md:flex-row-reverse  justify-around items-center border border-gray-400 border-solid p-2 md:p-8">
                <form className=" mb-16 md:mb-0 w-[90%]  md:w-[40%] flex flex-col justify-center items-center">
                    <div className="mb-4 w-[100%] md:w-[80%] flex flex-col items-start "> 
                        <lable className=" mb-1 ">Full Name</lable>
                        <input
                        type="text"
                        placeholder="Enter your full name"
                        className="bg-white w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4 w-[100%] md:w-[80%] flex flex-col items-start ">
                        <lable className=" mb-1 ">E-mail</lable>
                        <input
                        type="text"
                        placeholder="example@mail.com"
                        className="bg-white w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4 flex w-[100%] md:w-[80%] flex-col items-start ">
                        <lable className=" mb-1 ">Message</lable>
                        <textarea 
                            placeholder="Type your message ..."
                            className="bg-white w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div className=" w-[100%] md:w-[80%] flex justify-end items-end">
                        <button className=" hover:text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 border border-blue-500 border-1 bg-white " type="submit">Send</button>
                    </div>
                </form>

                <div className=" w-[90%] md:w-[50%] md:h-[300px] flex flex-col items-center justify-start mb-10 md:mb-0">
                    <h1 className="mb-4 text-3xl md:text-4xl  lg:text-5xl">Contact us</h1>
                    <p className="text-sm md:text-base lg:text-lg font-normal">fell free to reach out if you have a project in mind, a question about my work, or simply want to connect. I'm always open to discussing new ideas and opportunities</p>
                </div>
            </div>
        </div>
    )
}