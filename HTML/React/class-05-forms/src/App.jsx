import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GlobalVariables } from './global'

function App() {
  const [count, setCount] = useState(0)

  function handleSubmit(event) {
    event.preventDefault();

    const name = event.target.name.value
    const email = event.target.email.value
    const course = event.target.course.value
    const question = event.target.question.value
    const term = event.target.term.value
    const skills = event.target.skills

    const userData = {
      name,
      email,
      course,
      question,
      term,
      skills: [...skills].map((element) => {
        return element.checked ? element.value : null;
      })
    }

    // console.log(userData);
    console.log(JSON.stringify(userData));
    GlobalVariables.user = userData
  }

  return (
    <div className="App">
    <form action="" onSubmit={handleSubmit}>
    <section>
    <label> Nome:
      <input type="text" name='name' />
    </label>
    </section>

    <section>
    <label> E-mail:
      <input type="email" name='email' />
    </label>
    </section>

    <section>
    <label> Curso:
      <select name="course" id="">
        <option value="react">React</option>
        <option value="node">Node</option>
      </select>
    </label>
    </section>
    
    <section>
      <div>Matérias que tem apitidão:</div>
      <label htmlFor="">
        <input type="checkbox" value='html' name='skills'/>HTML
      </label>
      <label htmlFor="">
        <input type="checkbox" value='css' name='skills'/>CSS
      </label>
      <label htmlFor="">
        <input type="checkbox" value='javascript' name='skills'/>JavaScript
      </label>

    </section>


    <section>
      <div>Aceita os termos de uso?</div>
      <label htmlFor="">
        <input type="radio" value='yes' name='term' defaultChecked/>Sim
      </label>
      <label htmlFor="">
        <input type="radio" value='no' name='term'/>Não
      </label>
    </section>

    <section>
    <label> Por que voce quer fazer esse curso?:
     <textarea name="question" id="" cols="30" rows="10" maxLength={200}></textarea>
    </label>
    </section>

    <button>Enviar</button>
    </form>
    </div>
  )
}

export default App
