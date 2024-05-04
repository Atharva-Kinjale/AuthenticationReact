import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { isToken } from "./Tokenhandler";

export default function DashBoardPrtector(){
    const navigate=useNavigate()
    const loggedIn=isToken();
    return(<>
    {loggedIn && <Outlet/>||
     <Navigate to='/login'/>} 
    </>)
    
}