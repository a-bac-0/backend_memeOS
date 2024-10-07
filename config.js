import { config } from "dotenv";

config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_TEST_NAME = process.env.DB_TEST_NAME;

export { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_TEST_NAME };