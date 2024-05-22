import {useDispatch} from "react-redux"
import { actions } from "../Redux/reducer"
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const NavBar = () =>{
const dispatch = useDispatch()
// Function for Save Details in State
const handleSave = () =>{
  // Check If Name is Empty
 if (document.getElementById("recipient-name").value === ""){
  toast.error("Habit Name is Mandatory")
  return
 }
  const addHabit = document.getElementById("recipient-name").value
// dispatch Actions To Reducer 
  dispatch(actions.add(addHabit))
  toast.success("Habit Added Succesfully")
  document.getElementById("recipient-name").value="";
}
return(
    <> 
<nav className="navbar navbar-expand-sm bg-primary navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <Link className="nav-link" to="/" >Habit Tracker App</Link>
    </li>


    <li className="nav-item" style={{marginLeft:"1000px"}}>
    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"> + Add Habit</button>
    </li>
  </ul>
</nav>
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add A New Habit</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form >
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Habit Name</label>
            <input type="text" className="form-control" id="recipient-name" />
          </div>
       </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
      </div>
    </div>
  </div>
</div>
    </>      
    )
}