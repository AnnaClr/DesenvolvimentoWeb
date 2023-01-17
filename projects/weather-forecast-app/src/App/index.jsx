import { useState, useEffect} from 'react'
import { BsThermometerHigh } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'
import './style.css'


export function App() {
  const [searchedCity, setSearchedCity] = useState('Jucas')
  const [inputCity, setInputCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  
async function getCityWeather() {
  const response = await fetch(API)
  console.log(response)
  if (response.status == 200) {
    const data = await response.json()
    setWeatherData(data)
  } else if (response.status == 400){
    alert('Cidade não encontrada!')
  }
}

function searchCity(event) {
  event.preventDefault()
  setSearchedCity(inputCity)
}

  useEffect(() => {
    getCityWeather()
  }, [searchedCity])

  const API = `https://api.weatherapi.com/v1/forecast.json?key=fb85b303e1fe4286a2b15407223112&q=${searchedCity}&days=4&lang=pt`

  return (
    <div className="container">
      <header>
      <h1>Previsão do Tempo</h1>
      <form action="" onSubmit={searchCity}>
        <label htmlFor="citySearchInput" className='srOnly'>Pesquisar nome da cidade</label>
        <input type="text" placeholder='Nome da cidade' id='citySearchInput' onChange={(event) => setInputCity(event.target.value)}/>
        <GoSearch className='searchIcon'/>
        <button className='searchButton'>Buscar</button>
      </form>
      <p>
        {searchedCity}
      </p>
      </header>
      <main>
        <article>
          <section className='blockCityName'>
            <h2>{weatherData.location.name}</h2>
            <p>Brasil, 11/01/2023, 15:41:00</p>
          </section>
          <section className='blockCurrentTime'>
            <div className='currentTime'>
            <div className='blockDegree'>
              <BsThermometerHigh className='IconThermo'/>
              <p className='degreeCurrent'>25.6°</p>
              <p className='degreeMaxMin'>
                <span className='degreeMax'>32.0°</span>
                <span className='degreeMin'>20.0°</span>
              </p>
            </div>
            </div>
            <div className='blockSituation'>
              <img src="#" alt="icon" />
            <div>
              <p>Parcialmente sol quente</p>
              <p>Sensação térmica de 36.5°</p>
            </div>
            </div>
          </section>
          <section className='containerWeatherCondition'>
            {/* Componente */}
          </section>
          <section className='containerWeatherForecast'>
            <ol>
              <li>Componente "Map"</li>
            </ol>

          </section>
        </article>
      </main>
      <footer>
        <p>Web Development Course - Júcas</p>
      </footer>
    </div>
  )
}
