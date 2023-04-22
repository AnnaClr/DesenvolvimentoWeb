import { useNavigate } from "react-router-dom"
import { Container } from "./styled";
import React, { useState } from "react";

export function QuizGame() {
   const [currentQuestion, setCurrentQuestion] = useState(0); // Questão atual.
   const [score, setScore] = useState(0); // Pontuação.
   
   // Pontuação atual:
   // console.log(score);

   // Perguntas e respostas.
   const questions = [
       {
          question: 'Qual a tag utilizada para alterar o título de um projeto HTML?',
             options: [
             {id: 0, alternative: "name", isCorrect: false},
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
      
      const navigate = useNavigate()

      const clickOption = (isCorrect) => {
         if (isCorrect) {
           // Add +1 na pontuação caso a opção esteja correta:
           setScore(score + 1);
           localStorage.setItem("userScore", score + 1);
         }

         if (currentQuestion + 1 < questions.length) {
           // Passa para a próxima pergunta:
           setCurrentQuestion(currentQuestion + 1);
         } else {
           // navega para a página final:
           navigate("/gameover")
         }
       };

   return (
      // Rendeiza as questões e alternativas de forma dinâmica;
      // Mostra sua pontuação atual.
      <Container>
            <div className="questionDiv">
               <h2>Pergunta #{currentQuestion + 1}</h2>
                  <h3 className="questionText">{questions[currentQuestion].question}</h3>
                     <div className='divOptions'>{questions[currentQuestion].options.map((alternative) => {
                        return (
                           <button 
                           className='buttonOptions'
                           key={alternative.id}
                           onClick={() => {
                              clickOption(alternative.isCorrect)
                              }}>
                           {alternative.alternative}
                           </button>
                           )})}
                      </div>
            </div>
      </Container>
   )
}