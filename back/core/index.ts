import express from "express";
import { createServer, Server } from "http";
import sequelize from "../providers/db";
import { Sequelize } from "sequelize-typescript";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "../routes/index";
import path from "path";

require("dotenv").config();

export default class App {
  public port: number;
  public host: string;

  private app: express.Application;
  private server: Server;
  private sequelize: Sequelize;

  constructor(port = 8000, host = "localhost") {
    this.port = Number(process.env.PORT) || port;
    this.host = process.env.HOST || host;

    this.app = this.createApp();
    this.server = this.createServer();
    this.sequelize = sequelize;
  }

  private createApp(): express.Application {
    const app = express();
    app.use(cors({
    origin: 'http://amk-vo.online', // разрешите доступ с адреса вашего фронтенда
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // разрешенные методы
    allowedHeaders: ['Content-Type'], // разрешенные заголовки
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/", routes);
    app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
    return app;
  }

  private createServer(): Server {
    const server = createServer(this.app);
    return server;
  }

  public start(): void {
    this.server.listen(this.port, () => {
      console.log(`Running server on port ${this.port}`);
    });
  }
}
