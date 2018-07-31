import { Column, Model, Table, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'Products' })
export class Product extends Model<Product> {
  @Column({ autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ allowNull: false })
  name!: string;

  @Column({ allowNull: false })
  container!: number;

  @Column({ allowNull: false })
  quantity!: number;

  @Column({ defaultValue: 0 })
  unitPrice!: number;

  @Column({ defaultValue: 0 })
  wholePrice!: number;

  @Column({ allowNull: false })
  categoryId!: number;

  @Column({ allowNull: false, type: DataType.ENUM('active', 'inactive'), defaultValue: 'active' })
  status!: string;

  @Column({ allowNull: false })
  createdBy!: number;

  @Column({ allowNull: false })
  updatedBy!: number;

  @CreatedAt
  @Column({ field: 'createdAt' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updatedAt' })
  updatedAt!: Date;
}
