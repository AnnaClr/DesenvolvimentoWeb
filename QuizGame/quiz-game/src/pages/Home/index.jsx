import { Container } from "./styled";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export function Home() {
        const [quizState, dispatch] = useContext(QuizContext)
    return (
        <Container>
            <h1>Quiz de Programação</h1>
            <button className="startButton" onClick={(changeStage) => dispatch({ type: "changeStage" })}>Iniciar</button>
        </Container>
    )

    
}