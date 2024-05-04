import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

export default function RootLayout(){
    return(<>
    
    <MainNavigation/>
    <main>
        <Outlet/>
    </main>
    </>)
}