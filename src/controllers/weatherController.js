import { validationResult } from 'express-validator';
import { getWeatherNow } from '../utils/getWeatherNow.js';

class weatherController {
  async getWeather(req, res) {
    return res.render('index', { weather: null, error: null });
  }

  async postWeather(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = errors.array()[0].msg;
      return res.render('index', { weather: null, error: error });
    }

    const city = req.body.city;
    const button = req.body.button;

    if (button === 'now') {
      const { weather, error } = await getWeatherNow(city);
      return res.render('index', { weather, error });
    }

    if (button === 'week') {
    }
  }
}

export default new weatherController();
