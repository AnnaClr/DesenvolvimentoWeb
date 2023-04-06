import { Container } from "./styled";
// import React, { useState } from "react";
import React, { useContext, useState } from "react";
// import { QuizContext } from "../../context/quiz";
// import { useContext } from "react";


export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
       question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
          options: [
          { alternative: "name", isCorrect: false },
          { alternative: "title", isCorrect: true },
          { alternative: "class", isCorrect: false },
          { alternative: "classname", isCorrect: false }
    ],
},

    {
       question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
          options: [
          { alternative: "name", isCorrect: false },
          { alternative: "title", isCorrect: true },
          { alternative: "class", isCorrect: false },
          { alternative: "classname", isCorrect: false }
    ],
    },

    {
       question: 'Se há 16px em 1rem, quantos pixels há em 143.75rem?',
          options: [
             { alternative: "2.130", isCorrect: false },
             { alternative: "2.200", isCorrect: false },
             { alternative: "2.300", isCorrect: true },
             { alternative: "2.416", isCorrect: false }
       ],
    },

    {
       question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
          options: [
             { alternative: "name", isCorrect: false },
             { alternative: "title", isCorrect: true },
             { alternative: "class", isCorrect: false },
             { alternative: "classname", isCorrect: false }
       ],
    },

    {
       question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
          options: [
             { alternative: "name", isCorrect: false },
             { alternative: "title", isCorrect: true },
             { alternative: "class", isCorrect: false },
             { alternative: "classname", isCorrect: false }
       ],
    },

    {
       question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
          options: [
             { alternative: "name", isCorrect: false },
             { alternative: "title", isCorrect: true },
             { alternative: "class", isCorrect: false },
             { alternative: "classname", isCorrect: false }
       ],
    },

    {
       question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
          options: [
             { alternative: "name", isCorrect: false },
             { alternative: "title", isCorrect: true },
             { alternative: "class", isCorrect: false },
             { alternative: "classname", isCorrect: false }
       ],
    },

    {
       question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
          options: [
             { alternative: "name", isCorrect: false },
             { alternative: "title", isCorrect: true },
             { alternative: "class", isCorrect: false },
             { alternative: "classname", isCorrect: false }
       ],
    },

    {
       question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
          options: [
             { alternative: "name", isCorrect: false },
             { alternative: "title", isCorrect: true },
             { alternative: "class", isCorrect: false },
             { alternative: "classname", isCorrect: false }
       ],
    },

    {
       question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
          options: [
             { alternative: "name", isCorrect: false },
             { alternative: "title", isCorrect: true },
             { alternative: "class", isCorrect: false },
             { alternative: "classname", isCorrect: false }
       ],
    },

    {
       question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
          options: [
             { alternative: "name", isCorrect: false },
             { alternative: "title", isCorrect: true },
             { alternative: "class", isCorrect: false },
             { alternative: "classname", isCorrect: false }
       ],
    }
      ]

      const handleAnswerClick = (alternative) => {
        if (alternative === isCorrect === true) {
          setScore(score + 1);
        }
    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          alert(`Sua pontuação final é ${score} de ${questions.length}`);
        }
      }

}

// export function GameOn() {
//     const [currentQuestion] = useState(0);
//     return (
//         <Container>
//             <h2>{currentQuestion.QuizGame.question}</h2>
//         </Container>
//        // document.write(currentQuestion.question)
//       )

// }