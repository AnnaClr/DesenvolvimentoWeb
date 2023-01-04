import './App.css'
import { CardPerfil } from "../components/CardPerfil"

export function App() {
  return (
    <div className='container'>
      <h1>Class Components</h1>
      <CardPerfil
       login='AnnaClr'
       name='Ana' 
       age={17}
      />

<CardPerfil 
       login='Mario13Sergio'
       name='Mario' 
       age={15}
      />

      <CardPerfil 
       login='Italo-Morais'
       name='Italo' 
       age={15}
      />
    </div>
  )
}


