import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'incorrect email' })
	email: string;

	@MinLength(7)
	@MaxLength(15)
	@IsString({ message: 'no password provided' })
	password: string;

	@MinLength(3)
	@MaxLength(40)
	@IsString({ message: 'no name provided' })
	name: string;
}
