import { Container } from "./style"
import { Header } from "../components/Header/index"
import { Outlet } from 'react-router-dom'
import  github  from "../img/github.png"
import linkedin from "../img/linkedin.png"

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
                <a href="https://github.com/AnnaClr" target="_blank">
                  <img src={github} alt="github-icon" />
                </a>

                <a href="https://www.linkedin.com/in/anaclaragonÇalvesvieira" target="_blank">
                <img src={linkedin} alt="linkedin-icon" />
                </a>

            </section>
          <p>MyFooter</p>
       </footer>
       </Container>
  )
}
