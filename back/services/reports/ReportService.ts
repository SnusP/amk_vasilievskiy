import Report, {
  ReportAttributes,
  ReportCreationAttributes,
} from "../../models/reports/Report";
import { Op, where } from "sequelize";
import { promisify } from "util";
import fs from "fs"; // Подключаем модуль для работы с файловой системой
class ReportService {
  async create(reportData: ReportCreationAttributes): Promise<Report> {
    try {
      const report = await Report.create(reportData);
      return report;
    } catch (error) {
      throw error;
    }
  }
  async getAll(): Promise<Report[]> {
    try {
      const report = await Report.findAll();
      return report;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      const report = await Report.findByPk(id);
      if (!report) {
        throw new Error("Report not found");
      }
      const fsUnlink = promisify(fs.unlink);
      const fsAccess = promisify(fs.access);
      // Проверяем наличие файла
      const filePath = `uploads/${report.filename}`;
      try {
        await fsAccess(filePath);
        // Файл существует, удаляем его
        await fsUnlink(filePath);
      } catch (err) {
        // Файл не существует, продолжаем выполнение
        console.log("File does not exist, skipping deletion");
      }

      // Удаляем запись о фотографии из базы данных
      const deletedRowsCount = await Report.destroy({
        where: { id: id },
      });

      return deletedRowsCount;
    } catch (error) {
      throw error;
    }
  }

  async update(
    service: ReportAttributes,
    serviceData: Pick<ReportAttributes, "reporter" | "text">
  ): Promise<Report> {
    try {
      const [updatedRowsCount, updatedService] = await Report.update(
        {
          reporter: serviceData.reporter,
          text: serviceData.text,
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

  async findById(id: number): Promise<Report> {
    try {
      const report = await Report.findByPk(id);
      if (!report) {
        throw new Error("Not Found");
      }
      return report;
    } catch (error) {
      throw error;
    }
  }
}

export default ReportService;
