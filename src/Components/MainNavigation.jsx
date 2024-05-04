import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import LoginLogout from "./LoginLogout";


function MainNavigation() {
  ;
  
  return (
    <header className={classes.header}>
      <nav>
        <ul style={{textDecoration:'none'}} className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/public"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Public Pages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Dashboard
            </NavLink>
          </li>
          
            
        
        
          
          
        </ul>
      </nav>
      <LoginLogout/>
    </header>
  );
}

export default MainNavigation;
