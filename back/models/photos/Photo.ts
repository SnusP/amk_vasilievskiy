import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  AutoIncrement,
  DataType,
  BeforeCreate,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import path from "path";

export type PhotoAttributes = {
  id: number;
  title: string;
  filename: string;
  path: string;
};

export type PhotoCreationAttributes = Optional<PhotoAttributes, "id" | "path">;

@Table
export class Photo extends Model<PhotoAttributes, PhotoCreationAttributes> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  filename: string;

  @Column(DataType.STRING)
  path: string;

  @BeforeCreate
  static generatePath(instance: Photo) {
    // Извлекаем расширение файла
    const fileExtension = path.extname(instance.filename);
    // Генерируем уникальное имя файла, например, используя текущую метку времени
    const uniqueName = `${path.basename(
      instance.filename,
      fileExtension
    )}${fileExtension}`;
    // Формируем полный путь к файлу в папке /uploads
    instance.path = path.join("/uploads", uniqueName);
  }
}

export default Photo;
