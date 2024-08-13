import React from 'react';

export default function WeatherCard({ weatherData }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img 
        className="w-full" 
        src="/img/card-top.jpg" 
        alt="Sunset in the mountains" 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Is it raining in {weatherData.name}?</div>
        <p className="text-gray-700 text-base">
        {weatherData.weather.id > 500 && 'Sorry, nope.'}
        </p>
      </div>
    </div>
  );
}
