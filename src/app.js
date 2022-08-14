import express from "express";
import routerPersonajes from './routes/routerPersonajes.js';
import routerMovies from './routes/routerMovies.js';
import routerGeneros from './routes/routerGeneros.js';
import routerAuth from './routes/routerAuth.js'
import { authJWT } from './utils/jwt.js'

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.json({ msj: 'Hola Mundo Alkemy desde Express & Sequelize'})
})

app.use('/api/characters', authJWT, routerPersonajes)
app.use('/api/movies', authJWT, routerMovies)
app.use('/api/genders', authJWT, routerGeneros)
app.use('/api/auth', routerAuth)

export default app;