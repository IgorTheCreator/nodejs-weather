import express from 'express';
import { body } from 'express-validator';
import weatherController from '../controllers/weatherController.js';

const router = express.Router();

router.get('/', weatherController.getWeather);
router.post(
  '/',
  [body('city', "Input can't be empty").notEmpty()],
  weatherController.postWeather
);

export default router;
