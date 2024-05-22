import { NavBar } from "./NavBar"
import { AddHabit } from "./Add"
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Home = () => {
return(
<>
< NavBar />

<AddHabit />
<ToastContainer/>
</>
)}
