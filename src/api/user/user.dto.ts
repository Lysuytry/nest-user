import { IsEmail, IsString, IsNotEmpty, IsAlphanumeric, IsAlpha } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName!: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName!: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  readonly username!: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  readonly password!: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email!: string;

  @IsNotEmpty()
  @IsAlpha()
  readonly gender?: string;
}
