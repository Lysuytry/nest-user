import { IsNumber, IsNotEmpty } from 'class-validator';
import { Pagination } from 'common/class/pagination';

export class CreateAlert {
  @IsNotEmpty()
  @IsNumber()
  readonly productId!: number;

  @IsNotEmpty()
  @IsNumber()
  readonly createdBy!: number;
}

export class GetSimpleQuery extends Pagination {
  @IsNumber() readonly productId!: number;
}
