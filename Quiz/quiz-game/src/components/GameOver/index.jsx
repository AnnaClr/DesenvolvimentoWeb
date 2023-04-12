import { Container } from "./styled";
import { NavLink } from 'react-router-dom'

export function GameOver() {
    return (
        <Container>
            <h1>Fim de jogo!</h1>
            {/* <p>{`Sua pontuação foi de ${setScore} / ${questions.length}`}</p> */}
            <p>Sua pontuação foi de 5/5 acertos!</p>
          
          <NavLink to='/'>
            <button className="restartButton">Reiniciar</button>
          </NavLink>
        </Container>
    )
}