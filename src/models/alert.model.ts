import { Table, Model, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Alert extends Model<Alert>{
  @Column({ type: DataType.CHAR(36), defaultValue: DataType.UUIDV4, primaryKey: true })
  id!: string;

  @Column({ allowNull: false})
  productId!: number;

  @Column({ allowNull: false })
  createdBy!: number;

  @CreatedAt
  @Column({ field: 'createdAt' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updatedAt' })
  updatedAt!: Date;
}
