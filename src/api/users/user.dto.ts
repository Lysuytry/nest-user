import { IsNotEmpty, IsString, IsEmail, IsBoolean, IsNumber } from 'class-validator';
import { Pagination } from 'common/class/pagination';

export class CreateUser {
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

export class UpdateUser {
  @IsString()
  readonly username!: string;

  @IsEmail()
  readonly email!: string;

  @IsString()
  readonly password!: string;

  @IsString()
  readonly role!: string;

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

export class GetSimpleQuery extends Pagination{
  @IsString()
  readonly status!: string;
}
