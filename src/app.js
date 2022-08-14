import express from "express";
import routerPersonajes from './routes/routerPersonajes.js';
import routerMovies from './routes/routerMovies.js';
import routerGeneros from './routes/routerGeneros.js';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.json({ msj: 'Hola Mundo Alkemy desde Express & Sequelize'})
})

app.use('/api/characters', routerPersonajes)
app.use('/api/movies', routerMovies)
app.use('/api/genders', routerGeneros)

export default app;