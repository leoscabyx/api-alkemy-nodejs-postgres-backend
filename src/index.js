import app from "./app.js";
import { sequelize } from "./database/database.js";

try {
    await sequelize.authenticate();
    console.log(`Conexion establecida DB`)
    app.listen(8080)
    console.log(`Servidor corriendo en puerto 8080`)
} catch (error) {
    console.error("Error: ", error)
}

