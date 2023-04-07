import { Container } from "./styled";;
import React, {useState } from "react";

// export default function QuizGame() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);

//   const questions = [
//     {
//        question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
//           options: [
//           { alternative: "name", isCorrect: false },
//           { alternative: "title", isCorrect: true },
//           { alternative: "class", isCorrect: false },
//           { alternative: "classname", isCorrect: false }
//     ],
// },

//     {
//        question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
//           options: [
//           { alternative: "name", isCorrect: false },
//           { alternative: "title", isCorrect: true },
//           { alternative: "class", isCorrect: false },
//           { alternative: "classname", isCorrect: false }
//     ],
//     },

//     {
//        question: 'Se há 16px em 1rem, quantos pixels há em 143.75rem?',
//           options: [
//              { alternative: "2.130", isCorrect: false },
//              { alternative: "2.200", isCorrect: false },
//              { alternative: "2.300", isCorrect: true },
//              { alternative: "2.416", isCorrect: false }
//        ],
//     },

//     {
//        question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
//           options: [
//              { alternative: "name", isCorrect: false },
//              { alternative: "title", isCorrect: true },
//              { alternative: "class", isCorrect: false },
//              { alternative: "classname", isCorrect: false }
//        ],
//     },

//     {
//        question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
//           options: [
//              { alternative: "name", isCorrect: false },
//              { alternative: "title", isCorrect: true },
//              { alternative: "class", isCorrect: false },
//              { alternative: "classname", isCorrect: false }
//        ],
//     },

//     {
//        question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
//           options: [
//              { alternative: "name", isCorrect: false },
//              { alternative: "title", isCorrect: true },
//              { alternative: "class", isCorrect: false },
//              { alternative: "classname", isCorrect: false }
//        ],
//     },

//     {
//        question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
//           options: [
//              { alternative: "name", isCorrect: false },
//              { alternative: "title", isCorrect: true },
//              { alternative: "class", isCorrect: false },
//              { alternative: "classname", isCorrect: false }
//        ],
//     },

//     {
//        question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
//           options: [
//              { alternative: "name", isCorrect: false },
//              { alternative: "title", isCorrect: true },
//              { alternative: "class", isCorrect: false },
//              { alternative: "classname", isCorrect: false }
//        ],
//     },

//     {
//        question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
//           options: [
//              { alternative: "name", isCorrect: false },
//              { alternative: "title", isCorrect: true },
//              { alternative: "class", isCorrect: false },
//              { alternative: "classname", isCorrect: false }
//        ],
//     },

//     {
//        question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
//           options: [
//              { alternative: "name", isCorrect: false },
//              { alternative: "title", isCorrect: true },
//              { alternative: "class", isCorrect: false },
//              { alternative: "classname", isCorrect: false }
//        ],
//     },

//     {
//        question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
//           options: [
//              { alternative: "name", isCorrect: false },
//              { alternative: "title", isCorrect: true },
//              { alternative: "class", isCorrect: false },
//              { alternative: "classname", isCorrect: false }
//        ],
//     }
//       ]

//       const handleAnswerClick = (alternative) => {
//         if (alternative === true) {
//           setScore(score + 1);
//         }
    
//         const nextQuestion = currentQuestion + 1;
//         if (nextQuestion < questions.length) {
//           setCurrentQuestion(nextQuestion);
//         } else {
//           alert(`Sua pontuação final é ${score} de ${questions.length}`);
//         }
//       }

//       <Container>
//          <h2>{`Questão ${questions.length}: ${currentQuestion.question}`}</h2>
//             <div>
//                <button></button>
//                <button></button>
//                <button></button>
//                <button></button>
//             </div>
           
//       </Container>

// }

// export function Options({ options, selectOption, alternative }) {
//    // const [quizState, dispatch] = useContext(QuizContext);
//    const answerSelected = alternative
//    return (
//      <Container>
//       <button onClick={(alternative) => selectOption()}
//        className={`
//        option
//          ${QuizGame.answerSelected && alternative === true ? "correct" : ""} 
//          ${QuizGame.answerSelected && alternative === false ? "wrong" : ""}
//          `}></button>
//        <p>{options}</p>
//      </Container>
//    );
//  };


// // export default function QuizGame() {
// //     return (
// //         <Container>
// //             <h2>Questão</h2>
// //         </Container>
// //        // document.write(currentQuestion.question)
// //       )

// // }

export default function QuizGame() {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [score, setScore] = useState(0);
   const count = 0
   // const score = count
   const answer = true
   console.log(score);
   return (
      <Container>
               <h1>Pergunta 1</h1>
                  <h2>Qual a tag utilizada para alterar o título de um projeto HTML?</h2>
                     <div className="Options" 
                     onClick={(alternative) => {
                        if(alternative === answer) {
                           count +1
                        }
                     }}>
                        <button>Class</button>
                        <button value={true}>Title</button>
                        <button value={false}>Classname</button>
                        <button value={false}>Name</button>
                     </div>
                     {/* <section onClick={(value) => {
                        if(value === true) {
                           count +1
                        }
                     }}>
                        <button value={false}>Class</button>
                        <button value={true}>Title</button>
                        <button value={false}>Classname</button>
                        <button value={false}>Name</button>
                     </section> */}


      </Container>
   )
}