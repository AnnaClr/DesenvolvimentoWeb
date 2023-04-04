import { Container } from "./styled";
import { useContext, useState } from "react";
import { QuizContext } from "../../context/quiz";
//import { QuizQuestions } from "../../quiz/quizQuest";

export function QuizQuestion() {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.QuizQuestions[quizState.currentQuestion]
    const selectOptions = (options) => {
        dispatch({type: "checkAnswer", payload: {alternative: currentQuestion.alternative, options}})
    }
    return (
        <Container>
        <h1>Pergunta {quizState.currentQuestion + 1} de 10!</h1>
           <h2>{currentQuestion.question}</h2>
                <div id="optionsContainer">
                    {currentQuestion.options}
                </div>
           
        </Container>
    )
}