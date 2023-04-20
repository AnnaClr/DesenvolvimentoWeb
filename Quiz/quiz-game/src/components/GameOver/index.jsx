import { Container } from "./styled";
import { NavLink } from 'react-router-dom'

export function GameOver() {
      return (
          <Container>
              <h1>Fim de jogo!</h1>
              <p>Clique no botão abaixo para volta ao menu principal:</p>
            
            <NavLink to='/'>
              <button className="restartButton">Reiniciar</button>
            </NavLink>
          </Container>
      )
    
}