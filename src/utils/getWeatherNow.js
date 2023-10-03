export const getWeatherNow = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=daily&appid=${process.env.API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const weather = `It's ${data.weather[0].description}, with ${data.main.temp} degrees, ${data.main.humidity}% humidity in ${data.name}.`;
    return { weather, error: null };
  } catch (err) {
    const error = 'Something went wrong. Try again!';
    return { error, weather: null };
  }
};
