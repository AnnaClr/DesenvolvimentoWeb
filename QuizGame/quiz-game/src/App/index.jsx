import { Container } from './style.js'
import { Header } from '../components/Header/index.jsx'
import { Outlet } from 'react-router-dom'

export function App() {
  return (
    <Container>
      <header>
         <Header/>
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

