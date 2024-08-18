import { useState } from "react"
import axios from "axios";


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
    <div className="w-2/5 m-auto bg-gradient-to-b from-blue-400 to-yellow-200 h-[35rem] my-14 rounded-md">
      <form action="" onSubmit={handleSubmit}>
          <h1 className="text-3xl text-center py-10 font-bold text-white">Weather Application</h1>
          <div className="flex justify-center gap-2">
            <input type="text" placeholder="Enter a city a city" value={value} onChange={handleInput} className="border rounded-full w-1/2 pl-3 border-gray-100 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-gray-200"/>
            <button type="submit" className="bg-gray-600 px-3 py-2 rounded-full text-white">Get weather information</button>
          </div>
          
      </form>

    {weatherData && (
      <div className="py-10 px-7">
        <h1 className="text-4xl">{weatherData.name}</h1>
        <span className="font-bold text-5xl text-gray-700 block">{(weatherData.main.temp - 273.15).toFixed(2)}&deg;C</span>
        <span className="text-xl">Wind speed: {weatherData.wind.speed}</span>
        <span>Description: {(weatherData.weather[0].description)[0].toUpperCase() + (weatherData.weather[0].description).slice(1)}</span>
  
        <span>Description: {weatherData.weather[0].icon}</span>
        <span>Characteristics: {weatherData.weather[0].main}</span>
      </div>
    )}
        
    </div>
  )
}

export default DisplayData