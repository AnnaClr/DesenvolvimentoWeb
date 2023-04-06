// import { createContext, useReducer } from "react";
// import questions from "../components/GameOn";
// const Stages = ["Start", "Playing", "Gameover"];
// const initialState = {
//   gameStage: Stages[0],
//   questions,
//   currentQuestion: 0,
//   answerSelected: false,
//   score: 0,
// };

// console.log(initialState);

// const quizReducer = (state, action) => {
//   switch (action.type) {
//     case "ChangeStage":
//       return {
//         ...state,
//         gameStage: Stages[0],
//       };

//     // case "StartGame":
//     //   let quizQuestions = null;

//     // state.questions.forEach((question) => {
//     //     if (question === action.payload) {
//     //       quizQuestions = question.questions;
//     //     }
//     //   });

//     //   return {
//     //     ...state,
//     //     questions: quizQuestions,
//     //     gameStage: Stages[2],
//     //   };

//     //   case "StartGame":
//     //   let quizQuestions = null;

//     // case "StartGame":
//     //     const quizQuestions = null

//     //     state.questions.forEach((question) => {
//     //       if (question === action.payload) {
//     //         quizQuestions = question.questions
//     //       }
//     //     })

//        //let quizQuestions = null;

//     // state.questions.forEach((question) => {
//     //     if (question === action.payload) {
//     //       quizQuestions = question.questions;
//     //     }
//     //   });

//       // return {
//       //   ...state,
//       //   questions: quizQuestions,
//       //   gameStage: Stages[2],
//       // };

//     case "ChangeQuest": {
//       const nextQuestion = state.currentQuestion + 1;
//       let endGame = false;

//       if (!state.questions[nextQuestion]) {
//         endGame = true;
//       }

//       return {
//         ...state,
//         currentQuestion: nextQuestion,
//         gameStage: endGame ? Stages[3] : state.gameStage,
//         answerSelected: false,
//       };
//     }

//     // case "NEW_GAME": {
//     //   console.log(questions);
//     //   console.log(initialState);
//     //   return initialState;
//     // }

//     case "CheckAnswer": {
//       if (state.answerSelected) return state;

//       const alternative = action.payload.alternative;
//       let correctAnswer = 0;

//       if (alternative === true) 
//       correctAnswer = 1;

//       return {
//         ...state,
//         score: state.score + correctAnswer,
//         answerSelected: alternative,
//       };
//     }

//       default:
//       return state;
//   }
// };

// export const QuizContext = createContext();
// export const QuizProvider = ({ children }) => {
//   const value = useReducer(quizReducer, initialState);
//   return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
// };