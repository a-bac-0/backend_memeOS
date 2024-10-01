import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_TEST_NAME } from "../config.js";

// Determina si estamos en un entorno de prueba
const isTest = process.env.NODE_ENV === 'test';
const dbName = isTest ? DB_TEST_NAME : DB_NAME;

const db = new Sequelize(dbName, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false, // Desactiva los registros de SQL
  define: {
    timestamps: false,
  },
});

export default db;
