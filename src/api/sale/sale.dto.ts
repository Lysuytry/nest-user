import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Pagination } from 'common/class/pagination';

export class CreateSale {
  @IsNotEmpty()
  @IsNumber()
  readonly productId!: number;

  @IsNotEmpty()
  @IsNumber()
  readonly total!: number;
}

export class UpdateSale {
  @IsNumber() readonly productId!: number;

  @IsNumber() readonly total!: number;
}

export class GetSimpleQuery extends Pagination {}
