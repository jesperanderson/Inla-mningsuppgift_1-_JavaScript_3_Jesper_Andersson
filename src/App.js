import React, { useState, useEffect } from 'react';
import Clock from './Clock'; 
import './Style.css'; 

function App() {
  // Definierar ett state som håller koll på den aktuella tiden
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect körs efter att komponenten har renderats, här skapas en timer för att uppdatera tiden varje sekund
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // Uppdaterar state med den aktuella tiden varje sekund
    }, 1000);

    // Returnerar en funktion som rensar upp timern när komponenten avmonteras
    return () => clearInterval(timer);
  }, []); // Tom array som innebär att detta körs endast vid första renderingen (hjälp av google)

  // Renderar Clock-komponenten, skickar den aktuella tiden som props till Clock
  return (
    <div className="App">
      <h1>Current Time</h1>
      <Clock time={currentTime} /> 
    </div>
  );
}

export default App; 
