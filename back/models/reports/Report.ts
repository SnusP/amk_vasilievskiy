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

export type ReportAttributes = {
  id: number;
  reporter: string;
  text: string;
  filename?: string;
  path?: string;
};

export type ReportCreationAttributes = Optional<
  ReportAttributes,
  "id" | "path"
>;

@Table
export class Report extends Model<ReportAttributes, ReportCreationAttributes> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column
  text: string;

  @AllowNull(false)
  @Column
  reporter: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  filename?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  path?: string;

  @BeforeCreate
  static generatePath(instance: Report) {
    if (instance.filename) {
      const fileExtension = path.extname(instance.filename);
      const uniqueName = `${path.basename(
        instance.filename,
        fileExtension
      )}${fileExtension}`;
      instance.path = path.join("/uploads", uniqueName);
    }
  }
}

export default Report;
