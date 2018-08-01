import { IsNumber, IsNotEmpty } from 'class-validator';

export class AlertDto {
  @IsNotEmpty()
  @IsNumber()
  readonly productId!: number;

  @IsNotEmpty()
  @IsNumber()
  readonly createdBy!: number;
}
