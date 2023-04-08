import { Container } from "./styled";
import questions from "../GameOn/index"
// import score from "../GameOn/index"
import { useState } from "react";
import { NavLink } from 'react-router-dom'


export function GameOver() {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
    return (
        <Container>
            <h1>Fim de jogo!</h1>
            <p>{`Sua pontuação foi de ${score}/${questions.length}`}</p>
          
          <NavLink to='/'>
            <button>Reiniciar</button>
          </NavLink>

            
        </Container>
    )

    
}