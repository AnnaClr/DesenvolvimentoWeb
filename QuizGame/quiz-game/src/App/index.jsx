import { Container } from './style.js'
import { Header } from '../components/Header/index.jsx'
import { Outlet } from 'react-router-dom'
import { QuizContext } from '../context/quiz.jsx'
import { Home } from '../pages/Home/index.jsx'
import { QuizQuestion } from '../pages/QuizQuestions/index.jsx'
import { FinalPage } from '../pages/FinalPage/index.jsx'
import { useContext } from 'react'

export function App() {
  const [quizState] = useContext(QuizContext) 
  return (
    <Container>
      <header>
         <Header/>
       </header>
       <main>
         <Outlet/>
       </main>
       <footer>
        <p>Web Developer Course</p>
       </footer>
       
      {quizState.gameStage === "Start" && <Home/>}
      {quizState.gameStage === "Playing" && <QuizQuestion/>}
      {quizState.gameStage === "Gameover" && <FinalPage/>}
    </Container>
  )
}