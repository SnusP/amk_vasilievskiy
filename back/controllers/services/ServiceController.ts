import ServiceService from "../../services/services/ServiceService";
import { ServiceAttributes } from "../../models/services/Service";
import { error } from "console";

export default class ServiceController {
  private serviceService: ServiceService;

  constructor() {
    this.serviceService = new ServiceService();
  }
  create = async (request: any, response: any) => {
    const { body } = request;
    console.log(body);
    try {
      const data: ServiceAttributes | Error = await this.serviceService.create(
        body
      );
      response.status(201).send(data);
    } catch (error: any) {
      response.status(400).send({ error: error.toString() });
    }
  };
  get = async (request: any, response: any) => {
    try {
      const product = await this.serviceService.getAll();
      response.status(201).send(product);
    } catch (error: any) {
      response.status(404).send({ error: error.toString() });
    }
  };

  update = async (request: any, response: any) => {
    try {
      const service = await this.serviceService.getById(request.params.id);
      const upd = await this.serviceService.update(service, request.body);
      const updatedService = await this.serviceService.getById(
        request.params.id
      );
      response.status(201).send(updatedService);
    } catch (error: any) {
      response.status(400).send({ error: error.toString() });
    }
  };

  delete = async (request: any, response: any) => {
    try {
      await this.serviceService.delete(request);
      response.status(201).send({ error: "Service have successful deleted" });
    } catch (error: any) {
      response.status(400).send({ error: error.toString() });
    }
  };

  findById = async (request: any, response: any) => {
    try {
      const service = await this.serviceService.getById(request);
      response.status(201).send(service);
    } catch (error: any) {
      response.status(404).send({ error: error.toString() });
    }
  };
  findByCategory = async (request: any, response: any) => {
    try {
      console.log(request);
      const service = await this.serviceService.getByCategory(request);
      response.status(201).send(service);
    } catch (error: any) {
      response.status(404).send({ error: error.toString() });
    }
  };
}
