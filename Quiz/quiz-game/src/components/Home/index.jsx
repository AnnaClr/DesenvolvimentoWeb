import { Container } from "./styled";
import { useContext } from "react";
//import { QuizContext } from "../../context/quiz";
import { NavLink } from "react-router-dom"

export function Home() {
        //const [quizState, dispatch] = useContext(QuizContext)

    return (
        <Container>
            <h1>Quiz de Programação</h1>
            {/* <button className="startButton" onClick={() => dispatch({ type: "ChangeStage" })}>Iniciar</button> */}

            <NavLink to="/quizgame">
              <button className="startButton">Iniciar</button>
            </NavLink>
            
            {/* <button className="startButton">Iniciar</button> */}
           
        </Container>
    )

    
}