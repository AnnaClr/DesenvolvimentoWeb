import { GlobalVariables } from "../global"

export function userData() {
    return (
        <>
        <h1>Dados do aluno:</h1>
        <p>Nome: {GlobalVariables.user.name}</p>
        <p>Email</p>
        <p>Curso</p>
        <p>Materias com aptidão</p>
        </>
    )
}