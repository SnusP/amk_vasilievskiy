import hashPassword from "../../utils/hashPassword";
import {
  Table,
  Column,
  Model,
  Unique,
  AllowNull,
  BeforeCreate,
  BeforeUpdate,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from "sequelize-typescript";
import { Optional } from "sequelize";

export type UserAttributes = {
  id: Number;
  login: string;
  password: string;
};

export type UserCreationAttributes = Optional<UserAttributes, "id">;

@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: Number;

  @AllowNull(false)
  @Column
  login: string;

  @AllowNull(false)
  @Column
  password: string;

  @BeforeCreate
  @BeforeUpdate
  static generatePasswordHash(instance: User) {
    const { password } = instance;
    if (instance.changed("password")) {
      instance.password = hashPassword(password);
    }
  }
}

export default User;
