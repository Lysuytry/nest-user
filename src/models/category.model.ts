import { Column, Table, Model, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript';

@Table({ tableName: 'Categories'})
export class Category extends Model<Category>{
  @Column({ autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ allowNull: false })
  name!: string;

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
