import {IsString, IsNotEmpty, IsNumber} from 'class-validator';

export class productDto {
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
