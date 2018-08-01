import { Table, Model, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Sale extends Model<Sale> {
  @Column({ primaryKey: true, allowNull: false })
  productId!: number;

  @Column({ allowNull: false })
  total!: number;

  @CreatedAt
  @Column({ field: 'createdAt' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updatedAt' })
  updatedAt!: Date;
}
