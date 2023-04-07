import { Container } from "./style.js"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { useState } from "react"
import { Menu } from '../Menu/index.jsx'
export function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenuIcon = () => setMenuActive(!menuActive);
    return (
        <>
        <Container>
            <button onClick={toggleMenuIcon}>
                {
                    menuActive ?  
                    <IoMdClose className="menuIcon" /> :
                    <IoMdMenu className="menuIcon" />
                }
            </button>
            <div className="logoMenu">
                <div>
                  <h1>Quiz</h1>
                  <h3>Curso de Desenvolvimento Web</h3>
                </div>
            </div>
        </Container>

        <div onClick={toggleMenuIcon}>
            {menuActive && <Menu/>}
        </div>
        </>
    )
}