
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

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

export default Movie