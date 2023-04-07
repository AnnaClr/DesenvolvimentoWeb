import { Container } from "./style"
import { Header } from "../components/Header/index"
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
            <section className="FooterSocialLogos">
                <a href="" target="_blank">
                  <img src="" alt="" />
                </a>

                <a href="" target="_blank">
                  <img src="" alt="" />
                </a>

                <a href="" target="_blank">
                  <img src="" alt="" />
                </a>
            </section>
          <p>Web Developer Course</p>
       </footer>
      
       </Container>
       
  )
}
