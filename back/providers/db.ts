import { Sequelize } from "sequelize-typescript";
import { RefreshToken } from "../models/auth/RefreshToken";
import User from "../models/users/User";
import Service from "../models/services/Service";
import Photo from "../models/photos/Photo";
import Report from "../models/reports/Report";
import About from "../models/about/About";

const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "default_db_name",
  process.env.DB_USER || "default_user",
  process.env.DB_PASSWORD || "default_password",
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dialect: "postgres",
    logging: console.log,
  }
);

const models = [User, RefreshToken, Service, Photo, Report, About];

sequelize.addModels(models);

sequelize
  .sync()
  .then(() => {
    //something here
    console.log("synced models");
  })
  .catch((e) => console.log(e));

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

export default sequelize;
