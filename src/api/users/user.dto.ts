import { IsNotEmpty, IsString, IsEmail, IsBoolean, IsNumber } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly username!: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email!: string;

  @IsNotEmpty()
  @IsString()
  readonly password!: string;

  @IsString()
  readonly role!: string;

  @IsNotEmpty()
  @IsString()
  readonly gender!: string;

  @IsString()
  readonly status!: string;

  @IsBoolean()
  readonly isVerify!: boolean;

  @IsNumber()
  readonly createdBy!: number;

  @IsNumber()
  readonly updatedBy!: number;
}
