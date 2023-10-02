import { validationResult } from 'express-validator';

class weatherController {
  async getWeather(req, res) {
    res.render('index', { weather: null, error: null });
  }
  async postWeather(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = errors.array()[0].msg;
      return res.render('index', { weather: null, error: error });
    }

    const city = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=daily&appid=${process.env.API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const weather = `It's ${data.weather[0].description}, with ${data.main.temp} degrees,
      ${data.main.humidity}% humidity in ${data.name}.`;
      return res.render('index', { weather: weather, error: null });
    } catch (err) {
      const error = 'Something went wrong. Try again!';
      return res.render('index', { weather: null, error: error });
    }
  }
}

export default new weatherController();
