import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CategoryDto {
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
