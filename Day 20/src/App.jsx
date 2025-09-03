import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="text-center text-red-500">App is rendering</p>

      <p className="text-center text-gray-600 italic">
        “No matter the weather, you’ve got this.” 🌦️
      </p>

      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-200 p-6 space-y-6 transition-all duration-500">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      fetchWeather(latitude, longitude).then(setWeatherData);
    },
    () => alert("Location access denied. Please enter city manually.")
  );
}, []);
console.log("Weather data:", weather)
