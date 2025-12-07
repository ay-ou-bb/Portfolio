import { GoIssueClosed } from "react-icons/go";
export default function PopupContact({isVisible, errorMessage=null}){


     
     if(isVisible)
      {
         document.body.style.overflow="hidden"
        return(
            
          <div className=" w-full h-[1000px] z-10 flex justify-center items-center absolute bg-[rgba(0,0,0,0.5)]" >
              <div className=" absolute rounded-lg text-black w-[30%] flex justify-center items-center flex-col text-green-200 p-14  bg-white" >
                <GoIssueClosed className="h-16 w-16 text-green-400 relative top-[-10px] " />
                  {/* <h1>The Form Has Been Submitted Successfully</h1> */}
                  <h1 className="m-8" style={{color:errorMessage!=null ? "red":"green"}}>{errorMessage!=null ? errorMessage : "Success"}</h1>
                  <p>Your messaage has been sent!</p>
              </div>

          </div>)
      } else{
        document.body.style.overflow="auto"
        return <></>
      }
    
 }

//  .popup-notif{
//     color:green;
    
//     padding:20px ;
//     background-color:white;

// }