import Sequelize from "sequelize";

export const sequelize = new Sequelize('challengedb', 'postgres', 'pgadmin', {
    host: 'localhost',
    dialect: 'postgres'
})