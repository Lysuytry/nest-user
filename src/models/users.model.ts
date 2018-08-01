import { Table, Model, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({ autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ allowNull: false })
  username!: string;

  @Column({ allowNull: false })
  email!: string;

  @Column({ allowNull: false })
  password!: string;

  @Column({ allowNull: false, type: DataType.ENUM('admin', 'guest', 'sale') })
  role!: string;

  @Column({ allowNull: false, type: DataType.ENUM('male', 'female') })
  gender!: string;

  @Column({ allowNull: false, type: DataType.ENUM('active', 'inactive'), defaultValue: 'active' })
  status!: string;

  @Column({ allowNull: false, defaultValue: false })
  isVerify!: boolean;

  @Column({ allowNull: true })
  createdBy!: number;

  @Column({ allowNull: true })
  updatedBy!: number;

  @CreatedAt
  @Column({ field: 'createdAt' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updatedAt' })
  updatedAt!: Date;
}
