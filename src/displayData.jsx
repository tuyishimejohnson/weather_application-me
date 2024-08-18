import { useState } from "react"
import axios from "axios";

/* `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}` */

const DisplayData = () => {

  const [value, setValue] = useState("")
  const [weatherData, setWeatherData] = useState(null)

  const handleInput = (event) => {
    setValue(event.target.value)
  }

  const apiKey = "7cd592558e2f283db4a0b3dd295cddc0"
  
  const fetchWeatherData = async () => {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`
      try {
        const response = await axios.get(url)
        setWeatherData(response.data)
        console.log(response.data)
        
      } catch (error) {
          console.log(`Error ${error}`)
      }
    
    }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchWeatherData()
    setValue("")
  }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
          <h1>Weather Application</h1>
          <input type="text" placeholder="Enter a city a city" value={value} onChange={handleInput} className="border border-black"/>
          <button type="submit">Get weather information</button>
      </form>

    {weatherData && (
      <div>
        <h1>{weatherData.name}</h1>
        <span>{(weatherData.main.temp - 273.15).toFixed(2)}</span>
        <span>Wind speed: {weatherData.wind.speed}</span>
        <span>Description: {(weatherData.weather[0].description)}</span>
  
        <span>Description: {weatherData.weather[0].icon}</span>
        <span>Characteristics: {weatherData.weather[0].main}</span>
      </div>
    )}
        
    </div>
  )
}

export default DisplayData