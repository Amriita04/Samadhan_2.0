const API_KEY = "d5e85858ee4b9f4a945f2ab1ab91b69e";

export const fetchWeatherByCoords = async (lat, lon) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch weather data");
  return await res.json();
};

export const fetchWeatherByCity = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error("City not found");
  return await res.json();
};

export const fetchWeather = async (lat, lon) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY`);
  return await res.json();
};
