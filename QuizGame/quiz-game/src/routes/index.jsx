import { createBrowserRouter } from "react-router-dom"
import { App }from "../App/index"
import { About } from "../pages/About"
import { Home } from "../pages/Home"
import { PageError } from "../pages/PageError"
import { QuizQuestions } from "../pages/QuizQuestions"
import { GameOptions } from "../pages/GameOptions"
import { FinalPage } from "../pages/FinalPage"

export const routes = createBrowserRouter([
    {
        path: '/', 
        element: <App/>, 
        errorElement: <PageError/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/quizquestions', element: <QuizQuestions/>},
            {path: '/gameoptions', element: <GameOptions/>},
            {path: '/finalpage', element: <FinalPage/>},
            {path: '/about', element: <About/>}
        ]},
])