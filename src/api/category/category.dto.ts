import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Pagination } from 'common/class/pagination';

export class CreateCategory {
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @IsString()
  readonly status!: string;

  @IsNumber()
  readonly createdBy!: number;

  @IsNumber()
  readonly updatedBy!: number;
}

export class UpdateCategory {
  @IsString()
  readonly name!: string;

  @IsString()
  readonly status!: string;

  @IsNumber()
  readonly createdBy!: number;

  @IsNumber()
  readonly updatedBy!: number;
}

export class GetSimpleQuery extends Pagination{
  @IsString()
  readonly status!: string;
}
