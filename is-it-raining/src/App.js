import './App.css';
import './index.css';
import './tailwind.css';

import React, { useEffect, useState } from "react";

import WeatherCard from './components/weather';

export default function App() {

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
const WEATHER_API_KEY = 'b09c35c3babc3564a47e02c61195a6a4'
  
const [lat, setLat] = useState(null);
const [long, setLong] = useState(null);
const [data, setData] = useState(null);
const [error, setError] = useState(null);


useEffect(() => {
  // Fetch geolocation
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    },
    (error) => {
      setError(error.message);
    }
  );
}, []);

  useEffect(() => {
    // Fetch weather data when lat and long are set
    if (lat && long) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&units=imperial&appid=${WEATHER_API_KEY}`);
          if (!response.ok) throw new Error('Network response was not ok');
          const result = await response.json();
          setData(result);
          console.log('result', result);
        } catch (error) {
          setError(error.message);
        }
      };

      fetchData();
    }
  }, [lat, long]);
  
  return (
    <div className="App">
      <WeatherCard weatherData={data}/>
    </div>
  );
}