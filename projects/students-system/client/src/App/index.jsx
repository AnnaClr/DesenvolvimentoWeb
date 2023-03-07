import { Outlet } from 'react-router-dom'
import { Menu } from '../components/Menu/index.jsx'
import { Container } from './style.js'
function App() {
  return (
    <Container>
       <header>
         <Menu/>
       </header>

       <main>
         <Outlet/>
       </main>

       <footer>
        <p>Web Developer Course</p>
       </footer>
    </Container>
  )
}

export default App
