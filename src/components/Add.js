import "../App.js"
import {useSelector} from "react-redux"
import { habitSelector } from "../Redux/reducer.js"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { actions } from "../Redux/reducer.js"
import { toast } from "react-toastify"

export const AddHabit = () =>{
    const habits = useSelector(habitSelector)
    const dispatch = useDispatch()
// function for dipatch delete action 
    const deleteHabit = (index) =>{
        dispatch(actions.delete(index))
        toast.success("Habit Deleted Succesfully")
    }
// Set Id LocalStorage for use  
const setId = (id) =>{
localStorage.setItem("id",id)
}
return(
<>
<div className={"flex-container"}>
{habits.map((habit,index)=>
<div className={"habit"}>
<h5>{habit.name}</h5>
<div>
<Link to={"/week-view"}><button type="button" className="btn btn-danger" onClick={()=>setId(index)}>Week View</button></Link>
<button type="button" className="btn btn-danger" onClick={()=>deleteHabit(index)}>Delete</button></div></div>
)}
</div>
</>
)
}