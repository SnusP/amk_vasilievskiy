import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  AutoIncrement,
} from "sequelize-typescript";
import { Optional } from "sequelize";

export type AboutAttributes = {
  id: number;
  phone: string;
  info: string;
};

export type AboutCreationAttributes = Optional<AboutAttributes, "id">;

@Table
export class About extends Model<AboutAttributes, AboutCreationAttributes> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column
  phone: string;

  @AllowNull(false)
  @Column
  info: string;
}

export default About;
