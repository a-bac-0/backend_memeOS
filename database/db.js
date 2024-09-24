import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

const db = new Sequelize('memeos_app', 'root', process.env.PASSWORD, {
    host: 'localhost',
    dialect:'mysql',
    define: {
        timestamps: false
    }
  });

export default db