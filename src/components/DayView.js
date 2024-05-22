import React from 'react';
import {useDispatch} from "react-redux"
import { actions } from "../Redux/reducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const DayView = ({day}) =>{
  
  // get today date
  const today=new Date();
  // get day from today date
  const todayDay=today.getDay();
  // call use dispatch hook a variable call dispatch
  const dispatch=useDispatch();
  // get date details from providing date
  const date=new Date(day.yyyy,day.mm,day.dd);
  
  // function call after click done icon--------------
  const markToDone=()=>{
    if(day.id>todayDay){
      toast.error("You cannot change your next days status");
      return;
    }
    // call habit done action from reducer
    dispatch(actions.habitDone(day.id));
    toast.success("Habit Set To Done")
  
  }
  // -------------------------------------------------

  // function call after click undone icon------------
  const markToUnDone=()=>{
    if(day.id>todayDay){
      toast.error("You cannot change your next days status");
      return;
    }
    // call habit undone action from reducer
    dispatch(actions.habitUnDone(day.id))
    toast.success("Habit Set To UnDone")
  }
  // --------------------------------------------------

  // function call after click none icon--------------
  const markToNone=()=>{
    if(day.id>todayDay){
      toast.error("You cannot change your next days status");
      
      return;
    }
    // call habit none action from reducer
    dispatch(actions.habitNone(day.id));
    toast.success("Habit Set To None")
  }
  // -------------------------------------------------

  return(
    <>
        <script
      src="https://kit.fontawesome.com/14097a442a.js"
      crossorigin="anonymous"
    ></script>
  <div className="day-view">
  <h5 className="text-center">{day.day}</h5>
  <p style={{fontSize:"15px",textAlign:"center"}}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
  <span style={{display:"flex"}}>
  <i  className={day.isDone===true?"bi bi-check-circle-fill":"bi bi-check-circle"} onClick={markToDone}></i>
  <i  className={day.isDone===false?"bi bi-x-circle-fill":"bi bi-x-circle"} onClick={markToUnDone}></i>
  <i  className={day.isDone===""?"bi bi-dash-circle-fill":"bi bi-dash-circle"} onClick={markToNone}></i>
  </span>
  </div>
  </>
    )
}
