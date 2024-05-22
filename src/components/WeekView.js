import { useSelector } from "react-redux"
import { habitSelector } from "../Redux/reducer"
import { DayView } from "./DayView"
import { Link } from "react-router-dom"
export const WeekView = () =>{
  const habits = useSelector(habitSelector) 
// create object for store data
  let habit={}
// Store Data in habit Object for Send to Day View
  for(let i=0;i<habits.length;i++){
    if(habits[i].id===Number(localStorage.getItem("id"))){
      habit=habits[i];
    }
  }
  return(
    <>
  <h1 className="text-center" style={{textTransform:"capitalize"}}>{habit.name}</h1>
  <div className="week-view">
  {habit.weekLog.map((day,index)=><DayView day={day} key={index}/>)}
  </div>
  
  <Link to="/">
  <button className="btn btn-primary" type="button" style={{color:"white",margin:"10px",marginLeft:"45%"}}>
    Back to Detail View
  </button>
  </Link>
  </>
    )
}