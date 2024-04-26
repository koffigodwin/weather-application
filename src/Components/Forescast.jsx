import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import '../index.css'

const Forescast = ({ latitude ,longitude }) => {
  
  
 
  const forestApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_OPEN_KEY}&units=metric`;
  
  const {data , isPending , error} = useQuery({
    queryKey: ['heymybro'] ,
    queryFn : async () =>{
      const response = await axios.get(forestApi);
      const result = response.data
      return result
    }
  })
  if (isPending) {
    return (
      <div className='eachforecast'>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  if (error) {
    return(
      <div className='eachforecast'>
        <h1>Something went wrong .</h1>
        <section className='error'>
          <h3>404 error</h3>
        </section>
      </div>
    )
  }
   const splices = data?.list?.slice(0,7);
   const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
   const todays = new Date().getDay()
   const alldays = weekdays.splice(todays , weekdays.length).concat(weekdays.slice(0,todays))
   

   const imageUrl = 'https://openweathermap.org/img/wn/';
  return (
    <div className='forcastDays'>
      <h2>Forecast Days</h2>
      <div className='eachforecast'>
    {
      splices.map((items , index) =>{
        return (
             <div className='cards' key={index}>
             <label>{alldays[index]} </label> <br />
              <img src={`${imageUrl}${items.weather[0].icon}@2x.png`} alt="" /><br />
              <p className='descrip'>{items.weather[0].description}</p>
              <p>Humidity : {items.main.humidity}%</p>
              <p>Temprtatue : {`${Math.round(items.main.temp_min)}/${Math.round(items.main.temp_max)}°C`}</p>
              <p>Wind : {items.wind.speed}km/h</p>
          </div>
        )
      })
    }

    </div>
    </div>
  )
}

export default Forescast

