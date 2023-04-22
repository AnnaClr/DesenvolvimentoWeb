import { Container } from "./styled";
import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from "react";

export function GameOver() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("userScore");
    if (storedScore) {
      setScore(parseInt(storedScore));
    }
  }, []);

  return (
    <Container>
        <h1>Fim de jogo!</h1>
          <p>Você acertou {score}/5 questões!</p>
            
            <NavLink to='/'>
              <button className="restartButton">Reiniciar</button>
            </NavLink>
    </Container>
  );
      
    
}