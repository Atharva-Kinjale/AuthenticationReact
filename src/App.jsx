
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

import HomePage from './Pages/Home'
import PublicPage from './Pages/public'
import LoginPage from './Pages/login'
import DashBoardPage from './Pages/dashboard'
import RootLayout from './Pages/RootLayout'
import ErrorPage from './Pages/Error'
import DashBoardPrtector from './Components/dashBoardprotection'



function App() {
  const router=createBrowserRouter([
    {path:'/',element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index: true,element:<HomePage/>},
      {path:'public' ,element:<PublicPage/>},
      {path:'login',element:<LoginPage/>},
      {element :<DashBoardPrtector/>,children:[
        {path:'dashboard',element:<DashBoardPage/>}

      ]},
      
    ]},
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
