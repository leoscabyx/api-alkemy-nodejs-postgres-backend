import app from "./app.js";
import { sequelize } from "./database/database.js";

import "./models/Personaje.js";
import "./models/Movie.js";
import "./models/User.js";
import "./models/Genero.js";

try {
    // await sequelize.authenticate(); // Solo probar la conexion
    await sequelize.sync(); // Crear las tablas si no existen por defecto sin parametro. si no pasar un objeo para eliminar la table y volver a crearla -> { force: true }
    console.log(`Conexion establecida DB`)
    app.listen(8080)
    console.log(`Servidor corriendo en puerto 8080`)
} catch (error) {
    console.error("Error: ", error)
}

