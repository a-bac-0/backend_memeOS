import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "../config.js";

dotenv.config();

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

export default db;
