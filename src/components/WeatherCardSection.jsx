import React from 'react'

const WeatherCardSection = ({xdata,xdata1}) => {
  return (
    <div style={{height:"120px",width:"240px",backgroundColor:"white"}}>
       <div style={{fontSize:'2rem',fontWeight:'400',padding:'1rem'}}>{xdata1}</div>
       <div style={{fontSize:'1.5rem'}}>{xdata}</div>
    </div>
  )
}

export default WeatherCardSection