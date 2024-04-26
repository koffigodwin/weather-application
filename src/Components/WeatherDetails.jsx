import React, { useState } from 'react'
import { UseGlobalContent } from '../Content'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import '../index.css'
import Forescast from './Forescast'

const WeatherDetails = () => {
    const { inputvalue , checked } = UseGlobalContent();

    const [citynames , setcitynames] = useState('')
    const [temperature , settemperature] = useState('')
    const [humidty , sethumidity] = useState('')
    const [wind , setwind] = useState('')
    const [description , setdecription] = useState('')
    const [image , setImage] = useState('')
 

    const Url = 'http://api.openweathermap.org/geo/1.0/direct?q='; 
    const { isPending , error , data} = useQuery({
      queryKey : ['brocode',inputvalue],
      queryFn : async () => {
        const result = await axios.get(`${Url}${inputvalue}&appid=${import.meta.env.VITE_OPEN_KEY}`);
        const response = result.data;
        return response
      }
    })

    if (checked){
      return 
    } 
    if (isPending) {
      return (
        <div className='weather-container'>
          <h1>Loading...</h1>
          <div className='loading'></div>
        </div>
      )
    }
    if (error) {
      return(
        <div className='weather-container'>
          <h1>Something went wrong .</h1>
          <section className='error'>
            <h3>404 error</h3>
          </section>
        </div>
      )
    }

    const cityname = data[0].name;
    const latitude = data[0].lat;
    const longitude = data[0].lon
    

   const CurrentApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_OPEN_KEY}`
    
    fetch(CurrentApi).then(response => response.json()).then((datas) =>{
     
            setcitynames(datas.name);
             sethumidity(`${datas.main.humidity}%`);
             settemperature(`${(datas.main.temp -270).toFixed(2)}°C`);
             setwind(`${datas.wind.speed} km/h`);
             setImage(datas.weather[0].icon);
             setdecription(datas.weather[0].description);
      
    })
       
  
  return (
    <div className='weather-container'>
      <h1>Weather Details</h1>
      <div className="sub-weather">
      <div className="first-weather">
        <p className='city'>City : {citynames}</p>
        <p className='temperature'>Temperature : {temperature}</p>
        <p className='humidity'>Humidity : {humidty}</p>
        <p className='wind'>Wind : {wind}</p>
      </div>
      <div className="second-weather">
       <img src={`https://openweathermap.org/img/wn/${image}@2x.png`} alt={description} />
       <p className='description'>{description}</p>
      </div>
      </div>
      <Forescast latitude={latitude} longitude={longitude}/>
    </div>
  )
}

export default WeatherDetails