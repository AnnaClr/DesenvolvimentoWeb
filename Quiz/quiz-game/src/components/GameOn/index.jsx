import { Container } from "./styled";;
import React, {useState } from "react";
import { NavLink } from "react-router-dom"

export default function QuizGame() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  console.log(score);

  const questions = [
       {
          question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
             options: [
             {id: 0, alternative: "name", isCorrect: false },
             {id: 1, alternative: "title", isCorrect: true },
             {id: 2, alternative: "class", isCorrect: false },
             {id: 3, alternative: "classname", isCorrect: false }
       ],
   },
   
       {
          question: 'Qual a tag é usada para linkar JavaScript ao HTML?',
             options: [
             {id: 0, alternative: "javascript", isCorrect: false },
             {id: 1, alternative: "js", isCorrect: false },
             {id: 2, alternative: "script", isCorrect: true },
             {id: 3, alternative: "java", isCorrect: false }
       ],
       },
   
       {
          question: 'Se há 16px em 1rem, quantos pixels há em 143.75rem?',
             options: [
                {id: 0, alternative: "2.130", isCorrect: false },
                {id: 1, alternative: "2.200", isCorrect: false },
                {id: 2, alternative: "2.300", isCorrect: true },
                {id: 3, alternative: "2.416", isCorrect: false }
          ],
       },
   
       {
          question: 'Qual tag é ultilizada para definir a fonte de um texto?',
             options: [
                {id: 0, alternative: "font-size", isCorrect: false },
                {id: 1, alternative: "font-weight", isCorrect: false },
                {id: 2, alternative: "font-family", isCorrect: true },
                {id: 3, alternative: "font-style", isCorrect: false }
          ],
       },
   
       {
          question: 'Como você escreve "Hello World" em uma caixa de alerta?',
             options: [
                {id: 0, alternative: "alertBox('Hello World')", isCorrect: false },
                {id: 1, alternative: "msgBox('Hello World')", isCorrect: false },
                {id: 2, alternative: "msg('Hello World')", isCorrect: false },
                {id: 3, alternative: "alert('Hello World')", isCorrect: true }
          ],
       },
      ]

      const optionClicked = (isCorrect) => {
         if (isCorrect) {
           setScore(score + 1);
         }
     
         if (currentQuestion + 1 < questions.length) {
           setCurrentQuestion(currentQuestion + 1);
         } else {
           setShowResults(true);
         }
       };

      //  const restartGame = () => {
      //    setScore(0);
      //    setCurrentQuestion(0);
      //    setShowResults(false);
      //  };

      if (questions.length === 0) {
        return (
         <NavLink to='/gameover'/>
        )
      }
     
   return (
      <Container>

         {/* <h2>Score: {score}</h2>
            <div className="finaResults">
               <h2>
                  {score}/{questions.length} acertos (
                  {(score / questions.length) * 100}%)
               </h2>
               <button onClick={() => restartGame()}>Reiniciar</button>
            </div> */}


            <div className="questionDiv">
               <h2>Pergunta #{currentQuestion + 1}</h2>
                  <h3 className="questionText">{questions[currentQuestion].question}</h3>
                     <ul>{questions[currentQuestion].options.map((alternative) => {
                        return (
                           <li
                              key={alternative.id}
                              onClick={() => optionClicked(alternative.isCorrect)}>
                                 {alternative.alternative}
                           </li>
                        );
                        })}
                     </ul>

                  
        </div>
      </Container>
   )
}