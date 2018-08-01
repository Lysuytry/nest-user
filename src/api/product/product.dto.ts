import {IsString, IsNotEmpty, IsNumber} from 'class-validator';
import { Pagination } from 'common/class/pagination';

export class CreateProduct {
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @IsNotEmpty()
  @IsNumber()
  readonly container!: number;

  @IsNotEmpty()
  @IsNumber()
  readonly quantity!: number;

  @IsNotEmpty()
  @IsNumber()
  readonly unitPrice!: number;

  @IsNotEmpty()
  @IsNumber()
  readonly wholePrice!: number;

  @IsNotEmpty()
  @IsNumber()
  readonly categoryId!: number;

  @IsString()
  readonly status!: string;

  @IsNotEmpty()
  @IsNumber()
  readonly createdBy!: number;

  @IsNotEmpty()
  @IsNumber()
  readonly updatedBy!: number;

}

export class UpdateProduct {
  @IsString()
  readonly name!: string;

  @IsNumber()
  readonly container!: number;

  @IsNumber()
  readonly quantity!: number;

  @IsNumber()
  readonly unitPrice!: number;

  @IsNumber()
  readonly wholePrice!: number;

  @IsNumber()
  readonly categoryId!: number;

  @IsString()
  readonly status!: string;

  @IsNumber()
  readonly updatedBy!: number;
}

export class GetSimpleQuery extends Pagination{
  @IsString()
  readonly status!: string;
}
