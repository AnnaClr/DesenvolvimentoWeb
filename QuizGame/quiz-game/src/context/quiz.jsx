import { createContext, useReducer } from "react";
import { QuizQuestions } from "../quiz/quizQuest"
export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState)
    return  <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}


const Stages = ["Start", "Playing", "Gameover"];
const initialState = {
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
            const alternative = action.payload.alternative
            const options = action.payload.options
            let correctAnswer = 0
                if (alternative === true)
                correctAnswer = 1
                return {
                    ...state,
                    score: state.score + correctAnswer,
                    answerSelect: options
                }
            default:
            return state
    };
}


