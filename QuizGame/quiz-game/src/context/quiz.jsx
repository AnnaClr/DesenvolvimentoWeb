import { createContext, useReducer } from "react";
import { QuizQuestions } from "../quiz/quizQuest"
//import ( createContext )

const Stages = ["Start", "Playing", "Gameover"];
const firstState = {
    gameStage: Stages[0],
    QuizQuestions,
    currentQuestion: 0,
    answerSelect: false,
    score: 0
}

const quizReducer = (state, action) => {
    switch (action.type) {
        case "changeStage":
            return {
                ...state,
                gameStage: Stages[1]
            }
        
        case "startGame":
            let quizQuestions = null
            return {
                ...state,
                questions: quizQuestions,
                gameStage: Stages[2],
            }

            case "checkAnswer":
                if (state.answerSelect) return state
                const answer = action.payload.answer
                const option = action.payload.option
                let correctAnswer = 0

                if (answer === option)
                correctAnswer = 1
                return {
                    ...state,
                    score: state.score + correctAnswer,
                    answerSelect: option
                }
                default:
                return state
    };
}

export const QuizContext = createContext();
export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, firstState)
    return  <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
