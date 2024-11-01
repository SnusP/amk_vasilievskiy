import Service, {
  ServiceAttributes,
  ServiceCreationAttributes,
} from "../../models/services/Service";
import { Op, where } from "sequelize";
class ServiceService {
  async create(userData: ServiceCreationAttributes): Promise<Service> {
    try {
      const service = await Service.create(userData);
      return service;
    } catch (error) {
      throw error;
    }
  }
  async getAll(): Promise<Service[]> {
    try {
      const service = await Service.findAll();
      return service;
    } catch (error) {
      throw error;
    }
  }

  async update(
    service: ServiceAttributes,
    serviceData: Pick<
      ServiceAttributes,
      "name" | "price1" | "price2" | "price3" | "subtitle"
    >
  ): Promise<Service> {
    try {
      const [updatedRowsCount, updatedService] = await Service.update(
        {
          name: serviceData.name,
          price1: serviceData.price1,
          price2: serviceData.price2,
          price3: serviceData.price3,
          subtitle: serviceData.subtitle,
        },
        {
          where: { id: service.id },
          returning: true,
        }
      );

      if (updatedRowsCount === 0) {
        throw new Error("Service not found");
      }
      console.log(updatedService);
      return updatedService[0];
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      console.log(id);
      const deletedRowsCount = await Service.destroy({
        where: { id: id },
      });
      if (deletedRowsCount === 0) {
        throw new Error("Service not found");
      }
      return deletedRowsCount;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: number): Promise<Service> {
    try {
      const service = await Service.findByPk(id);
      if (!service) {
        throw new Error("Not Found");
      }
      return service;
    } catch (error) {
      throw error;
    }
  }

  async getByCategory(category: string): Promise<Service[]> {
    try {
      const service = await Service.findAll({ where: { type: category } });

      return service;
    } catch (error) {
      throw error;
    }
  }
}

export default ServiceService;
