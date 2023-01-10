import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/react.svg'
import './style.css'

export function Header() {
    return (
       <header>
          <div className='containerLogo'>
            <Link to={"/"}>
            <img src={logo} alt="icon" />
            </Link>
           
            <h1>Class Routes</h1>
          </div>
          <nav>
            <ul>
                <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}><li>Home</li></NavLink>
                <NavLink to="/gallery" className={({isActive}) => isActive ? 'active' : ''}><li>Galeria</li></NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}><li>Contato</li></NavLink>
            </ul>
          </nav>
       </header>
    )
}