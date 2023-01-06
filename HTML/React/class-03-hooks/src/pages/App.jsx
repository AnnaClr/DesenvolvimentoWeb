import { useState, useEffect } from 'react'
import './App.css'

export function App() {
  const [name, setName] = useState('Ana')
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')
  const [data, setData] = useState('')
  // console.log(name);
  useEffect(() => {
    if (text2) {
      fetch(`https://api.github.com/users/${text2}`).then((response) => response.json()).then((data) => setData(data))
    }
  },[text2])

  return (
    <div className='container'>
      { <h1>Class Hooks</h1>
      /*
      <p>Nome: {name}</p>
      <p>Número: {count}</p>

    <button onClick={() => {
      setCount(count + 1)
      console.log(count);
    }}>Contar</button> */}

    <form action="">
      <p>Palavra1: {text}</p>
      <p>Palavra2: {text2}</p>
      <input required type="text" onChange={(event) => setText(event.target.value)} />
      <button onClick={(event) => {
        event.preventDefault()
        setText2(text)

      }}>Enviar</button>
    </form>
    <section>
      <h2>{data.name}</h2>
      {/* <img src={data.avatar_url} alt=""/>  */}
      <p>{data.bio}</p>
    </section>
    </div>
  )
}


