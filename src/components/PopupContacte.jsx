
export default function PopupContact({isVisible, errorMessage=null}){


     
     if(isVisible)
      {
         document.body.style.overflow="hidden"
        return(
            
          <div className="w-full h-[1000px] z-10 flex justify-center items-center absolute bg-[rgba(0,0,0,0.5)]" >
              <div className="text-green-200 p-16  bg-white" >
                  {/* <h1>The Form Has Been Submitted Successfully</h1> */}
                  <h1 style={{color:errorMessage!=null ? "red":"green"}}>{errorMessage!=null ? errorMessage : "The Form Has Been Submitted Successfully"}</h1>
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