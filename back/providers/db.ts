import { Sequelize } from "sequelize-typescript";
import { RefreshToken } from "../models/auth/RefreshToken";
import User from "../models/users/User";
import Service from "../models/services/Service";
import Photo from "../models/photos/Photo";
import Report from "../models/reports/Report";
import About from "../models/about/About";
const sequelize = new Sequelize({
  database: "some_db",
  dialect: "sqlite",
  username: "root",
  password: "",
  storage: "db.sqlite",
  logging: console.log,
});

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
