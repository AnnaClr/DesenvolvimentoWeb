import { Container } from "./style"
import { Header } from "../components/Header/index"
import { Outlet } from 'react-router-dom'
import { Home } from "../components/Home"
// import QuizGame from "../components/GameOn"
// import { GameOver } from "../components/GameOver"
// import { useContext } from 'react'
// import { QuizContext } from '../context/quiz.jsx'

export function App() {
  // const [quizState] = useContext(QuizContext) 
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
      
       </Container>
       
  )
}
