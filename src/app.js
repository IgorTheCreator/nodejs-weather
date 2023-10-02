import path from 'node:path';
import express from 'express';
import 'dotenv/config';
import router from './routes/index.js';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve('src', 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(router);

app.listen(port, () => {
  console.log(`Listened on ${port}`);
});
