import AboutService from "../../services/about/AboutService";
import { AboutAttributes } from "../../models/about/About";
import { error } from "console";

export default class AboutController {
  private aboutService: AboutService;

  constructor() {
    this.aboutService = new AboutService();
  }
  create = async (request: any, response: any) => {
    const { body } = request;
    console.log(body);
    // console.log(34345345345);
    try {
      const data: AboutAttributes | Error = await this.aboutService.create(
        body
      );
      response.status(201).send(data);
    } catch (error: any) {
      response.status(400).send({ error: error.toString() });
    }
  };
  get = async (request: any, response: any) => {
    try {
      const about = await this.aboutService.get();
      response.status(201).send(about);
    } catch (error: any) {
      response.status(404).send({ error: error.toString() });
    }
  };

  update = async (request: any, response: any) => {
    try {
      const about = await this.aboutService.get();
      const upd = await this.aboutService.update(about, request.body);
      const updatedAbout = await this.aboutService.get();
      response.status(201).send(updatedAbout);
    } catch (error: any) {
      response.status(400).send({ error: error.toString() });
    }
  };
}
