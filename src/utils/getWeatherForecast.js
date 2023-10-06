export const getWeatherForecast = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=daily&appid=${process.env.API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const weather = data.list.filter(
      (d) => new Date(d.dt_txt).getHours() === 12
    );
    return { weather, city: data.city.name, error: null };
  } catch (err) {
    const error = 'Something went wrong. Try again!';
    return { error, weather: null };
  }
};
