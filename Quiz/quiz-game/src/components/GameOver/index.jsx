import { Container } from "./styled";
import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from "react";

export function GameOver() {
  // Busca a pontuação na memória do navegador.
  const [score, setScore] = useState(0);
  const initialScore = 0;

  useEffect(() => {
    const storedScore = localStorage.getItem("userScore");
    if (storedScore) {
      setScore(parseInt(storedScore));
    }
  }, []);

  const resetScore = () => {
    localStorage.setItem("userScore", initialScore);
  }

  return (
    <Container>
        <h1>Fim de jogo!</h1>
          <p>Você acertou {score}/5 questões!</p>
            
            <NavLink to='/'>
              <button className="restartButton" onClick={resetScore}>Reiniciar</button>
            </NavLink>
    </Container>
  );
      
    
}