import { Container } from "./style"
import { useForm } from "react-hook-form"
import InputMask from 'react-input-mask';
import axios from "axios"
import { useState } from "react"

export function FormRegister() {
    const { register, handleSubmit, formState: {errors}, reset} = useForm();
    const [Celular, setCelular] = useState('')
    const API = "http://localhost:3000/students"

    function onSubmit(data) {
        console.log(data);

        axios.post(API, data)
        .then((res) => {
            alert(res.data);
            setCelular("")
            reset()
       })
       .catch((error) => alert(error.response.data))
        
    }
    // console.log(errors);
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" id="Nome" {...register("Nome", {required: true})} placeholder="Nome do aluno"/>
                    {errors.Nome && <span className="error">Campo obrigatório!</span>}
                </section>

                <section>
                    <label htmlFor="Email">Email</label>
                    <input type="text" id="Email" {...register("Email", {required: true})} placeholder="Email do aluno"/>
                    {errors.Email && <span className="error">Campo obrigatório!</span>}
                </section>

                <section>
                    <label htmlFor="Celular">Celular</label>
                    <InputMask 
                        mask={"(99) 99999-9999"} 
                        maskChar=""
                        type="tel" 
                        id="Celular" 
                        {...register("Celular", {required: true})} 
                        placeholder="(00) 0000-0000"
                        value={Celular}
                        onChange={(event) => setCelular(event.target.value)}
                    />
                    {errors.Celular && <span className="error">Campo obrigatório!</span>}
                </section>

                <section>
                    <label htmlFor="Cidade">Cidade</label>
                    <input type="text" id="Cidade" {...register("Cidade", {required: true})} placeholder="Cidade do aluno"/>
                    {errors.Cidade && <span className="error">Campo obrigatório!</span>}
                </section>
                <button>Cadastrar</button>
            </form>
        </Container>
    )
}