import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Genero = sequelize.define('Genero', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imagen: {
    type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true
  }
});

export default Genero