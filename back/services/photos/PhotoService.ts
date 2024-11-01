import Photo, {
  PhotoAttributes,
  PhotoCreationAttributes,
} from "../../models/photos/Photo";
import { Op, where } from "sequelize";
import fs from "fs"; // Подключаем модуль для работы с файловой системой
class PhotoService {
  async create(photoData: PhotoCreationAttributes): Promise<Photo> {
    try {
      const photo = await Photo.create(photoData);
      return photo;
    } catch (error) {
      throw error;
    }
  }
  async getAll(): Promise<Photo[]> {
    try {
      const photo = await Photo.findAll();
      return photo;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      const photo = await Photo.findByPk(id);
      if (!photo) {
        throw new Error("Photo not found");
      }

      // Удаляем файл из файловой системы
      fs.unlinkSync(`uploads/${photo.filename}`);

      // Удаляем запись о фотографии из базы данных
      const deletedRowsCount = await Photo.destroy({
        where: { id: id },
      });

      return deletedRowsCount;
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<Photo> {
    try {
      const photo = await Photo.findByPk(id);
      if (!photo) {
        throw new Error("Not Found");
      }
      return photo;
    } catch (error) {
      throw error;
    }
  }
}

export default PhotoService;
