import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  AutoIncrement,
} from "sequelize-typescript";
import { Optional } from "sequelize";

export type ServiceAttributes = {
  id: Number;
  name: string;
  subtitle: string;
  price1: string;
  price2: string;
  price3: string;
  type: string;
};

export type ServiceCreationAttributes = Optional<ServiceAttributes, "id">;

@Table
export class Service extends Model<
  ServiceAttributes,
  ServiceCreationAttributes
> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  id: Number;

  @AllowNull(false)
  @Column
  name: string;

  @Column
  subtitle: string;

  @Column
  price1: string;

  @Column
  price2: string;

  @Column
  price3: string;

  @AllowNull(false)
  @Column
  type: string;
}

export default Service;
