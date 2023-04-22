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
        </Container>

        <div onClick={toggleMenuIcon}>
            {menuActive && <Menu/>}
        </div>
        </>
    )
}