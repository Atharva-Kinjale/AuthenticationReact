import { redirect } from "react-router-dom";

export function actions(){
    localStorage.removeItem('token')
    return redirect('/');
}