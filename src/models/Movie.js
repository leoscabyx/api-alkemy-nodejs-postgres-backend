
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

import Genero from './Genero.js'

const Movie = sequelize.define('Movie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imagen: {
    type: DataTypes.STRING
  },
  titulo: {
    type: DataTypes.STRING,
    unique: true
  },
  fecha: {
    type: DataTypes.STRING
  },
  calificacion: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
});

Movie.belongsToMany(Genero, { through: "Movie_Genero" });
Genero.belongsToMany(Movie, { through: "Movie_Genero" });

export default Movie;