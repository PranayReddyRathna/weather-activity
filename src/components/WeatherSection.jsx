import React from 'react'
import WeatherCardSection from './WeatherCardSection'
import axios from 'axios';
import { useState } from 'react'
const WeatherSection = () => {
  const [cond,setcond]=useState(false);
  const [isloading,setIsloading]=useState(false);
  const [wdata,setWdata]=useState({});
  const url=' https://api.weatherapi.com/v1/current.json';
const API_key='34f5ee546ad3421fac953711243008';
const getWeatherdata=async(searchvalue)=>{
  try{
    setIsloading(true);
    const response=await axios.get(`${url}?key=${API_key}&q=${searchvalue}`);
    setIsloading(false);
    return response.data
  }
  catch(e){
    setcond(false);
    alert("Failed to fetch weather data")
    setIsloading(false);
  }
}
    const [searchvalue,setSearchvalue]=useState('')
    const handleChange=(e)=>{
      setSearchvalue(e.target.value);
    }
   const handleSearch=async()=>{
    setcond(true);
   const weatherdata=await getWeatherdata(searchvalue);
      setWdata(weatherdata);
      
   }
  return (
    <div>
    <div style={{padding:'2rem'}}>
        <input style={{padding:'0.4rem'}} onChange={handleChange}/>
        <button style={{backgroundColor:'#43a047',padding:'0.5rem',border:'none',color:'white'}} onClick={handleSearch}>Search</button>
    </div>
    { isloading ? (<div>Loading data...</div>) : (
    cond ? (<div style={{display:'flex',flexDirection:'row',gap:'2rem',justifyContent:'center'}}>
      <WeatherCardSection xdata={wdata.current?.temp_c} xdata1={"Temperature"}/>
      <WeatherCardSection xdata={wdata.current?.pressure_in} xdata1={"Pressure"}/>
      <WeatherCardSection xdata={wdata.current?.humidity} xdata1={"Humidity"}/>
      <WeatherCardSection xdata={wdata.current?.condition.text} xdata1={"Condition"}/>
  </div>) : null
    )
          
        }

    </div>
  )
}

export default WeatherSection