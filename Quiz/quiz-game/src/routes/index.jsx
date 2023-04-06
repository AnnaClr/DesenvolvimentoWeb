import { createBrowserRouter } from "react-router-dom"
import { App } from "../App/App"
import { About } from "../components/About"
import { Home } from "../components/Home"
import  QuizGame  from "../components/GameOn"
//import { PageError } from "../pages/PageError"

export const routes = createBrowserRouter([
    {
        path: '/', 
        element: <App/>, 
        //errorElement: <PageError/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/about', element: <About/>},
            {path: '/quizgame', element: <QuizGame/>},
        ]},
])