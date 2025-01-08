import { MdSpaceDashboard } from "react-icons/md"
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai"
import  { FaTasks } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
        <img src="../../../public/logo.png" alt="logo" />

        <div>

           <NavLink to="dashboard" title="dashboard">
                <MdSpaceDashboard size={30}/>
           </NavLink>
           
           <NavLink to="calendar" title="calendar">
                <AiFillCalendar size={30}/>
           </NavLink>

           <NavLink to="board" title="board">
                <FaTasks size={30}/>
           </NavLink>

           <NavLink to="users" title="users">
                <AiOutlineTable size={30}/>
           </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
