import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/index.jsx'
import { Container } from './style.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
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

export default App
