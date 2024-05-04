import { NavLink } from "react-router-dom";
import classes from './LoginLogout.module.css';
import { actions as LogoutAction} from "../Pages/Logout";


export default function LoginLogout(){
    
    return(<>
    <ul className={classes.list}>
      <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Login
          </NavLink>
        </li>
        <li>
            <NavLink
               onClick={LogoutAction}>
              Logout
            </NavLink>
          </li>
      </ul>
   
    </>)
}