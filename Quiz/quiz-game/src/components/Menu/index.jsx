import { Container } from "./styled.js"
import { NavLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { BsInfoCircleFill } from "react-icons/bs"
export function Menu() {
    return (
        <Container>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? 'select' : "" }> <AiFillHome/>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={({isActive}) => isActive ? 'select' : "" }> <BsInfoCircleFill/>
                  Sobre
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
    )
}