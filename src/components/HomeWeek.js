import { NavBar } from "./NavBar";
import { WeekView } from "./WeekView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const HomeWeek = ()=>{
   return(
   <>
   <NavBar/>
   
   <WeekView/>
   <ToastContainer/>
   </>
   ) 
}