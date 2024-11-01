import About, {
  AboutAttributes,
  AboutCreationAttributes,
} from "../../models/about/About";
class AboutService {
  async create(userData: AboutCreationAttributes): Promise<About> {
    try {
      const service = await About.create(userData);
      return service;
    } catch (error) {
      throw error;
    }
  }
  async update(
    service: AboutAttributes,
    serviceData: Pick<AboutAttributes, "phone" | "info">
  ): Promise<About> {
    try {
      const [updatedRowsCount, updatedService] = await About.update(
        {
          phone: serviceData.phone,
          info: serviceData.info,
        },
        {
          where: { id: service.id },
          returning: true,
        }
      );

      if (updatedRowsCount === 0) {
        throw new Error("Not found");
      }

      return updatedService[0];
    } catch (error) {
      throw error;
    }
  }

  async get(): Promise<About> {
    try {
      const service = await About.findByPk(1);
      if (!service) {
        throw new Error("Not Found");
      }
      return service;
    } catch (error) {
      throw error;
    }
  }
}

export default AboutService;
