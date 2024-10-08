import React from 'react';

// Clock-komponenten tar emot 'time' som en prop
function Clock({ time }) {
  // En funktion för att formatera timmar, minuter och sekunder med ledande nollor om värdet är mindre än 10
  const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);

  // Använder funktionen för att formatera timmar, minuter och sekunder från time-objektet
  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  // Returnerar en div som innehåller tiden i formatet HH:MM:SS
  return (
    <div>
      <h2>{`${hours}:${minutes}:${seconds}`}</h2>
    </div>
  );
}

export default Clock; 

// App-komponenten skapar en timer med useEffect som uppdaterar den aktuella tiden varje sekund och skickar tiden som en prop till Clock-komponenten.
// Clock-komponenten ansvarar för att formatera och visa tiden i formatet "HH:MM".