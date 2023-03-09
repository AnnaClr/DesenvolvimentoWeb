import { FormRegister } from "../../components/FormRegister/index.jsx"
import { Container } from "./styled.js"
export function Register() {
    return (
        <Container>
          <h1>Cadastro</h1>
          <FormRegister/>
        </Container>
    )
}