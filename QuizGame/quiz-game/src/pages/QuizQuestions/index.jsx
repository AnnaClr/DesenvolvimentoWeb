import { Container } from "./styled";
import { useContext, useState } from "react";
import { QuizContext } from "../../context/quiz";

export function QuizQuestion() {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]
    const selectOptions = (options) => {
        dispatch({type: "checkAnswer", payload: {alternative: currentQuestion.alternative === true}})
    }
    return (
        <Container>
           <h2>Pergunta {quizState.currentQuestion + 1} de {quizState.currentQuestion.length}</h2>
           <h1>{currentQuestion.question}</h1>
           <div id="optionsContainer">{currentQuestion.options}
           </div>

        </Container>
    )
}