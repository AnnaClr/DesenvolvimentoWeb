import { Container } from "./styled";
import { NavLink } from "react-router-dom"

export function Home() {
    return (
        <Container>
            <h1>Quiz de Programação</h1>
            <NavLink to="/quizgame">
              <button className="startButton">Iniciar</button>
            </NavLink> 
        </Container>
    )

    
}