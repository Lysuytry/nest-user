import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SaleDto {
  @IsNotEmpty()
  @IsNumber()
  readonly productId!: number;

  @IsNotEmpty()
  @IsNumber()
  readonly total!: number;
}
