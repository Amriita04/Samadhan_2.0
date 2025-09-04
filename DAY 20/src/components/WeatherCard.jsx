export default function WeatherCard({ weather }) 
{
  if (!weather) return null;

  const tempC = Math.round(weather.main.temp - 273.15);
  const feelsLikeC = Math.round(weather.main.feels_like - 273.15);
  const condition = weather.weather[0].main;
  const description = weather.weather[0].description;
  const icon = weather.weather[0].icon;

  const moodMessage = {
    Rain: "Rainy day? Perfect for deep focus. ☔",
    Clear: "Sunny skies—take a walk before study time. ☀️",
    Clouds: "Cloudy vibes—stay cozy and curious. ☁️",
    Snow: "Snowy calm—ideal for reflection and planning. ❄️",
    Thunderstorm: "Stormy energy—channel it into creativity. ⚡",
  }[condition] || "Mixed weather—stay balanced and hydrated. 🌦️";

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center space-y-4 border border-indigo-200 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-indigo-700">{weather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather Icon"
        className="mx-auto w-20 h-20"
      />
      <p className="text-5xl font-semibold text-blue-500">{tempC}°C</p>
      <p className="text-gray-600 capitalize text-lg">{description}</p>
      <p className="text-sm text-gray-500">Feels like {feelsLikeC}°C</p>
      <p className="mt-2 italic text-indigo-600">{moodMessage}</p>
    </div>
  );
}
